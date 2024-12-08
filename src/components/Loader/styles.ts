import { Fonts } from '@/constants/fonts';
import theme from '@/style/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontFamily: Fonts.montserrat_semibold,
    fontSize: 14,
    color: theme.gray_bold,
    textAlign: 'center',
  },
});
