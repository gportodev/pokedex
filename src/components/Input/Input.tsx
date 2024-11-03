import React from 'react';
import { Alert, Keyboard, TextInput, View } from 'react-native';
import style from './style';
import api from '@/services/api';
import theme from '@/style/theme';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  wantedPokemon: string;
  setWantedPokemon: (value: string) => void;
};

function Input({ wantedPokemon, setWantedPokemon }: Props): JSX.Element {
  // const searchPoke = () => {
  //   if (!wantedPokemon) {
  //     Alert.alert('Type the pokemon name!');
  //   } else {
  //     const convert = String(wantedPokemon).toLowerCase();

  //     (async () => {
  //       try {
  //         const response = await api.get(`pokemon/${convert}`);
  //         const { id, name, height, weight, types, sprites, stats } = response.data;

  //         if (response.data) {
  //           const pok = {
  //             i: String(id),
  //             n: name,
  //             h: height,
  //             w: weight,
  //             t: types,
  //             s: sprites.front_default,
  //             hp: stats[0].base_stat,
  //             atk: stats[1].base_stat,
  //             def: stats[2].base_stat,
  //             spd: stats[3].base_stat,
  //           };

  //           navigation.navigate('Detail', { item: pok });
  //         }
  //       } catch (error) {
  //         Alert.alert('Error!', 'The pokemon does not exist!');
  //         Keyboard.dismiss();
  //         setWantedpokemon('');
  //       }
  //     })();
  //   }
  // };

  return (
    <View style={style.container}>
      <View style={style.icon}>
        <Ionicons name="search-sharp" size={16} color={theme.dark_blue} />
      </View>

      <TextInput
        placeholder="Search"
        placeholderTextColor={theme.soft_muted_greyish_blue}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={text => setWantedPokemon(text)}
        value={wantedPokemon}
        // onSubmitEditing={searchPoke}
        style={style.input}
      />
    </View>
  );
}

export { Input };
