import { View, Button } from "react-native";
import LogoutButton from "../../components/buttons/LogoutButton";
import StravaButton from "../../components/buttons/StravaButton";

export default function Profile({navigation}) {

    
    return (
        <View style={{
            flex: 1,
        }}>
            <View style={{ marginTop:50 }}>
            <LogoutButton />
            </View>
           
        </View>
    )
}