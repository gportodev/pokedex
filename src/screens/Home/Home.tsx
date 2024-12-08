import React, { useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Pokemons } from '../../components/Pokemons';
import { SafeAreaView } from 'react-native';

import { HomeProps } from '@/routes/types';
import { PokemonDTO } from '@/dtos/PokemonDTO';
import theme from '@/style/theme';
import { StatusBar } from 'expo-status-bar';

function Home({ navigation }: HomeProps): JSX.Element {
  const onPress = useCallback(
    (item: PokemonDTO) => {
      navigation.navigate('Detail', { item });
    },
    [navigation],
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.white,
        }}
      >
        <StatusBar style="dark" />
        <Pokemons onPress={onPress} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export { Home };
