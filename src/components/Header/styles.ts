import { Fonts } from '@/constants/fonts';
import theme from '@/style/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    gap: 24,
    elevation: 5,
    backgroundColor: theme.greyish_blue,
    borderBottomWidth: 10,
    borderBottomColor: theme.greyish_blue,
    shadowColor: theme.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  infoText: {
    fontFamily: Fonts.montserrat_semibold,
    fontSize: 18,
    color: theme.gray_bold,
    textAlign: 'center',
  },
});
