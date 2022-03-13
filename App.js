import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Demo from './src/Demo';
import {customTheme} from './src/theme';

const App = () => {
  return (
    <NativeBaseProvider theme={customTheme}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <SafeAreaProvider>
        <Demo />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};

export default App;
