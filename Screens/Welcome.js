import React, { Component } from 'react'
import { View,SafeAreaView,Text, ActivityIndicator } from 'react-native'
import { Button } from 'react-native';
import auth from '@react-native-firebase/auth'
import { getUser } from '../actions/user';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();
class Welcome extends Component{

    componentDidMount = () =>{

            auth().onAuthStateChanged((user)=>{

                if(user){
                    this.props.getUser(user.uid);
                        //alert(user.uid)
                    if(this.props.user != null ){
                        this.props.navigation.navigate('TabNavigator');
                        this.props.navigation.reset({
                            index:0,
                            routes:[{name:'TabNavigator'}]
                        })
                    }
                }
                else
                {
                    this.props.navigation.navigate('Login');
                    this.props.navigation.reset({
                        index:0,
                        routes:[{name:'Login'}]
                    })
                }
            })    
    }
    state={
        isloading:false
    }
    render(){
        
        return(
            this.state.isloading ? (
                <View>
                    <Text>Welcome</Text>
                </View>
            ) : (
                <View>
                    <ActivityIndicator size="large"  style={{marginTop:150,alignSelf:'center'}}/>
                 
                </View>

            )
        )
    }
}
const mapStateToProps = state =>{
    return{
        user:state.user
    }
}
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({getUser},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Welcome)
//export default Welcome;