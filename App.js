import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, {useRef, useState, useEffect} from 'react';
import {AppState, StyleSheet, Text, View} from 'react-native';
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
//   const AppStateExample = () => {
//     const appState = useRef(AppState.currentState);
//       const [appStateVisible, setAppStateVisible] = useState(appState.current);
    
//       useEffect(() => {
//         const subscription = AppState.addEventListener('change', nextAppState => {
//           if (
//             appState.current.match(/inactive|background/) &&
//             nextAppState === 'active'
//           )   {
//             console.log('App has come to the foreground!');
//           }
    
//           appState.current = nextAppState;
//           setAppStateVisible(appState.current);
//           console.log('AppState', appState.current);
//         });
    
//         return () => {
//           subscription.remove();
//         };
//       }, []);
//   return (
//    <SafeAreaProvider>
//     <View >
//       <Text>Current state is: {appStateVisible}</Text>
//     </View>
//     <MyStack/>
//    </SafeAreaProvider>
//   );
// }

// export default AppStateExample;
