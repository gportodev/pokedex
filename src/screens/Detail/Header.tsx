import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import { SafeAreaView, View } from 'react-native';
import styles from './styles';
import {
  getCardFromType,
  getIconFromType,
  PokemonType,
} from '@/common/utils/pokemon';
import { PokemonDTO } from '@/dtos/PokemonDTO';

type Props = {
  item: PokemonDTO;
};

function Header({ item }: Props) {
  const type = item.types[0].type.name as PokemonType;

  const icon = () => {
    const Icon = getIconFromType(type);

    return (
      <View style={styles.headerIconContainer}>
        <Icon width={24} height={24} />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <LinearGradient
        colors={[
          getCardFromType(type).firstColor,
          getCardFromType(type).secondColor,
        ]}
        style={[styles.headerContainer]}
      >
        {icon()}
        <LinearGradient
          colors={[
            getCardFromType(type).firstColor,
            getCardFromType(type).secondColor,
          ]}
          style={[
            styles.headerRainbow,
            {
              borderColor: getCardFromType(type).secondColor,
            },
          ]}
        >
          <LinearGradient
            colors={[
              getCardFromType(type).firstColor,
              getCardFromType(type).secondColor,
            ]}
            style={[
              styles.innerHeaderRainbow,
              {
                borderColor: getCardFromType(type).secondColor,
              },
            ]}
          />
        </LinearGradient>
      </LinearGradient>
      <Image
        contentFit="contain"
        source={{ uri: item.avatar }}
        style={styles.headerPokemonAvatar}
      />
    </SafeAreaView>
  );
}

export { Header };
