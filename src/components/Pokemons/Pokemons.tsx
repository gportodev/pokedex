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
import { View, Text } from 'react-native';
import { usePokemon } from '@/context/pokemons';
import { Loader } from '../Loader';
import { PokeballIcon } from '@/assets/icons/Loader';

type PokemonsProps = {
  onPress: (item: PokemonDTO) => void;
};

function Pokemons({ onPress }: PokemonsProps) {
  const { pokemonList, loading, pokemonLength } = usePokemon();
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
    <SafeAreaView style={styles.loadingView}>
      <Loader />

      <Text style={styles.loadingText}>Loading pokemons...</Text>
    </SafeAreaView>
  ) : (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Input
              wantedPokemon={wantedPokemon}
              setWantedPokemon={setWantedPokemon}
            />

            <View style={styles.infoContainer}>
              <PokeballIcon />
              <Text style={styles.loadingText}>{pokemonLength} Pokémons</Text>
            </View>
          </View>

          <FlatList
            data={filteredPokemons}
            renderItem={renderItem}
            contentContainerStyle={styles.listContainer}
            keyExtractor={(item: PokemonDTO) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            initialNumToRender={30}
            maxToRenderPerBatch={30}
            columnWrapperStyle={styles.listColumn}
          />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export { Pokemons };
