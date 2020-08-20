/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from "react";

import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import Main from './Components/Main.js';
import Chat from './Components/Chat.js';

const Navigator = createStackNavigator({
  Main,
  Chat:{screen:Chat}
},
);

const AppNavigator = createAppContainer(Navigator);




export default AppNavigator;
