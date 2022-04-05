import { createNativeStackNavigator } from'@react-navigation/native-stack';
import Room from './Room';
import Rooms from './Rooms';


const Stack = createNativeStackNavigator()

export default function RoomNavigator() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Rooms" component={Rooms} options={{ headerShown: false }} />
            <Stack.Screen name="Room" component={Room} />
        </Stack.Navigator>
    )
}