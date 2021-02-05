import React, {Component} from 'react';
import {View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '@navigation/AuthProvider';
import CustomInputView from './components/CustomInputView';
import styles from './Styles';

class LoginPhoneScreen extends Component {
  static contextType = AuthContext;

  state = {
    phone: '',
    confirmResult: null,
    verificationCode: '',
    confirmResult: '',
  };

  validatePhoneNumber = () => {
    var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/;
    return regexp.test(this.state.phone);
  };

  handleCode = () => {
    if (this.validatePhoneNumber()) {
      auth()
        .signInWithPhoneNumber(this.state.phone)
        .then((confirmResult) => {
          this.setState({confirmResult});
        })
        .catch((error) => {
          alert(error.message);

          console.log(error);
        });
    } else {
      alert('Invalid Phone Number');
    }
  };

  handleVerifyCode = () => {
    // Request for OTP verification
    const {confirmResult, verificationCode} = this.state;
    if (verificationCode.length == 6) {
      confirmResult
        .confirm(verificationCode)
        .then((user) => {
          console.log(user);
        })
        .catch((error) => {
          alert(error.message);
          console.log(error);
        });
    } else {
      alert('Please enter a 6 digit OTP code.');
    }
  };

  renderConfirmationCodeView = () => {
    return (
      <CustomInputView
        title="OTP:"
        placeholder="Enter code"
        value={this.state.verificationCode}
        keyboardType="numeric"
        length={6}
        onChangeTextHandler={(verificationCode) => {
          this.setState({verificationCode});
        }}
        btnText="Verify Code"
        btnHandler={() => this.handleVerifyCode()}
      />
    );
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <CustomInputView
          title="Phone No:"
          placeholder="(+91) Enter number"
          value={this.state.phone}
          keyboardType="phone-pad"
          length={15}
          onChangeTextHandler={(phone) => {
            this.setState({phone});
          }}
          btnText="Send Code"
          btnHandler={() => this.handleCode()}
        />

        {this.state.confirmResult ? this.renderConfirmationCodeView() : null}
      </View>
    );
  }
}

export default LoginPhoneScreen;
