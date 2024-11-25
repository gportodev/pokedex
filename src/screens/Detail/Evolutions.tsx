import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import api from '@/services/api';
import { View, Text, FlatList } from 'react-native';
import { PokemonDTO } from '@/dtos/PokemonDTO';
import styles from './styles';

import { PokemonSpeciesDTO } from '@/dtos/PokemonSpeciesDTO';
import { PokemonEvolutionChainDTO } from '@/dtos/PokemonEvolutionChainDTO';
import { Loader } from '@/components/Loader';
import { usePokemonDatabase } from '@/database/usePokemonDatabase';
import { Pokemon } from '@/components/Pokemon';

type EvolutionsProps = {
  pokemon: PokemonDTO;
  onPress: (pokemon: PokemonDTO) => void;
};

function Evolutions({ pokemon, onPress }: EvolutionsProps): JSX.Element {
  const [evolutions, setEvolutions] = useState<PokemonDTO[]>([]);
  const [loading, setLoading] = useState(false);
  const { name } = pokemon;
  const { searchOne } = usePokemonDatabase();
  const searchOneRef = useRef(searchOne);

  const getPokemonEvolutionChain = useCallback(async () => {
    try {
      setLoading(true);

      const speciesResponse = await api.get<PokemonSpeciesDTO>(
        `/pokemon-species/${name}`,
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

      if (evolutions.length > 0) {
        const pokemonEvolutions = await Promise.all(
          evolutions.map(async name => {
            const response = await searchOneRef.current(name);

            if (!response) return;

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
            } = response;

            const parsedData: PokemonDTO = {
              ...response,
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

            return parsedData;
          }),
        );

        setEvolutions(pokemonEvolutions.filter(Boolean) as PokemonDTO[]);
      }
    } catch (error) {
      console.error('Error fetching evolution chain:', error);
      return null;
    } finally {
      setLoading(false);
    }
  }, [name]);

  const renderItem = useCallback(
    ({ item }: { item: PokemonDTO }) => {
      return <Pokemon item={item} onPress={onPress} />;
    },
    [onPress],
  );

  const renderEvolutions = useMemo(
    () => (
      <FlatList
        data={evolutions}
        renderItem={renderItem}
        contentContainerStyle={styles.evolutionContainer}
        keyExtractor={(item: PokemonDTO) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    ),
    [evolutions, renderItem],
  );

  useEffect(() => {
    getPokemonEvolutionChain();
  }, [getPokemonEvolutionChain]);

  return (
    <View style={styles.fourthBlockInfoContainer}>
      <Text style={styles.title}>Family tree</Text>

      {loading ? (
        <Loader height={50} width={50} />
      ) : evolutions.length > 0 ? (
        renderEvolutions
      ) : (
        <View>
          <Text>No evolutions found!</Text>
        </View>
      )}
    </View>
  );
}

export { Evolutions };
