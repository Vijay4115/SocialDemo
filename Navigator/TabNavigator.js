import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../TabScreens/Home';
import Account from '../TabScreens/Account'
const Tab  = createBottomTabNavigator();

const TabNavigator = () =>{
    return(
      <Tab.Navigator >
          <Tab.Screen name="Home" component={Home} options={{title:"Home"}}/>
          <Tab.Screen name="Account" component={Account}   options={{title:"Account"}}/>
        </Tab.Navigator>
    )
  }
  export default TabNavigator;