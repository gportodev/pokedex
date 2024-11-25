import theme from '@/style/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.greyish_blue,
    flexDirection: 'row',
    width: 36,
    marginHorizontal: 2,
  },
  progressContainer: {
    height: 3,
    backgroundColor: theme.strong_red,
  },
});
