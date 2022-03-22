import { Button, Alert } from 'react-native';
import { app } from '../../database/firebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import { saveUser } from '../phone_storage/asyncStorage'

const auth = getAuth(app)

export default function LoginButton({email, password, empty}) {

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            // saveUser(user)
            empty()
        } catch (err) {
            Alert.alert("Yritä uudestaan / rekisteröidy", "Käyttäjänimi tai salasana väärin...")
        }
    }
 

    return (
        <Button 
            title='Kirjaudu' 
            onPress={login}
        />
    )
}