import React,{useEffect,useState} from 'react';
import {
  StyleSheet,

} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './components/Home/Home';
import Stream from './components/Stream/Stream';
import Add from './components/Add/Add';
import Login from './components/Login/Login';
import Router from './components/Router/Router';
// import SplashScreen from "react-native-splash-screen"; //import SplashScreen


const Stack = createNativeStackNavigator();

const App = () => {



return( 
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Router" screenOptions={{
      headerShown: false
    }}
    >
    <Stack.Screen name="Login" component={Login} />

    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Stream" component={Stream} />
    <Stack.Screen name="Add" component={Add} />
    <Stack.Screen name="Router" component={Router} />



    </Stack.Navigator>
    </NavigationContainer>
    )

};



export default App;
