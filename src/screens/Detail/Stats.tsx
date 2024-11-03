import React from 'react';
import styles from './styles';

import { View, Text } from 'react-native';
import { ProgressBar } from '@/components/ProgressBar';
import { PokemonStat } from '@/dtos/PokemonStatDTO';

type StatsProps = {
  stats: PokemonStat[];
};

function Stats({ stats }: StatsProps): JSX.Element {
  const statsLabels: { label: string }[] = [
    {
      label: stats[0].stat.name,
    },
    {
      label: stats[1].stat.name,
    },
    {
      label: stats[2].stat.name,
    },
    {
      label: 'Sp. Attack',
    },
    {
      label: 'Sp. Defense',
    },
    {
      label: stats[5].stat.name,
    },
  ];

  const statsValues: { value: number }[] = [
    {
      value: stats[0].base_stat,
    },
    {
      value: stats[1].base_stat,
    },
    {
      value: stats[2].base_stat,
    },
    {
      value: stats[3].base_stat,
    },
    {
      value: stats[4].base_stat,
    },
    {
      value: stats[5].base_stat,
    },
  ];

  const column = (
    stat: { label?: string; value?: number },
    receivedIndex: number,
  ) => {
    const { label, value } = stat;

    const statProgress = stat.value ? stat.value / 100 : 0;

    const indexes = [
      {
        order: 0,
        component: <Text style={styles.statLabel}>{label}</Text>,
        style: {
          // alignSelf: 'flex-start',
        },
      },
      {
        order: 1,
        component: <Text style={styles.statLabel}>{value}</Text>,
        style: {
          // alignSelf: 'flex-start',
        },
      },
      {
        order: 2,
        component: <ProgressBar progress={statProgress} />,
        style: {
          // alignSelf: 'flex-start',
        },
      },
    ];

    return (
      <View key={label} style={indexes[receivedIndex].style}>
        {indexes[receivedIndex].component}
      </View>
    );
  };

  const renderColumns = () => {
    return (
      <View style={styles.statInfo}>
        <View style={styles.statColumn}>
          {statsLabels.map(stat => {
            return column(stat, 0);
          })}
        </View>

        <View style={styles.statColumn}>
          {statsValues.map(stat => {
            return column(stat, 1);
          })}
        </View>

        <View style={styles.statColumn}>
          {statsValues.map(stat => {
            return column(stat, 2);
          })}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.thirdBlockInfoContainer}>
      <Text style={styles.title}>Stats</Text>

      {renderColumns()}
    </View>
  );
}

export { Stats };
