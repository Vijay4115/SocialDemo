import db  from "../firebase";
import auth from '@react-native-firebase/auth'
import firebase from "@react-native-firebase/app"
import { GoogleSignin } from 'react-native-google-signin';
export const userSignUp =( fname,femail,fpassword) =>{

    return async (dispatch) =>{
        try{
        const result = await auth().createUserWithEmailAndPassword(femail,fpassword);

        if((await result).user.uid)
        {
            const user ={
                uid:(await result).user.uid,
                name:fname,
                email:femail,
                }
        
                await db.collection('users').doc((await result).user.uid).set(user);
                
                dispatch({type:'LOGIN',payload:user});
                alert("User Signed Up");
                
        }
    }
    catch(e)
    {alert(e)}
    }
}

export const getUser = (uid) =>{
    return async (dispatch) =>{
                const userquery = await db.collection('users').doc(uid).get();
            const userdata = userquery.data();

            dispatch({type:'LOGIN',payload:userdata});
            //alert("User Logged in");
                            
    }
}
export const userLogin = (femail,fpassword) =>{

    return async (dispatch) =>{

            const userarray   = auth().signInWithEmailAndPassword(femail,fpassword);
            const useruid = (await userarray).user.uid ;

            dispatch(getUser(useruid));
    }
}

export const Googlesignin =  () =>{

    return async dispatch =>{
    GoogleSignin.configure({
        webClientId:'1012028628373-xxxxxxxxxx6xxxxxrnafcfvgg.apps.googleusercontent.com',
        offlineAccess:true,
    })
      try
      {
          await GoogleSignin.hasPlayServices()

          const idToken  = await GoogleSignin.signIn();
     
          const googleCredential = auth.GoogleAuthProvider.credential(idToken.idToken);

            
          // Sign-in the user with the credential
          const result =  auth().signInWithCredential(googleCredential);
      
        if((await result).user.uid)
        {
            const user ={
                uid:(await result).user.uid,
                name:idToken.user.givenName,
                email:idToken.user.email,
                }
        
                await db.collection('users').doc((await result).user.uid).set(user);
                
                dispatch({type:'LOGIN',payload:user});
                
                
        }
          

    }
    catch(e){
        console.log(e);
        alert(e.message)
    }

  }
}

  export const FbUser = (uid,type) => {
    return async dispatch =>{
        try{
            console.log(uid);
            const query  = await db.collection('users').doc(uid).get();
            let user = query.data();

            dispatch({type:'FB_LOGIN',payload:user});

        }catch(e){
            console.log(e);
        }
    }
}
export const Apple_User = (uid, type) => {
    return async dispatch => {
      try {
        const query = await db.collection('users').doc(uid).get();
        let user = query.data();
        dispatch({type: 'APPLE_LOGIN', payload: user});
      } catch (error) {
        alert(error)
      }
    }
  }
