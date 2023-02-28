import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, {useRef, useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import MyStack from './src/navigation/Mystack';

const App = () => {

  
    return(
      <SafeAreaProvider>
        <MyStack />
      </SafeAreaProvider>
    )
}
export default App;
