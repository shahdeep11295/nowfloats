import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import AppNavigation from './Root/Appnavigation'
import KeyboardManager from 'react-native-keyboard-manager'


export default class App extends Component {

  componentDidMount() {

    if (Platform.OS === 'ios') {
      KeyboardManager.setToolbarPreviousNextButtonEnable(true);
      StatusBar.setBarStyle('light-content', true);
     
    }

  }

  render() {
    return (
      <AppNavigation />
    );
  }
}


