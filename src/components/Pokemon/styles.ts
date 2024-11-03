import { Fonts } from '@/constants/fonts';
import theme from '@/style/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: 150,
    height: 300,
    borderRadius: 20,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.white,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  content: {
    top: 20,
    width: '100%',
    gap: 10,
    paddingHorizontal: 14,
  },
  data: {
    fontFamily: Fonts.inter_medium,
    fontSize: 16,
    color: theme.dark_grayish,
    textTransform: 'capitalize',
  },
});
