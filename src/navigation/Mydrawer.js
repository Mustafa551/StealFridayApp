import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/homes/home/Home';
import Login from '../screens/auth/login/Login';
import { Text } from 'react-native';
import Customdrawer from '../components/customdrawer/Customdrawer';
import { Homes } from './Mystack';
const Homee = () => {
    return (
        <Text>heelo</Text>
    )
}
const About = () => {
    return (
        <Text>heelo</Text>
    )
}

const Mydrawer = () => {
    const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator 
    screenOptions={{
        drawerStyle:{backgroundColor: "transparent",flex: 1}
    }}   
    drawerContent={(props) => <Customdrawer {...props} />}
    >
    <Drawer.Screen name="Homes" component={Homes} options={{headerShown: false}} />
    
  </Drawer.Navigator>
  )
}

export default Mydrawer