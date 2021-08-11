import React from 'react'
import { View,Text } from 'react-native'
import AuthNavigator from './Navigator/AuthNavigator'
import { Provider } from 'react-redux'
import Store from './reducers/index'



const App =() =>{
  return(
    <Provider  store={Store}>

      <AuthNavigator />
    </Provider>

  )
}
export default App;