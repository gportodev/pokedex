import React, { useCallback, useEffect, useMemo, useState } from 'react';
import api from '@/services/api';
import { View, Text, FlatList } from 'react-native';
import { PokemonDTO } from '@/dtos/PokemonDTO';
import styles from './styles';

import { PokemonSpeciesDTO } from '@/dtos/PokemonSpeciesDTO';
import { Pokemon } from '@/components/Pokemon';
import { usePokemon } from '@/context/pokemons';

type FormsProps = {
  pokemon: PokemonDTO;
  onPress: (pokemon: PokemonDTO) => void;
};

function Forms({ pokemon, onPress }: FormsProps): JSX.Element {
  const { pokemonList } = usePokemon();
  const [forms, setForms] = useState<PokemonDTO[]>([]);
  const { name, id, is_default } = pokemon;

  // Catch pokemons forms to not default forms
  // Ex: ogerpon
  const getNotDefaultPokemonForms = useCallback(() => {
    const normalizedName = name.split('-')[0].trim();

    const pokemonForms = pokemonList
      .filter(pokemon =>
        pokemon.name.trim().toLowerCase().includes(normalizedName),
      )
      .filter(pokemon => pokemon.name !== name);

    console.log(JSON.stringify(pokemonForms, undefined, 2));

    setForms(pokemonForms);
  }, [name, pokemonList]);

  const getDefaultPokemonForms = useCallback(async () => {
    try {
      const speciesResponse = await api.get<PokemonSpeciesDTO>(
        `/pokemon-species/${id}`,
      );

      const { varieties } = speciesResponse.data;

      const forms = varieties
        .map(variety => ({
          name: variety.pokemon.name,
        }))
        .filter(pokemonVariety => pokemonVariety.name !== name);

      console.log(JSON.stringify(forms, undefined, 2));

      if (!forms) return [];

      if (forms.length > 0) {
        const pokemonForms = forms.map(formName => {
          const findPokemon = pokemonList.find(pokemon =>
            pokemon.name.includes(formName.name),
          );

          if (findPokemon) {
            return findPokemon;
          }

          return;
        });

        setForms(pokemonForms.filter(Boolean) as PokemonDTO[]);
      }
    } catch (error) {
      console.error('Error fetching forms: ', error);
      return [];
    }
  }, [id, name, pokemonList]);

  const renderItem = useCallback(
    ({ item }: { item: PokemonDTO }) => {
      return <Pokemon item={item} onPress={onPress} />;
    },
    [onPress],
  );

  const renderEmpty = useMemo(() => {
    return (
      <View>
        <Text>No forms found!</Text>
      </View>
    );
  }, []);

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
    if (is_default) {
      getDefaultPokemonForms();
    }

    if (!is_default) {
      getNotDefaultPokemonForms();
    }
  }, [getDefaultPokemonForms, getNotDefaultPokemonForms, is_default]);

  return (
    <View style={styles.fourthBlockInfoContainer}>
      <Text style={styles.title}>Forms</Text>

      {renderForms}
    </View>
  );
}

export { Forms };
