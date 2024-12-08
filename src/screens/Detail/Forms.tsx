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
import { Loader } from '@/components/Loader';
import { usePokemonDatabase } from '@/database/usePokemonDatabase';
import { Pokemon } from '@/components/Pokemon';

type FormsProps = {
  pokemon: PokemonDTO;
  onPress: (pokemon: PokemonDTO) => void;
};

function Forms({ pokemon, onPress }: FormsProps): JSX.Element {
  const [forms, setForms] = useState<PokemonDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const { name } = pokemon;
  const { searchOne } = usePokemonDatabase();
  const searchOneRef = useRef(searchOne);

  const formatName = useCallback((name: string) => {
    const formattedName = name.replace(/-/g, ' ');

    return formattedName;
  }, []);

  const getPokemonEvolutionChain = useCallback(async () => {
    try {
      setLoading(true);

      const speciesResponse = await api.get<PokemonSpeciesDTO>(
        `/pokemon-species/${name}`,
      );

      const { varieties } = speciesResponse.data;

      const forms = varieties.map(variety => ({
        name: variety.pokemon.name,
      }));

      if (forms.length > 0) {
        const pokemonForms = await Promise.all(
          forms.map(async form => {
            const formattedName = formatName(form.name);

            const response = await searchOneRef.current(formattedName);

            if (!response || response.name === pokemon.name) return;

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

        setForms(pokemonForms.filter(Boolean) as PokemonDTO[]);
      }
    } catch (error) {
      console.error('Error fetching forms: ', error);
      return null;
    } finally {
      setLoading(false);
    }
  }, [formatName, name, pokemon.name]);

  const renderItem = useCallback(
    ({ item }: { item: PokemonDTO }) => {
      return <Pokemon item={item} onPress={onPress} />;
    },
    [onPress],
  );

  const renderEmpty = useMemo(() => {
    if (loading) {
      return (
        <View>
          <Loader height={70} width={70} loadingText="Loading forms..." />
        </View>
      );
    }

    return (
      <View>
        <Text>No forms found!</Text>
      </View>
    );
  }, [loading]);

  const renderForms = useMemo(
    () => (
      <FlatList
        data={forms}
        renderItem={renderItem}
        contentContainerStyle={styles.evolutionContainer}
        keyExtractor={(item: PokemonDTO) => item.id.toString()}
        horizontal
        ListEmptyComponent={renderEmpty}
      />
    ),
    [forms, renderEmpty, renderItem],
  );

  useEffect(() => {
    getPokemonEvolutionChain();
  }, [getPokemonEvolutionChain]);

  return (
    <View style={styles.fourthBlockInfoContainer}>
      <Text style={styles.title}>Forms</Text>

      {renderForms}
    </View>
  );
}

export { Forms };
