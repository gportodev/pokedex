import { Fonts } from '@/constants/fonts';
import theme from '@/style/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingVertical: 32,
  },
  header: {
    paddingTop: 24,
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
  listContainer: {
    padding: 24,
    gap: 10,
  },
  listColumn: {
    gap: 10,
  },

  loadingView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontFamily: Fonts.montserrat_semibold,
    fontSize: 18,
    color: theme.gray_bold,
    textAlign: 'center',
  },
});
