import { Fonts } from '@/constants/fonts';
import theme from '@/style/theme';
import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.white,
  },
  headerContainer: {
    height: 250,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  headerIconContainer: {
    backgroundColor: 'white',
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 40,
    right: 10,
  },
  headerRainbow: {
    width: width * 0.9,
    height: width * 0.45,
    borderTopLeftRadius: width * 0.45,
    borderTopRightRadius: width * 0.45,
    borderWidth: 15,
    borderBottomWidth: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  innerHeaderRainbow: {
    width: width * 0.6,
    height: width * 0.3,
    borderTopLeftRadius: width * 0.3,
    borderTopRightRadius: width * 0.3,
    borderWidth: 15,
    borderBottomWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerPokemonAvatar: {
    height: 150,
    width: 150,
    bottom: -50,
    position: 'absolute',
    alignSelf: 'center',
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 100,
  },
  infoHeaderContainer: {
    flexDirection: 'row',
    gap: 8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  infoHeaderName: {
    fontSize: 24,
    fontFamily: Fonts.montserrat_bold,
    color: theme.dark_grayish,
    textTransform: 'capitalize',
  },
  infoHeaderId: {
    fontSize: 18,
    fontFamily: Fonts.montserrat_regular,
    color: theme.gray_bold,
    textTransform: 'capitalize',
  },
  infoSubHeaderContainer: {
    paddingTop: 16,
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  tagTypeContainer: {
    width: 80,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  tagTypeText: {
    fontSize: 14,
    fontFamily: Fonts.montserrat_semibold,
    textTransform: 'capitalize',
  },
  firstBlockInfoContainer: {
    paddingTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  firstBlockInfoLabelText: {
    fontSize: 14,
    fontFamily: Fonts.inter_regular,
  },
  label: {
    fontSize: 14,
    fontFamily: Fonts.inter_regular,
  },
  value: {
    fontSize: 14,
    fontFamily: Fonts.montserrat_semibold,
  },
  secondBlockInfoContainer: {
    paddingTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  title: {
    fontSize: 14,
    fontFamily: Fonts.inter_semibold,
  },
  thirdBlockInfoContainer: {
    paddingVertical: 32,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  statInfo: {
    width: '100%',
    // gap: 10,
    // flexWrap: 'wrap',
    flexDirection: 'row',
    // backgroundColor: 'blue',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    gap: 30,
  },
  statColumn: {
    flexDirection: 'column',
    // backgroundColor: 'orange',
    // width: '100%',
    justifyContent: 'space-between',
    gap: 12,
  },
  statRow: {
    flexDirection: 'column',
    backgroundColor: 'purple',
    // width: '100%',
    alignItems: 'center',
    gap: 10,
  },
  statLabel: {
    fontSize: 14,
    fontFamily: Fonts.inter_regular,
    textTransform: 'capitalize',
  },
});
