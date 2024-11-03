import { Fonts } from '@/constants/fonts';
import theme from '@/style/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 17,
    paddingHorizontal: 8,
  },
  input: {
    width: '90%',
    height: 56,
    fontSize: 16,
    fontFamily: Fonts.montserrat_bold,
  },
  icon: {
    backgroundColor: theme.pastel_blue,
    width: 42,
    height: 42,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
