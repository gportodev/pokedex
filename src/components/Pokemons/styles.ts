import theme from '@/style/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    gap: 30,
    paddingVertical: 32,
  },
  grid: {
    backgroundColor: theme.white,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: theme.greyish_blue,
    marginHorizontal: 24,
  },
  listContainer: {
    paddingVertical: 10,
  },
});
