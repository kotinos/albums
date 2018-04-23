import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import InfoList from './src/components/InfoList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'University at Buffalo'} />
    <InfoList />
  </View>
);

//flex: 1 stops the bounceback feel when scrollViewing

AppRegistry.registerComponent('colleges', () => App);
