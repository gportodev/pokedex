import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { PokemonAbility } from '@/dtos/PokemonAbilityDTO';

type CharacteristicsProps = {
  height: number;
  weight: number;
  abilities: PokemonAbility[];
};

function Characteristics({
  height,
  weight,
  abilities,
}: CharacteristicsProps): JSX.Element {
  return (
    <View style={styles.firstBlockInfoContainer}>
      <View
        style={{
          flexDirection: 'row',
          gap: 32,
        }}
      >
        <Text style={styles.label}>
          Height:
          <Text style={styles.value}>{' ' + height / 10}m</Text>
        </Text>
        <Text style={styles.label}>
          Weight:
          <Text style={styles.value}>{' ' + weight * 0.1}kg</Text>
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          gap: 5,
        }}
      >
        <Text style={styles.label}>Abilities:</Text>

        <View
          style={{
            flexDirection: 'row',
            gap: 5,
          }}
        >
          {abilities.length > 0 &&
            abilities.map((a, index) => {
              const ability = a.ability.name;

              const isLast = index === abilities.length - 1;

              return (
                <Text
                  key={ability}
                  style={[
                    styles.value,
                    {
                      textTransform: 'capitalize',
                    },
                  ]}
                >
                  {ability + (isLast ? '' : ',')}
                </Text>
              );
            })}
        </View>
      </View>
    </View>
  );
}

export { Characteristics };
