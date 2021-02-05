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
    marginVertical: responsiveHeight(10),
  },

  greeting: {
    marginTop: responsiveHeight(4),
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    textAlign: 'center',
    color: AppStyles.color.COLOR_BLACK,
  },

  errorContainer: {
    height: responsiveHeight(6),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: responsiveWidth(5),
  },

  errorText: {
    fontSize: responsiveFontSize(1.5),
    color: AppStyles.color.COLOR_RED,
    fontWeight: 'bold',
  },

  form: {
    marginVertical: responsiveHeight(3),
    marginHorizontal: responsiveWidth(5),
  },

  loginBtn: {
    marginHorizontal: responsiveWidth(5),
    height: responsiveHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveWidth(1),
    backgroundColor: AppStyles.color.COLOR_LIGHTBLUE,
  },

  loginBtnText: {
    fontSize: responsiveFontSize(1.7),
    fontWeight: 'bold',
  },

  bottomContainer: {
    flexDirection: 'row',
    marginVertical: responsiveHeight(5),
    justifyContent: 'center',
  },

  bottomText: {
    fontSize: responsiveFontSize(1.5),
  },
});

export default Styles;
