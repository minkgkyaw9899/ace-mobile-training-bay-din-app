import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigator} from './navigaitons/RootStackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default App;
