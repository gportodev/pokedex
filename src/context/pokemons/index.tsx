import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
  useCallback,
} from 'react';
import { PokemonDTO } from '@/dtos/PokemonDTO';
import api from '@/services/api';
import { PokemonsDTO } from '@/dtos/PokemonsDTO';
import { Alert } from 'react-native';
import { usePokemonDatabase } from '@/database/usePokemonDatabase';
import _ from 'lodash';
import { formatNameToShow } from '@/common/utils/pokemon';
import * as FileSystem from 'expo-file-system';
import { PokemonSpeciesDTO } from '@/dtos/PokemonSpeciesDTO';
import { PokemonEvolutionChainDTO } from '@/dtos/PokemonEvolutionChainDTO';

type PokemonProps = {
  children: ReactNode;
};

type PokemonListContext = {
  pokemonList: PokemonDTO[];
  setPokemonList: React.Dispatch<React.SetStateAction<PokemonDTO[]>>;
  loading: boolean;
  pokemonLength: number;
};

const defaultValue: PokemonListContext = {
  pokemonList: [],
  loading: false,
  pokemonLength: 0,
  setPokemonList: () => {},
};

const PokemonContext = createContext(defaultValue);

function PokemonProvider({ children }: PokemonProps): JSX.Element {
  const [pokemonList, setPokemonList] = useState<PokemonDTO[]>([]);
  const [pokemonLength, setPokemonLength] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const pokemonDatabase = usePokemonDatabase();

  const saveImage = async (imageUrl: string, imageName: string) => {
    try {
      // Define the path where the image will be saved
      const fileUri = `${FileSystem.documentDirectory}${imageName}.png`;

      // Download the image
      const downloadResumable = FileSystem.createDownloadResumable(
        imageUrl,
        fileUri,
      );

      const { uri } = await downloadResumable.downloadAsync();

      return uri; // Return the local URI for future use
    } catch (error) {
      return null;
    }
  };

  const getPokemonEvolutionChain = useCallback(
    async (name: string, id: number) => {
      try {
        const speciesResponse = await api.get<PokemonSpeciesDTO>(
          `/pokemon-species/${id}`,
        );

        const { url } = speciesResponse.data.evolution_chain;

        const evolutionResponse = await api.get<PokemonEvolutionChainDTO>(url);

        const { chain } = evolutionResponse.data;

        let evolutions: string[] = [];

        let currentEvolution = chain;

        while (currentEvolution) {
          const { evolves_to, species } = currentEvolution;

          const noDuplicates = evolutions.find(
            evolution => evolution === species.name,
          );

          if (species.name !== name && species.name !== noDuplicates) {
            evolutions.push(species.name);
          }

          if (evolves_to.length === 0) {
            break;
          }

          if (evolves_to.length > 1) {
            const evolvesToFiltered = evolves_to.map(
              evolution => evolution.species.name,
            );

            evolutions.splice(0, evolutions.length);

            evolutions = [...evolvesToFiltered];
          }

          currentEvolution = currentEvolution.evolves_to[0];
        }

        return evolutions;
      } catch (error) {
        console.error('Error fetching evolution chain: ', error);
        return [];
      }
    },
    [],
  );

  const fetchAllPokemon = useCallback(async () => {
    try {
      setLoading(true);

      const numberOfPokemons = await api.get<PokemonsDTO>('pokemon');

      const { count } = numberOfPokemons.data;

      const response = await api.get<PokemonsDTO>(
        `pokemon?limit=${count}&offset=0`,
      );

      const { results } = response.data;

      const arr: (PokemonDTO | null)[] = await Promise.all(
        results.map(async pokemon => {
          try {
            const pokemonInfo = await api.get<PokemonDTO>(
              `pokemon/${pokemon.name}`,
            );

            const {
              id,
              name,
              types,
              sprites,
              stats,
              abilities,
              moves,
              species,
              past_types,
              held_items,
              game_indices,
              forms,
              cries,
              is_default,
              order,
            } = pokemonInfo.data;

            const statNameMap: Record<string, string> = {
              'special-attack': 'Sp. Attack',
              'special-defense': 'Sp. Defense',
            };

            const formattedStatsName = stats.map(statItem => {
              return {
                ...statItem,
                stat: {
                  ...statItem.stat,
                  name: statNameMap[statItem.stat.name] || statItem.stat.name,
                },
              };
            });

            const pokemonWeaknesses = await Promise.all(
              types.map(async pokemonType => {
                const response = await api.get(`type/${pokemonType.type.name}`);

                const { damage_relations } = response.data;

                const { double_damage_from } = damage_relations;

                const weaknesses = double_damage_from.map(
                  (item: { name: string; url: string }) => item.name,
                );

                return weaknesses;
              }),
            );

            const flattenedWeaknesses = [...new Set(pokemonWeaknesses.flat())];

            const imagePath = await saveImage(
              sprites.other['official-artwork'].front_default,
              name,
            );

            if (!imagePath) return null;

            const pokemonEvolutions =
              id > 1025 ? [] : await getPokemonEvolutionChain(name, id);

            const dataToShow = {
              ...pokemonInfo.data,
              displayName: formatNameToShow(name),
              avatar: imagePath,
              weaknesses: flattenedWeaknesses,
              stats: formattedStatsName,
              evolutions: pokemonEvolutions,
            };

            const dataToStore = {
              ...pokemonInfo.data,
              types: JSON.stringify(types),
              sprites: JSON.stringify(sprites),
              stats: JSON.stringify(formattedStatsName),
              abilities: JSON.stringify(abilities),
              moves: JSON.stringify(moves),
              species: JSON.stringify(species),
              past_types: JSON.stringify(past_types) || '',
              held_items: JSON.stringify(held_items),
              game_indices: JSON.stringify(game_indices),
              forms: JSON.stringify(forms),
              cries: JSON.stringify(cries),
              is_default: is_default ? 1 : 0,
              pokemon_order: order,
              displayName: formatNameToShow(name),
              weaknesses: JSON.stringify(flattenedWeaknesses),
              avatar: JSON.stringify(imagePath),
              evolutions: JSON.stringify(pokemonEvolutions),
            };

            await pokemonDatabase.create(dataToStore);

            return dataToShow;
          } catch (error) {
            return null;
          }
        }),
      );

      const validPokemonList: PokemonDTO[] = arr.filter(
        (item): item is PokemonDTO => item !== null,
      );

      setPokemonList(validPokemonList);
    } catch (error) {
      Alert.alert('Error', 'Could not fetch all pokémons');
    } finally {
      setLoading(false);
    }
  }, [getPokemonEvolutionChain, pokemonDatabase]);

  const getPokemonsList = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);

      const response = await pokemonDatabase.searchAll();

      if (response.length > 0) {
        const convertedList = response.map(row => {
          const {
            types,
            sprites,
            abilities,
            moves,
            species,
            past_types,
            held_items,
            game_indices,
            forms,
            cries,
            stats,
            is_default,
            pokemon_order,
            weaknesses,
            avatar,
            evolutions,
          } = row;

          const formatted: PokemonDTO = {
            ...row,
            types: JSON.parse(types),
            sprites: JSON.parse(sprites),
            stats: JSON.parse(stats),
            abilities: JSON.parse(abilities),
            moves: JSON.parse(moves),
            species: JSON.parse(species),
            past_types: JSON.parse(past_types),
            held_items: JSON.parse(held_items),
            game_indices: JSON.parse(game_indices),
            forms: JSON.parse(forms),
            cries: JSON.parse(cries),
            is_default: is_default === 1,
            order: pokemon_order,
            weaknesses: JSON.parse(weaknesses),
            avatar: JSON.parse(avatar),
            evolutions: JSON.parse(evolutions),
          };

          return formatted;
        });

        setPokemonList(convertedList);
      } else {
        await fetchAllPokemon();
      }
    } catch (error) {
      Alert.alert('Error', 'List of pokemons unavailable.Try again later');
    } finally {
      setLoading(false);
    }
  }, [fetchAllPokemon, pokemonDatabase]);

  const countUniqueSpecies = useCallback(() => {
    const total = _.uniqBy(pokemonList, pokemon => pokemon.species.name).length;

    setPokemonLength(total);
  }, [pokemonList]);

  useEffect(() => {
    getPokemonsList();
  }, []);

  useEffect(() => {
    if (pokemonList.length > 0) {
      countUniqueSpecies();
    }
  }, [countUniqueSpecies, pokemonList, pokemonList.length]);

  return (
    <PokemonContext.Provider
      value={{ pokemonList, loading, pokemonLength, setPokemonList }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

function usePokemon() {
  const context = useContext(PokemonContext);

  return context;
}

export { usePokemon, PokemonProvider };
