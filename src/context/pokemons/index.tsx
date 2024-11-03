// PokemonContext.js
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

type PokemonProps = {
  children: ReactNode;
};

type PokemonListContext = {
  pokemonList: PokemonDTO[];
  loading: boolean;
};

const defaultValue: PokemonListContext = {
  pokemonList: [],
  loading: false,
};

const PokemonContext = createContext(defaultValue);

function PokemonProvider({ children }: PokemonProps): JSX.Element {
  const [pokemonList, setPokemonList] = useState<PokemonDTO[]>([]);
  const [loading, setLoading] = useState(false);
  const pokemonDatabase = usePokemonDatabase();

  const fetchAllPokemon = useCallback(async () => {
    try {
      setLoading(true);

      const numberOfPokemons = await api.get('pokemon');

      const { count } = numberOfPokemons.data as PokemonsDTO;

      const response = await api.get(`pokemon?limit=${count}&offset=0`);

      const { results } = response.data as PokemonsDTO;

      const arr = await Promise.all(
        results.map(async pokemon => {
          const pokemonInfo = await api.get<PokemonDTO>(
            `pokemon/${pokemon.name}`,
          );

          const {
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

          const dataToShow = {
            ...pokemonInfo.data,
            avatar: sprites.other['official-artwork'].front_default,
            weaknesses: flattenedWeaknesses,
          };

          const dataToStore = {
            ...dataToShow,
            types: JSON.stringify(types),
            sprites: JSON.stringify(sprites),
            stats: JSON.stringify(stats),
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
            weaknesses: JSON.stringify(flattenedWeaknesses),
          };

          await pokemonDatabase.create(dataToStore);

          return dataToShow;
        }),
      );

      setPokemonList(arr);
    } catch (error) {
      console.log(error);
      console.log(JSON.stringify(error, undefined, 2));
      Alert.alert('Error', 'Could not fetch the data');
    } finally {
      setLoading(false);
    }
  }, [pokemonDatabase]);

  const getPokemonsList = useCallback(async (): Promise<void> => {
    try {
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
          } = row;

          const formatted = {
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
          };

          return formatted;
        });

        setPokemonList(convertedList);
      } else {
        await fetchAllPokemon();
      }
    } catch (error) {
      Alert.alert('Error', 'List of pokemons unavailable.Try again later');
    }
  }, [fetchAllPokemon, pokemonDatabase]);

  useEffect(() => {
    getPokemonsList();
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemonList, loading }}>
      {children}
    </PokemonContext.Provider>
  );
}

function usePokemon() {
  const context = useContext(PokemonContext);

  return context;
}

export { usePokemon, PokemonProvider };
