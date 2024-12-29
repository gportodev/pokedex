import React, { useCallback, useMemo } from 'react';
import { View, Text, FlatList } from 'react-native';
import { PokemonDTO } from '@/dtos/PokemonDTO';
import styles from './styles';

import { Pokemon } from '@/components/Pokemon';
import { usePokemon } from '@/context/pokemons';

type EvolutionsProps = {
  pokemon: PokemonDTO;
  onPress: (pokemon: PokemonDTO) => void;
};

function Evolutions({ pokemon, onPress }: EvolutionsProps): JSX.Element {
  const { pokemonList } = usePokemon();
  const { name, evolutions } = pokemon;

  const pokemonEvolutions = useMemo(() => {
    if (!evolutions) return [];

    if (evolutions.length > 0) {
      const pokemonEvolutions = evolutions
        .map(evolutionName => {
          const findPokemon = pokemonList.find(pokemon =>
            pokemon.name.includes(evolutionName),
          );

          if (findPokemon) {
            return findPokemon;
          }

          return;
        })
        .filter(pokemon => pokemon.name !== name);

      return pokemonEvolutions.filter(Boolean) as PokemonDTO[];
    }

    //Evolutions with same name
    if (evolutions.length === 1) {
      const findPokemon = pokemonList.filter(pokemon =>
        pokemon.name.includes(evolutions[0]),
      );

      return findPokemon.filter(Boolean) as PokemonDTO[];
    }
  }, [evolutions, name, pokemonList]);

  const renderItem = useCallback(
    ({ item }: { item: PokemonDTO }) => {
      return <Pokemon item={item} onPress={onPress} />;
    },
    [onPress],
  );

  const renderEmpty = useMemo(() => {
    return (
      <View>
        <Text>No evolutions found!</Text>
      </View>
    );
  }, []);

  const renderEvolutions = useMemo(
    () => (
      <FlatList
        data={pokemonEvolutions}
        renderItem={renderItem}
        contentContainerStyle={styles.evolutionContainer}
        keyExtractor={(item: PokemonDTO) => item.id.toString()}
        horizontal
        ListEmptyComponent={renderEmpty}
      />
    ),
    [pokemonEvolutions, renderEmpty, renderItem],
  );

  return (
    <View style={styles.fourthBlockInfoContainer}>
      <Text style={styles.title}>Family tree</Text>

      {renderEvolutions}
    </View>
  );
}

export { Evolutions };
