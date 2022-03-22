import { onValue, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { View, ImageBackground, FlatList } from "react-native";
import Image from '../../assets/background.jpg'
import { db } from '../../database/firebase'
import RoomFlat from "./RoomFlat";


export default function Rooms({navigation}) {   
    
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        onValue(
            ref(db, 'rooms'), (snapshot) => {
                let data = snapshot.val()
                setRooms(Object.entries(data))
            }
        ) 
    }, [])

    

    const listSeparator = () => {
        return <View style={{ height: 20 }} />
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
        <FlatList 
            style={{
                width: '90%'
            }}
            data={rooms}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => <RoomFlat room={item} navigation={navigation} /> }
            listSeparator={listSeparator}
        />
        </ImageBackground>
    </View>
    )
}

// 