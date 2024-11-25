import React, { memo } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Image } from 'expo-image';
import styles from './styles';
import {
  getTagFromType,
  getIconFromType,
  PokemonType,
} from '@/common/utils/pokemon';
import { PokemonDTO } from '@/dtos/PokemonDTO';

type PokemonProps = {
  item: PokemonDTO;
  onPress: (item: PokemonDTO) => void;
};

function Pokemon({ item, onPress }: PokemonProps): JSX.Element {
  const { id, name, avatar, types } = item;

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
      {avatar && (
        <View
          style={[
            styles.imageContainer,
            {
              backgroundColor: getTagFromType(
                item.types[0].type.name as PokemonType,
              ).background,
            },
          ]}
        >
          <Image
            source={{ uri: item.avatar }}
            contentFit="contain"
            style={styles.image}
          />
        </View>
      )}

      <View>
        <Text style={styles.data}>#{id}</Text>

        <View style={styles.content}>
          <Text style={styles.data}>{name}</Text>

          <View style={styles.typeContainer}>
            {types &&
              types.length > 0 &&
              types.map(item => {
                const { name } = item.type;

                const Icon = getIconFromType(name as PokemonType);

                return Icon ? <Icon key={name} width={24} height={24} /> : null;
              })}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const MemoizedPokemon = memo(Pokemon);

export { MemoizedPokemon as Pokemon };
