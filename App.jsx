import {StyleSheet} from 'react-native';
import React from 'react';
import './global.css';
import Routes from './navigation/Routes';
const App = () => {
  return (
    <>
      <Routes />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default App;
