import theme from '@/style/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.greyish_blue,
    borderRadius: 8,
    width: 100,
  },
  progressContainer: {
    height: 14,
    backgroundColor: theme.strong_red,
    borderRadius: 8,
  },
});
