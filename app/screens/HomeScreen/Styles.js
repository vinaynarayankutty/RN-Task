import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from '@config/Metrics';
import AppStyles from '@config/Styles';

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: responsiveWidth(2),
  },

  addBtnContainer: {
    position: 'absolute',
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    alignItems: 'center',
    justifyContent: 'center',
    right: responsiveWidth(5),
    bottom: responsiveHeight(5),
    backgroundColor: AppStyles.color.COLOR_CHERULEAN,
    borderRadius: responsiveWidth(10),
    elevation: 5,
  },

  addTxtStyle: {
    fontSize: responsiveFontSize(3),
    color: AppStyles.color.COLOR_WHITE,
  },

  templateText: {
    fontSize: responsiveFontSize(2),
  },

  signoutTxt: {
    fontSize: responsiveFontSize(2),
    color: AppStyles.color.COLOR_RED,
    fontWeight: 'bold',
  },

  signoutBtn: {
    marginVertical: responsiveHeight(1),
  },
});

export default Styles;
