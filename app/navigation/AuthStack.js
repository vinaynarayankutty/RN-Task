import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RegisterScreen from '@screens/RegisterScreen/RegisterScreen';
import LoginScreen from '@screens/LoginScreen/LoginScreen';
import LoginPhoneScreen from '@screens/LoginPhoneScreen/LoginPhoneScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen name="PhoneLogin" component={LoginPhoneScreen} />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
}
