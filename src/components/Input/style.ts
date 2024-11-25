import { Fonts } from '@/constants/fonts';
import theme from '@/style/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 56,
    justifyContent: 'center',
    backgroundColor: theme.white,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: theme.greyish_blue,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: Fonts.inter_regular,
    paddingLeft: 50,
  },
  icon: {
    backgroundColor: theme.pastel_blue,
    width: 42,
    height: 42,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 5,
  },
});
