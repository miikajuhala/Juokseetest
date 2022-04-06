import { useContext } from "react";
import { ImageBackground, Pressable, Alert } from "react-native";
import GoogleImg from '../../assets/google.png'
import { initializeApp } from 'firebase/app';
import * as Google from 'expo-google-app-auth';
// import { saveUser } from '../phone_storage/asyncStorage'
import userContext from "../../context/user/userContext";


import { getAuth, onAuthStateChanged, signInWithCredential, GoogleAuthProvider} from "firebase/auth";
export default function LoginGoogle({navigation}) {

    const auth = getAuth();
    const { login, register } = useContext(userContext)


    function isUserEqual(googleUser, firebaseUser) {
      if (firebaseUser) {
      return false;
    }}
    
    function onSignIn(googleUser) {
      console.log('Google Auth Response', googleUser);
      // We need to register an Observer on Firebase Auth to make sure auth is initialized.
      const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          const credential = GoogleAuthProvider.credential(
              googleUser.idToken,
              googleUser.accessToken
          );
    
          // Sign in with credential from the Google user.
          signInWithCredential(auth, credential).then(user => {
            if (user) {
                login({
                    user: user
                })
            }
        })
        //   saveUser(user)
          empty()
          .catch((error) => {
            // Handle Errors here.
            console.log(error.message);
          });
        } else {
          console.log('User already signed-in Firebase.');
        }
      });
    }
  
  
  async function signInWithGoogleAsync() {
    try {
        const result = await Google.logInAsync({
          behavior: "web",
          iosClientId: '435632025856-hoe4vok2rmfigeguodt34tnnmkj4ll5d.apps.googleusercontent.com',
          scopes: ['profile', 'email'],
        });
  
        if (result.type === 'success') {
          onSignIn(result)
          return result.accessToken
          
        } else {
          return { cancelled: true };
        }
      } catch (e) {
        return { error: true };
      }
  }

    return (
        <Pressable style={{
            width: '80%',
            height: 60,
            margin: 10
        }}
            onPress={()=>{signInWithGoogleAsync()}}
            
            
        >
            <ImageBackground
                source={GoogleImg}
                style={{
                    flex:1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                resizeMode="cover"
            >
            </ImageBackground>
        </Pressable>
    )
}