import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';
import pokeLoading from '@/assets/lottie/loading.json';

function Loader(): JSX.Element {
  const animation = useRef<LottieView>(null);

  useEffect(() => {
    animation.current?.play();
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 100,
          height: 100,
        }}
        source={pokeLoading}
      />
    </View>
  );
}

export { Loader };
