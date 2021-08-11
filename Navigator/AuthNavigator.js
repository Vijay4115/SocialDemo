import React from 'react'
import Login from '../Screens/Login';
import Welcome from '../Screens/Welcome';
import SignUp from '../Screens/SignUp';
import TabNavigator from './TabNavigator';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator();
const AuthNavigator = () =>{

        return(
            <NavigationContainer>
                 <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown:false}} />
     </Stack.Navigator>
            </NavigationContainer>
        )
}
export default AuthNavigator;