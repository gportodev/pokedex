import React, { useCallback } from 'react';

import { Pokemons } from '../../components/Pokemons';
import { SafeAreaView, ScrollView } from 'react-native';
import theme from '@/style/theme';
import { Header } from '@/components/Header';
import { HomeProps } from '@/routes/types';
import { PokemonDTO } from '@/dtos/PokemonDTO';

function Home({ navigation }: HomeProps): JSX.Element {
  const onPress = useCallback(
    (item: PokemonDTO) => {
      navigation.navigate('Detail', { item });
    },
    [navigation],
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        style={{
          backgroundColor: theme.white,
        }}
      >
        <Header />

        <Pokemons onPress={onPress} />
      </ScrollView>
    </SafeAreaView>
  );
}

export { Home };
