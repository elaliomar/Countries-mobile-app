import React,{useContext} from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';
import { ThemeContextProvider } from './src/store/Context';

function App(): React.JSX.Element {
 

  return (
   <ThemeContextProvider>
   <NavigationContainer>
    <MainNavigator/>
   </NavigationContainer>
   </ThemeContextProvider>
  );
}

const styles = StyleSheet.create({

});

export default App;
