import { Fonts } from '@/constants/fonts';
import theme from '@/style/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingVertical: 32,
    width: '100%',
    backgroundColor: theme.strong_red,
    gap: 50,
  },
  logo: {
    fontSize: 30,
    color: theme.yellow,
    fontFamily: Fonts.montserrat_bold,
    textShadowColor: theme.strong_blue,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    left: 15,
  },
  content: {
    alignItems: 'center',
    gap: 20,
  },
  title: {
    fontSize: 42,
    color: theme.white,
    textShadowColor: theme.strong_blue,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 18,
    color: theme.white,
    textAlign: 'center',
    lineHeight: 24,
    letterSpacing: 0.04,
  },
});
