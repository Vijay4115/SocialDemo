import React, { Component } from 'react'
import { SafeAreaView, View, Text, StyleSheet, KeyboardAvoidingView,TouchableOpacity,TextInput,Button, ScrollView,NativeModules } from 'react-native'
import { Dimensions } from 'react-native';
import { userLogin,Googlesignin ,FbUser,Apple_User} from '../actions/user';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GoogleSigninButton } from 'react-native-google-signin';
import { LoginManager ,AccessToken} from 'react-native-fbsdk';
import {appleAuth} from '@invertase/react-native-apple-authentication';
import auth from '@react-native-firebase/auth'

const screenwidth = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;

const { RNTwitterSignIn } = NativeModules;

 
const  FBLOGIN  =()=> {
    return async (dispatch, getState) => {
      try {
        const result = await LoginManager.logInWithPermissions([
          'public_profile',
          'email',
        ]);
        console.log(result);
        if (result.isCancelled) {
          throw 'User cancelled login process';
        }
        const data = await AccessToken.getCurrentAccessToken();
        
        const response = auth.FacebookAuthProvider.credential(
          data.accessToken,

        );
        console.log(response);
        const res = auth().signInWithCredential(response);
        
        dispatch(FbUser((await res).user.uid));
        alert('Logged in');
      } catch (e) {
        console.log(e);
      }
    };
  }
  const AppleSignIN = () => {
      
    return async dispatch => {
        try {
          
        const appleAuthRes = await appleAuth.performRequest({
          requestedOperation: appleAuth.Operation.LOGIN,
          requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        });
        const { identityToken, nonce } = appleAuthRes;
        const data = firebase.auth.AppleAuthProvider.credential(
          identityToken, nonce
        );
        const response = firebase.auth().signInWithCredential(data);
        dispatch(Apple_User(response.user));
        alert('Logged In');
      } catch (error) {
          console.log(error);
          alert(error)
      }
    };
  }

class Login extends Component{

    constructor(props){
        super(props);

        this.state={
            useremail:'',
            userpass:'',
           
           
        }
    }

    onLogin =() =>{
        this.props.userLogin(this.state.useremail,this.state.userpass)
    }
  signin = async () =>{
    
    this.props.Googlesignin()

  }

  
  
    API_KEY ={
    TWITTER_API_KEY : '9bWGMxxxxxxh0KnTYba',
    TWITTER_SECRET_KEY :'JsJUod9LjxxxxxxxxDnr07wQ52kuEsH',
    }
  
    twitterLogin = () =>{
  
      RNTwitterSignIn.init(this.API_KEY.TWITTER_API_KEY,this.API_KEY.TWITTER_SECRET_KEY);
      RNTwitterSignIn.logIn()
      .then(logindata =>{
        console.log("LoginData", logindata);
      }).catch(error =>{
        console.log(error);
      })
      
    
    
  }
    render(){
        return(
            <ScrollView>
           <SafeAreaView>
                <KeyboardAvoidingView behavior="position">
                    <View style={styles.container}>
                        <Text style={{ fontSize: 25, color: 'blue', fontWeight: '700' }}>Login </Text>
                       
                    </View>
    
                    <View style={styles.txtemail}>
                        <TextInput
                               placeholder="Enter Email"                
                               placeholderTextColor="darkgrey"
                            keyboardType="email-address"
                            autoCapitalize="none"
                               onChangeText={(nm)=>this.setState({useremail:nm})}
                           style={{paddingLeft:10,fontSize:15,color:'black'}}
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
                  
                 <View style={styles.btnlogin}>
                     <Button title="Login" onPress={()=>this.onLogin()}/>

                 </View>
                 <View style={{alignItems:'center',marginTop:20}}>
          
            <GoogleSigninButton
                style={{width: 192, height: 48}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={()=>this.signin()}
              />
                   </View>
                   <View style={styles.btnlogin}>
                     <Button title="FB Login" onPress={FBLOGIN()}/>

                 </View>
                 
                 <View style={styles.btnlogin}>
                     <Button title="Apple Login" onPress={AppleSignIN()}/>

                 </View>
                 <View style={styles.btnlogin}>
                     <Button title="Twitter Login" onPress={this.twitterLogin()}/>

                 </View>
                 <View style={styles.btnsignup}>
                     <Button title=" Go To SignUp" onPress={()=>this.props.navigation.navigate("SignUp")}/>
                     
                 </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
            </ScrollView>
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
        marginTop: 100,
        width: screenwidth * 0.75,
        paddingLeft:2,
        borderWidth:1,
        borderRadius:15,
        height:screenheight * 0.05,
        alignSelf:'center',
        padding:9

    },

    txtpassword: {
        marginTop: 100,
        width: screenwidth * 0.75,
        paddingLeft:2,
        borderWidth:1,
        borderRadius:15,
        height:screenheight * 0.05,
        alignSelf:'center',
        padding:9

    },
    btnlogin: {
        marginTop: 20,
        width: screenwidth * 0.8,
        alignSelf: 'center',
    },
    btnsignup: {
        marginTop: 20,
        width: screenwidth * 0.8,
        alignSelf: 'center',
        alignItems:'center'
    },
})


const mapStateToProps = state =>{
    return {
        user:state.user
    }
}

const mapDispatchToProps = dispatch =>{
    return bindActionCreators({userLogin,Googlesignin,FbUser,Apple_User},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
//export default Login
