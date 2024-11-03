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

type Props = {
  item: PokemonDTO;
  onPress: (item: PokemonDTO) => void;
};

function Pokemon({ item, onPress }: Props): JSX.Element {
  const { id, name, avatar, types } = item;

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
      {avatar && (
        <View
          style={{
            height: 130,
            width: 130,
            backgroundColor: getTagFromType(
              item.types[0].type.name as PokemonType,
            ).background,
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            source={{ uri: item.avatar }}
            contentFit="contain"
            style={{
              height: 100,
              width: 100,
            }}
          />
        </View>
      )}

      <View style={styles.content}>
        <Text style={styles.data}>#00{id}</Text>
        <Text style={styles.data}>{name}</Text>

        <View
          style={{
            flexDirection: 'row',
            gap: 10,
          }}
        >
          {types &&
            types.length > 0 &&
            types.map(item => {
              const { name } = item.type;

              const Icon = getIconFromType(name as PokemonType);

              return Icon ? <Icon key={name} width={24} height={24} /> : null;
            })}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const MemoizedPokemon = memo(Pokemon);

export { MemoizedPokemon as Pokemon };
