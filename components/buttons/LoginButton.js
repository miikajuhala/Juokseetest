import { Button, Alert } from 'react-native';
import { app } from '../../database/firebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(app)

export default function LoginButton({email, password, login}) {
    
    const tryLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(user => {
            if (user) {
                login({
                    user: user
                })
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <Button 
            title='Kirjaudu' 
            onPress={tryLogin}
        />
    )
}