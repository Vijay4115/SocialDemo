import React, { Component } from 'react'
import { SafeAreaView, View, Text, StyleSheet, KeyboardAvoidingView,TouchableOpacity,TextInput,Button } from 'react-native'
import { Dimensions } from 'react-native';
import { userSignUp } from '../actions/user';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';


const screenwidth = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;

class SignUp extends Component{

    constructor(props){
        super(props);

        this.state={
            useremail:'',
            userpass:'',
            username:'',
        }
    }

    onSignUp =() =>{
        
        if(!this.state.useremail || !this.state.userpass || !this.state.username){
    
            alert("Please Enter Details")
    }
        else
        {
                this.props.userSignUp(this.state.username,this.state.useremail,this.state.userpass);
        }
  

    }
    render(){
        return(
           <SafeAreaView>
                <KeyboardAvoidingView behavior="position">
                    <View style={styles.container}>
                        <Text style={{ fontSize: 25, color: 'blue', fontWeight: '700' }}>SignUp </Text>
                       
                    </View>
    
                    <View style={styles.txtemail}>
                        <TextInput
                               placeholder="Enter Name"                
                               placeholderTextColor="darkgrey"
                            
                            autoCapitalize="characters"
                               onChangeText={(nm)=>this.setState({username:nm})}
                           style={{paddingLeft:10,fontSize:15}}
                        />
                    </View>
                    <View style={styles.txtemail}>
                        <TextInput
                               placeholder="Enter Email"                
                               placeholderTextColor="darkgrey"
                            keyboardType="email-address"
                            autoCapitalize="none"
                               onChangeText={(nm)=>this.setState({useremail:nm})}
                           style={{paddingLeft:10,fontSize:15}}
                        />
                    </View>
                    <View style={styles.txtpassword}>
                    <TextInput
                               placeholder="Enter Password"                
                               placeholderTextColor="darkgrey"
                               style={{paddingLeft:10,fontSize:15}}
                            autoCapitalize="none"
                         secureTextEntry
                         onChangeText={(nm)=>this.setState({userpass:nm})}
                        />
                    </View>
                    
                 <View style={styles.btnsignup}>
                     <Button title="SignUp" onPress={()=>this.onSignUp()}/>
                     
                 </View>
                  
                 <View style={styles.btnlogin}>
                     <Button title="Go To Login" onPress={()=>this.props.navigation.navigate("Login")}/>

                 </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 50,
        alignSelf: 'center',
    },
    txtemail: {
        marginTop: 50,
        width: screenwidth * 0.75,
        paddingLeft:2,
        borderWidth:1,
        borderRadius:15,
        height:screenheight * 0.05,
        alignSelf:'center',
        padding:9

    },

    txtpassword: {
        marginTop: 50,
        width: screenwidth * 0.75,
        paddingLeft:2,
        borderWidth:1,
        borderRadius:15,
        height:screenheight * 0.05,
        alignSelf:'center',
        padding:9

    },
    btnlogin: {
        marginTop: 10,
        width: screenwidth * 0.8,
        alignSelf: 'center',
    },
    btnsignup: {
        marginTop: 140,
        width: screenwidth * 0.8,
        alignSelf: 'center',
    },
})

const mapStateToProps = state =>{
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch =>{
    return bindActionCreators({userSignUp},dispatch);

}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
//export default SignUp

