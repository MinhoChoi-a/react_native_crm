//import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StatusBar } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/redux/PeopleRedux';
import Navigation from './src/components/Navigation';

const store = createStore(reducers);
  //, window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());
export default class App extends Component {
  render(){
  return (
    
    //when we made a navigtaion bar with the imported function, then we cannot place it inside the View style
    //so it should be the top level after the store
    
    <Provider store={store}>
      <StatusBar 
      hidden={false}
      backgroundColor="#61dafb" />  
      <Navigation/>
    </Provider>
  );
  }
}

/*

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/