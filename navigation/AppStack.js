import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OnboardingScreen from '../screens/OnboardingScreen.js';
import MainLoginScreen from '../screens/MainLoginScreen';
import HomeScreen from '../screens/HomeScreen';
import RequestScreen from '../screens/RequestScreen.js';
import SubmitScreen from '../screens/SubmitScreen.js';




const Stack = createNativeStackNavigator();
//    <Stack.Screen name="Onboarding" component={OnboardingScreen}/>

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            }}>
            {/* <Stack.Screen name="Onboarding" component={OnboardingScreen}/> */}
            {/* <Stack.Screen name="MainLogin" component ={MainLoginScreen}/> */}
            { <Stack.Screen name="HomeScreen" component ={HomeScreen}/> }
            { <Stack.Screen name="RequestScreen" component ={RequestScreen}/> }
            { <Stack.Screen name="SubmitScreen" component ={SubmitScreen}/> }


            
            
        </Stack.Navigator>
    );
};

export default AuthStack;