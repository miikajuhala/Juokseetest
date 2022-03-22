import { useState } from 'react';
import { View, ImageBackground, Text, TextInput } from 'react-native';
import RegisterButton from '../../components/buttons/RegisterButton';
import Image from '../../assets/runner.png'


export default function Register({navigation}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordAgain, setPasswordAgain] = useState('')

    return (
        <View style={{
            flex:1,
        }}>
            <ImageBackground
                style={{
                    flex:1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                resizeMode="cover"
                source={Image}
            >
                <View style={{
                    height: '80%',
                    width: '90%',
                    backgroundColor: 'white',
                    opacity: 0.7,
                    borderRadius: 20,
                    alignItems: 'center'               
                }}>
                    <Text style={{ fontSize:20, marginBottom: 20 }}>Tervetuloa rekisteröitymään!</Text>
                    <TextInput 
                        placeholder="  Käyttäjänimi tai email"
                        keyboardType="email-address"
                        style={{
                            width: '80%',
                            backgroundColor: 'white',
                            opacity: 0.7,
                            borderColor: 'grey',
                            borderWidth: 1,
                            marginTop: 10
                        }}
                        onChangeText={username => setEmail(username)}
                        value={email} 
                    />
                    <TextInput 
                        placeholder="  Salasana"
                        style={{
                            width: '80%',
                            backgroundColor: 'white',
                            opacity: 0.7,
                            borderColor: 'grey',
                            borderWidth: 1,
                            marginTop: 10
                        }}                     
                        onChangeText={pass => setPassword(pass)}
                        value={password}  
                    />
                    <TextInput 
                        placeholder="  Salasana uudelleen"
                        style={{
                            width: '80%',
                            backgroundColor: 'white',
                            opacity: 0.7,
                            borderColor: 'grey',
                            borderWidth: 1,
                            marginTop: 10
                        }}                     
                        onChangeText={pass => setPasswordAgain(pass)}
                        value={passwordAgain}  
                    />
                    <View style={{ margin: 20 }}>
                        <RegisterButton email={email} password={password} passwordAgain={passwordAgain} />
                    </View>
                </View>
                

            </ImageBackground>


        </View>
    )
}