import { useContext, useEffect, useState } from "react";
import { View, Text, ImageBackground, TextInput, Button } from "react-native";
import LoginButton from "../../components/buttons/LoginButton";
import LoginFacebook from "../../components/buttons/LoginFacebook";
import LoginGoogle from "../../components/buttons/LoginGoogle";
import Image from '../../assets/background.jpg'
import userContext from "../../context/user/userContext";
import { StatusBar } from "expo-status-bar";

export default function Login({navigation}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, register } = useContext(userContext)

    const EmptyemailAndPassword = () => { 
        setEmail('')
        setPassword('')
    }

    
    return (
        <View style={{
            flex: 1
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
                    <Text style={{ fontSize: 25 }}>Kirjaudu sisään</Text>
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
                        secureTextEntry={true}
                    />
                    <View style= {{ margin: 20, width: '80%' }}>
                        <LoginButton email={email} password={password} empty={EmptyemailAndPassword} login={login} />
                    </View>
                    <View style= {{ marginBottom: 20, width: '80%' }}>
                        <Button 
                            title="Rekisteröidy" 
                            onPress={() => navigation.navigate("Rekisteröidy")}
                        />
                    </View>
                    <View>
                        <Text>...tai rekisteröidy / kirjaudu käyttämällä:</Text>
                    </View>
                    <LoginGoogle/>
                    <LoginFacebook />
                    
                </View>
            </ImageBackground>   
            <StatusBar style="auto" />
        </View>
    )
    

    
}