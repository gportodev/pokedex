import React, { useCallback, useMemo, useState } from 'react';

import styles from './styles';

import { Pokemon } from '../Pokemon';
import { Input } from '../Input';
import { PokemonDTO } from '@/dtos/PokemonDTO';
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import { View } from 'react-native';
import { usePokemon } from '@/context/pokemons';
import { Loader } from '../Loader';

type PokemonsProps = {
  onPress: (item: PokemonDTO) => void;
};

function Pokemons({ onPress }: PokemonsProps) {
  const { pokemonList, loading } = usePokemon();
  const [wantedPokemon, setWantedPokemon] = useState('');

  const filteredPokemons = useMemo(() => {
    return pokemonList.filter(pokemon =>
      pokemon.name.includes(wantedPokemon.toLowerCase()),
    );
  }, [pokemonList, wantedPokemon]);

  const renderItem = useCallback(
    ({ item }: { item: PokemonDTO }) => {
      return <Pokemon item={item} onPress={onPress} />;
    },
    [onPress],
  );

  return loading || pokemonList.length === 0 ? (
    <SafeAreaView
      style={{
        paddingTop: '50%',
      }}
    >
      <Loader />
    </SafeAreaView>
  ) : (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.grid}>
            <Input
              wantedPokemon={wantedPokemon}
              setWantedPokemon={setWantedPokemon}
            />
          </View>

          <FlatList
            data={filteredPokemons}
            renderItem={renderItem}
            contentContainerStyle={styles.listContainer}
            keyExtractor={(item: PokemonDTO) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            horizontal
            // getItemLayout={(_data, index) => ({
            //   length: 150,
            //   offset: 150 * index,
            //   index,
            // })}
            initialNumToRender={30}
            maxToRenderPerBatch={30}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export { Pokemons };
