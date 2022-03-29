import { StyleSheet } from 'react-native';
import { textStyle } from '../../constants';
import { theme } from '../../theme';

const { colors } = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray8,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 320,
  },
  buttonContainer: {
    width: 180
  },
  sectionWrapper: {
    paddingHorizontal: 20,
  },
  detailWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    color: colors.black,
    fontSize: 27,
    lineHeight: 32,
    fontWeight: '800',
    marginBottom: 10,
  },
  description: {
    color: colors.black,
    fontSize: 18,
    lineHeight: 25,
    fontWeight: '400',
    textAlign: 'left',
    width: '100%'
  },
  egoText: {
    color: colors.gray2,
    fontSize: 18,
    lineHeight: 25,
    fontWeight: '400',
    textAlign: 'left',
    width: '100%'
  },
  boldText: {
    fontWeight: '800'
  },
  nftCard: {
    width: 230,
    height: 218,
    marginBottom: 10,
    marginRight: 18,
  },
  horizontalScrollView: {
    paddingLeft: 20
  }
});

export default styles;
