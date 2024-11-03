import React from 'react';

import { View, Text } from 'react-native';
import styles from './styles';

function Header(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>PokeApp</Text>

      <View style={styles.content}>
        <Text style={styles.title}>Who is that Pokémon?</Text>
        <Text style={styles.subtitle}>
          The perfect guide for those who want to hunt Pokémons around the world!
        </Text>
      </View>
    </View>
  );
}

export { Header };
