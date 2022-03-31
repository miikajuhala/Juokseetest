import { Button, Alert } from "react-native"
import { app } from '../../database/firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { push, ref, set, db} from "firebase/database"
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session'
import axios from "axios"
import React from 'react'
import userContext from "../../context/user/userContext"
import { useContext } from "react"

const auth = getAuth(app)

const discovery = {
    authorizationEndpoint: 'https://www.strava.com/oauth/mobile/authorize',
    tokenEndpoint: 'https://www.strava.com/oauth/token',
    revocationEndpoint: 'https://www.strava.com/oauth/deauthorize',
  }; 

  
export default function RegisterButton({ email, password, passwordAgain }) {

    const { state, register } = useContext(userContext)

    const tryRegister = () => {
        if (email === "" || password !== passwordAgain || password === "") {
            Alert.alert("Tarkista antamasi tiedot", "Yritä uudelleen...")
        } else {
            createUser()
        }
    }

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(user => {
            if (user) {
                register({
                    user: user
                })
            }
        })
        .catch(err => console.log(err))
    }

    const addUserToDatabase = () => {

        set(
            ref(db, 'users/' + auth.currentUser.uid), {
                userId: auth.currentUser.uid,
            }
        )
        .catch(err => Alert.alert("Jokin meni pieleen"))

    }


    return (
        <Button 
            title="Rekistöidy"
            onPress={tryRegister}
        />
    )
}