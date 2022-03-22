import { createNativeStackNavigator } from'@react-navigation/native-stack';
import Login from './Login';
import Register from './Register';


const Stack = createNativeStackNavigator()

export default function LoginNavigator() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Kirjautuminen" component={Login} />
            <Stack.Screen name="Rekisteröidy" component={Register} />
        </Stack.Navigator>
    )

}