import React from 'react';
import {LogBox} from 'react-native'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { COLORS, icons, SIZES } from './constants';

import AppStack from './navigation/AppStack';


LogBox.ignoreAllLogs(true);
const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <AppStack />

    </NavigationContainer>
  );
};


export default App;
