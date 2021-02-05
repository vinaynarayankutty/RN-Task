/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';
import Providers from './app/navigation';

export default function App() {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <Providers />
    </Fragment>
  );
}
