import React, { useCallback } from 'react';

import { Pokemons } from '../../components/Pokemons';
import { SafeAreaView } from 'react-native';

import { HomeProps } from '@/routes/types';
import { PokemonDTO } from '@/dtos/PokemonDTO';
import theme from '@/style/theme';

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
        backgroundColor: theme.white,
      }}
    >
      <Pokemons onPress={onPress} />
    </SafeAreaView>
  );
}

export { Home };
