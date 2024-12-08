import React, { useCallback, useMemo, useState } from 'react';

import styles from './styles';

import { Pokemon } from '../Pokemon';
import { PokemonDTO } from '@/dtos/PokemonDTO';
import {
  FlatList,
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import { View, Text } from 'react-native';
import { usePokemon } from '@/context/pokemons';
import { Loader } from '../Loader';
import { Header } from '../Header';

type PokemonsProps = {
  onPress: (item: PokemonDTO) => void;
};

function Pokemons({ onPress }: PokemonsProps) {
  const { pokemonList, loading, pokemonLength } = usePokemon();
  const [wantedPokemon, setWantedPokemon] = useState('');

  const filteredPokemons = useMemo(() => {
    return pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(wantedPokemon.toLowerCase()),
    );
  }, [pokemonList, wantedPokemon]);

  const renderEmpty = useMemo(() => {
    return (
      <View>
        <Text>Empty pokemon list!</Text>
      </View>
    );
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: PokemonDTO }) => {
      return <Pokemon item={item} onPress={onPress} />;
    },
    [onPress],
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingView}>
        <Loader />

        <Text style={styles.loadingText}>Loading pokemons...</Text>
      </SafeAreaView>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <Header
          value={wantedPokemon}
          onChangeText={setWantedPokemon}
          pokemonLength={pokemonLength}
        />

        <FlatList
          data={filteredPokemons}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={styles.listColumn}
          contentContainerStyle={styles.listContainer}
          keyExtractor={(item: PokemonDTO) => item.id.toString()}
          initialNumToRender={30}
          maxToRenderPerBatch={30}
          ListEmptyComponent={renderEmpty}
          extraData={wantedPokemon}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export { Pokemons };
