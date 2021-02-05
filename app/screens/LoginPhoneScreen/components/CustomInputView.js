import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from '@config/Metrics';
import AppStyles from '@config/Styles';

const CustomInputView = (props) => {
  return (
    <View>
      <View style={styles.form}>
        <Text style={styles.inputTitle}>{props.title}</Text>
        <TextInput
          value={props.value}
          style={styles.input}
          numberOfLines={1}
          placeholder={props.placeholder}
          placeholderTextColor={AppStyles.color.COLOR_MEDIUMGRAY}
          keyboardType={props.keyboardType}
          maxLength={props.length}
          onChangeText={props.onChangeTextHandler}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={props.btnHandler}>
        <Text style={styles.loginBtnText}>{props.btnText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomInputView;

const styles = StyleSheet.create({
  form: {
    marginVertical: responsiveHeight(6),
    marginHorizontal: responsiveWidth(5),
  },

  inputTitle: {
    textTransform: 'uppercase',
    fontSize: responsiveFontSize(1.5),
    fontWeight: 'bold',
  },

  input: {
    borderBottomColor: AppStyles.color.COLOR_GRAY,
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: responsiveHeight(6),
    color: AppStyles.color.COLOR_BLACK,
    fontSize: responsiveFontSize(1.4),
    marginBottom: responsiveHeight(1),
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
});
