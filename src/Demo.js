/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Divider, StatusBar, useColorMode} from 'native-base';
import {Header} from './components/';

const Demo = () => {
  const {colorMode} = useColorMode();
  const bgColor = colorMode === 'dark' ? '#003F5E' : '#E3F2F9';
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: bgColor}]}>
      <StatusBar
        barStyle={colorMode === 'dark' ? 'light-content' : 'dark-content'}
        translucent
        backgroundColor="transparent"
      />
      <Header />
      <Divider />
    </SafeAreaView>
  );
};

export default Demo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
