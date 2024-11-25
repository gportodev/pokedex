import React, { useEffect } from 'react';
import { View } from 'react-native';

import styles from './styles';

import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  withRepeat,
  ReduceMotion,
} from 'react-native-reanimated';
import img from '../../../assets/icon.png';

type LoaderProps = {
  width?: number;
  height?: number;
};

function Loader({ width = 100, height = 100 }: LoaderProps): JSX.Element {
  const duration = 1000;

  const sv = useSharedValue<number>(0);

  useEffect(() => {
    sv.value = withRepeat(
      withTiming(1, { duration }),
      -1,
      false,
      () => {},
      ReduceMotion.System,
    );
  }, [sv]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${sv.value * 360}deg` }],
  }));

  return (
    <View style={styles.container}>
      <Animated.Image
        source={img}
        style={[
          {
            width,
            height,
          },
          animatedStyle,
        ]}
      />
    </View>
  );
}

export { Loader };
