import { Pressable, Text, ImageBackground } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from "react";

const Stack = createNativeStackNavigator()

export default function RoomFlat({ room, navigation }) {

    return (

        
            <Pressable
            style={{
                backgroundColor: 'white',
                opacity: 0.7,
                height: 150,
                width: '90%',
                margin: 10,
                borderTopLeftRadius: 20,
                borderBottomRightRadius: 20
            }}
            onPress={() => navigation.navigate('Room', {room: room})}
        >
            
                <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10 }}>{room[1].roomname}</Text>
                <Text style={{ margin: 20 }}>Luotu {room[1].created}</Text>
                <Text style={{ margin: 20 }}>Tekijä {room[1].host}</Text>
            
        </Pressable>
    )
}