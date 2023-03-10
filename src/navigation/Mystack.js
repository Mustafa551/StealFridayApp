import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/auth/splash/Splash';
import Login from '../screens/auth/login/Login';
import Signup from '../screens/auth/signup/Signup';
import Payment from '../screens/auth/payment/Payment';
import Home from '../screens/homes/home/Home';
import Mydrawer from './Mydrawer';
import Myprofile from '../screens/profileoptions/myProfile/Myprofile';
import Changepassword from '../screens/profileoptions/changepassword/Changepassword';
import Profilesetting from '../screens/profileoptions/profilesetting/Profilesetting'
import Notificationsetting from '../screens/profileoptions/notificationsetting/Notificationsetting';
import Terms from '../screens/profileoptions/termscondition/Terms';
import Privacypolicy from '../screens/profileoptions/privacypolicy/Privacypolicy';
import Notification from '../screens/homes/notification/Notification';
import Addtocart from '../screens/products/addtocart/Addtocart';
import Changesimage from '../screens/homes/changesimage/Changesimage';
import Featureddeals from '../screens/products/Featureddeals/Featureddeals';
import Activedeals from '../screens/products/activedeals/Activedeals';
import Categories from '../screens/products/categories/Categories';



const Stack = createNativeStackNavigator();


const Auth =()=>{
    return(
       
        <Stack.Navigator>
          {/* <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} /> */}
          {/* <Stack.Screen name="Changesimage" component={Changesimage} options={{headerShown:false}} /> */}
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
          <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}} />
          <Stack.Screen name="Payment" component={Payment} options={{headerShown:false}} />
        </Stack.Navigator>
    
    )
}

 export const Homes =() =>{
    return(
        <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}  options={{headerShown:false}} />
        <Stack.Screen name='Profilesetting' component={Profilesetting}  options={{headerShown:false}} />
        <Stack.Screen name='Changepassword' component={Changepassword}  options={{headerShown:false}} />
        <Stack.Screen name='Myprofile' component={Myprofile}  options={{headerShown:false}} />
        <Stack.Screen name='Notificationsetting' component={Notificationsetting}  options={{headerShown:false}} />
        <Stack.Screen name='Terms' component={Terms}  options={{headerShown:false}} />
        <Stack.Screen name='Privacypolicy' component={Privacypolicy}  options={{headerShown:false}} />
        <Stack.Screen name='Notification' component={Notification}  options={{headerShown:false}} />
      
      </Stack.Navigator>

    )
}

export const Products =() =>{
  return(
      <Stack.Navigator>
      <Stack.Screen name='Addtocart' component={Addtocart}  options={{headerShown:false}} />
      <Stack.Screen name='Featureddeals' component={Featureddeals}  options={{headerShown:false}} />
      <Stack.Screen name='Activedeals' component={Activedeals}  options={{headerShown:false}} />
      <Stack.Screen name='Categories' component={Categories}  options={{headerShown:false}} />
    </Stack.Navigator>

  )
}

const  MyStack= () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Auth" component={Auth} options={{headerShown:false}} />
        <Stack.Screen name="Mydrawer" component={Mydrawer}  options={{headerShown:false}} />
        <Stack.Screen name="Products" component={Products}  options={{headerShown:false}} />
          {/* <Stack.Screen name="Homes" component={Homes}  options={{headerShown:false}} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;