import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers/PeopleReducer';
import PeopleList from './PeopleList';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <PeopleList/>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
