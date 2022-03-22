import { Pressable, ImageBackground, Alert } from "react-native";
import Facebook from '../../assets/facebook.png'

export default function LoginFacebook() {

    return (
        <Pressable 
            style={{
                width: '88%',
                height: 60,
                margin: 10
                
            }}
            onPress={() => Alert.alert("pressed")}
            
            >
            <ImageBackground
                source={Facebook}
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