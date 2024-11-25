import React from 'react';
import { TextInput, View } from 'react-native';
import style from './style';
import theme from '@/style/theme';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  wantedPokemon: string;
  setWantedPokemon: (value: string) => void;
};

function Input({ wantedPokemon, setWantedPokemon }: Props): JSX.Element {
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
        style={style.input}
      />
    </View>
  );
}

export { Input };
