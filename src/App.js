import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';

import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <SafeAreaView testID="app">
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
