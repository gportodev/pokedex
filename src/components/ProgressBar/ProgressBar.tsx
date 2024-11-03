import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import styles from './styles';

type ProgressBarProps = {
  progress: number;
};

function ProgressBar({ progress }: ProgressBarProps): JSX.Element {
  const widthAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: progress * 100,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [progress, widthAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.progressContainer, { width: widthAnim }]} />
    </View>
  );
}

export { ProgressBar };
