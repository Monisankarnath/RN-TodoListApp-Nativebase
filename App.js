/* eslint-disable prettier/prettier */
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Demo from './src/Demo';
import {GlobalProvider} from './src/hooks/GlobalState';
import {customTheme} from './src/theme';

const App = () => {
  return (
    <NativeBaseProvider theme={customTheme}>
      <SafeAreaProvider>
        <GlobalProvider>
          <Demo />
        </GlobalProvider>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};

export default App;
