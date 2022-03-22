import { View, Text, ImageBackground, TextInput, Button, Alert } from 'react-native';
import { db } from '../../database/firebase'
import Image from '../../assets/background.jpg'
import { useEffect, useState } from 'react';
import { push, ref } from 'firebase/database';
import { app } from '../../database/firebase'
import { getAuth } from 'firebase/auth';

const auth = getAuth(app)
const user = auth.currentUser;

export default function CreateRoom({ navigation }) {

    const [roomName, setRoomName] = useState('')
    const [username, setUsername] = useState('')

    useEffect(() => {
        //setUsername(user.email.split('@')[0].replace('.', ''))
    }, [])

    const saveRoom = () => {
        if (roomName) {
            push(
                ref(db, 'rooms'), {
                    roomname: roomName,
                    host: username,
                    messages: [{send: new Date().getTime(), message: "Ei vielä viestejä, ole ensimmäinen"}],
                    created: new Date().getTime(),
                    users: [auth.currentUser.uid]
                }
            )
            setRoomName('')
            navigation.navigate('Rooms')
        } else {
            Alert.alert("Muikkari!", "Anna kilpailullesi nimi")
        }
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
                    <Text style={{ fontSize: 17, margin: 20 }}>Luo uusi kilpailu!</Text> 
                    <TextInput 
                        placeholder='Huoneen nimi'
                        style={{
                            height: 300
                        }}
                        onChangeText={nimi => setRoomName(nimi)}
                        value={roomName}
                    />   
                    <Button 
                        title='Luo kilpailu'
                        onPress={saveRoom}
                    />
                </View>
                
            </ImageBackground>   
        </View>
    )
}