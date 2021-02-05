import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {responsiveHeight, responsiveFontSize} from '@config/Metrics';
import AppStyles from '@config/Styles';

const FormInput = ({labelValue, placeholderText, secureEntry, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputTitle}>{placeholderText}</Text>
      <TextInput
        secureTextEntry={secureEntry}
        autoCapitalize="none"
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor={AppStyles.color.COLOR_MEDIUMGRAY}
        {...rest}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: responsiveHeight(1),
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
});
