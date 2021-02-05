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

class RegisterScreen extends Component {
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

  resetErrorMessage = () => {
    setTimeout(() => {
      this.setState({errorMessage: null});
    }, 3000);
  };

  resetFields = (error) => {
    this.setState({
      loading: false,
      errorMessage: error,
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  registerHandler = () => {
    this.setState({loading: true});
    Keyboard.dismiss();
    if (this.state.email == '' || this.state.password == '') {
      this.setState({
        loading: false,
        errorMessage: 'Email/Password cannot be empty',
      });
      this.resetErrorMessage();
    } else {
      this.context.register(this.state.email, this.state.password);
      this.setState({loading: false, email: '', password: ''});
    }
  };

  onPressSignInText = () => {
    NavigationService.navigate('Login');
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.greeting}>{`Hello\nSign up to get started`}</Text>

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
          style={styles.registerBtn}
          onPress={() => this.registerHandler()}>
          <Text style={styles.registerBtnText}>Register</Text>
        </TouchableOpacity>

        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>Already have an account ? </Text>
          <TouchableOpacity onPress={() => this.onPressSignInText()}>
            <Text style={[styles.bottomText, {fontWeight: 'bold'}]}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>

        {this.state.loading && <ActivityIndicator size="large" />}
      </View>
    );
  }
}

export default RegisterScreen;
