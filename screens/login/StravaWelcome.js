import { View, Button, ImageBackground } from "react-native";
import LogoutButton from "../../components/buttons/LogoutButton";
import StravaButton from "../../components/buttons/StravaButton";
import Image from "../../assets/stravarun.jpg"

export default function StravaWelcome({navigation}) {

    
    return (
        <View style={{
            flex: 1,
            marginTop:50 
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

            <StravaButton />
        </ImageBackground>

            
        </View>
    )
}