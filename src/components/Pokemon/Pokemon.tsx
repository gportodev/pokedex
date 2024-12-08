import React, { memo, useMemo } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
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

  const pokemonTypes = useMemo(() => {
    if (!types || types.length === 0) return null;

    return types.map(item => {
      const { name } = item.type;

      const Icon = getIconFromType(name as PokemonType);

      return Icon ? <Icon key={name} width={24} height={24} /> : null;
    });
  }, [types]);

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
          <Image source={{ uri: item.avatar }} style={styles.image} />
        </View>
      )}

      <View style={styles.content}>
        <Text style={styles.data}>#{id}</Text>

        <Text style={styles.data}>{name}</Text>

        <View style={styles.typeContainer}>{pokemonTypes}</View>
      </View>
    </TouchableOpacity>
  );
}

const MemoizedPokemon = memo(Pokemon);

export { MemoizedPokemon as Pokemon };
