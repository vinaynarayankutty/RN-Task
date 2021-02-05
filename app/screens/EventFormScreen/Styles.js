import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from '@config/Metrics';
import AppStyles from '@config/Styles';

const Styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: responsiveHeight(20),
  },
  container: {
    width: responsiveWidth(80),
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(3),
  },

  longFormInput: {
    width: '100%',
    height: responsiveHeight(6),
    color: 'black',
    borderColor: '#B5B4BC',
    borderWidth: 1,
    padding: responsiveWidth(3),
    margin: responsiveWidth(4),
  },

  imagePickerContainer: {
    borderWidth: 1,
    borderColor: '#B5B4BC',
    backgroundColor: '#eee',
    width: responsiveWidth(50),
    height: responsiveHeight(20),
    alignItems: 'center',
  },

  button: {
    marginVertical: responsiveHeight(2),
  },

  previewImage: {
    width: responsiveWidth(50),
    height: responsiveHeight(20),
  },

  submitBtn: {
    marginVertical: responsiveWidth(10),
    height: responsiveHeight(6),
    width: responsiveWidth(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveWidth(1),
    backgroundColor: 'lightblue',
  },

  submitBtnText: {
    fontSize: responsiveFontSize(1.7),
    fontWeight: 'bold',
  },
});

export default Styles;
