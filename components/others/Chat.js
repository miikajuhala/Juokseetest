import { onValue, push, ref, child, set, runTransaction, update } from "firebase/database";
import { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, Button } from "react-native";
import { db } from '../../database/firebase'

export default function Chat({ room }) {

    const [thisRoom, setThisRoom] = useState(Object.values(room))

    const [message, setMessage] = useState({
        send: '',
        message: ''
    })

    useEffect(() => {
        const dbRef = ref(db)
            onValue(
                child(dbRef, `rooms/${room[0]}`), (snapshot) => {
                    let data = snapshot.val()
                    setThisRoom(data)
                }
            )
    }, [])

    const handleChange = (txt) => {
        setMessage({...message, send: new Date().getTime(), message: txt})
    }
   
    const sendMessage = () => {
        if (Object.values(message)[1]) {
            update(
                ref(db, `rooms/${room[0]}`), {
                    ...thisRoom, messages: [message, ...thisRoom.messages]
                }
            )
            setMessage({send: '', message:''})
        } 
        
    }

    const listSeparator = () => {
        return <View style={{
            height: 3,
            borderBottomColor: 'black',
            borderWidth: 1
        }}/>
    }

    return (
        <View style={{
            borderWidth: 1,
            backgroundColor: 'white',
            opacity: 0.7,
            // width: '90%',
            height: 250,
            borderRadius: 5
        }}
        >
            <FlatList 
                data={thisRoom.messages}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => <Text>{item.send}: {item.message}</Text>}
                ItemSeparatorComponent={listSeparator}
            />
            <TextInput 
                style={{
                    borderWidth: 1,
                    borderColor: 'grey',
                    // marginBottom: 5,
                    marginTop: 5,
                    backgroundColor: 'white'
                }}
                placeholder="Kirjoita..."
                onChangeText={txt => handleChange(txt)}
                value={message.message}
            />
            <Button 
                title="Lähetä"
                onPress={sendMessage}
            />
        </View>
    )
}
