import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './components/Home';
import People from './components/People';

const Router = StackNavigator({
  Home: { screen: Home },
  People: { screen: People }
});

export default Router;