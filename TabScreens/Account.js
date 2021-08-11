import React, { Component } from 'react'
import { View,SafeAreaView,Text, Button } from 'react-native'
import auth from '@react-native-firebase/auth'

export default class Account extends Component{

    render(){
        return(
            <SafeAreaView>
                <View style={{marginTop:100,alignItems:'center'}}>
                <Text style={{fontSize:20,fontWeight:'600',color:'blue'}}>{auth().currentUser.email}</Text>

                
                <Button title="Account Logout " onPress={()=> auth().signOut()} />
                </View>

            </SafeAreaView>
        )
    }
}

