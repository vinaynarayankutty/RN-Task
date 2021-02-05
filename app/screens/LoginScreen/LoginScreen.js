import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import FormInput from '@components/FormInput';
import {AuthContext} from '@navigation/AuthProvider';
import * as NavigationService from '@navigation/NavigationService';
import styles from './Styles';

class LoginScreen extends Component {
  static contextType = AuthContext;

  state = {
    email: '',
    password: '',
    loading: false,
    errorMessage: null,
  };

  emailChangeHandler = (text) => {
    this.setState({email: text});
  };

  passwordChangeHandler = (text) => {
    this.setState({password: text});
  };

  onPressRegisterText = () => {
    NavigationService.navigate('Register');
  };

  resetErrorMessage = () => {
    setTimeout(() => {
      this.setState({errorMessage: null});
    }, 3000);
  };

  resetFields = (error) => {
    this.setState({
      loading: false,
      errorMessage: error.message,
      email: '',
      password: '',
    });
  };

  loginHandler = () => {
    this.setState({loading: true});
    Keyboard.dismiss();
    if (this.state.email == '' || this.state.password == '') {
      this.setState({
        loading: false,
        errorMessage: 'Email/Password cannot be empty',
      });
      this.resetErrorMessage();
    } else {
      this.context.login(this.state.email, this.state.password);
      this.setState({loading: false});
    }
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.greeting}>{`Hello, Welcome`}</Text>

        <View style={styles.errorContainer}>
          {this.state.errorMessage && (
            <Text style={styles.errorText}>{this.state.errorMessage}</Text>
          )}
        </View>

        <View style={styles.form}>
          <FormInput
            labelValue={this.state.email}
            placeholderText="Email"
            onChangeText={this.emailChangeHandler}
            secureEntry={false}
          />
          <FormInput
            labelValue={this.state.password}
            placeholderText="Password"
            onChangeText={this.passwordChangeHandler}
            secureEntry={true}
          />
        </View>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => this.loginHandler()}>
          <Text style={styles.loginBtnText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>New user ? </Text>
          <TouchableOpacity onPress={() => this.onPressRegisterText()}>
            <Text style={[styles.bottomText, {fontWeight: 'bold'}]}>
              Register here!!
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => NavigationService.navigate('PhoneLogin')}
          style={{alignItems: 'center'}}>
          <Text style={[styles.bottomText, {fontWeight: 'bold'}]}>
            Click here to login with phone
          </Text>
        </TouchableOpacity>
        {this.state.loading && <ActivityIndicator size="large" />}
      </View>
    );
  }
}

export default LoginScreen;
