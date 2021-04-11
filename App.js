import React from 'react';
import NavigationService from './src/NavigationService'
import { Provider } from 'react-redux';
import store from './src/Store';

const App =()=>{
  return(
    <Provider store = {store}>
      <NavigationService/>
    </Provider>
  )
}


export default App