import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import RoomNavigator from "./RoomNavigator";
import Rooms from "./Rooms";

const Top = createMaterialTopTabNavigator()

export default function RoomTopNavigator() {

    return (
        <Top.Navigator style={{
            marginTop: 15
        }}>
            <Top.Screen name="myrooms" component={RoomNavigator} options={{ title: "Omat kilpailuni" }} />
            <Top.Screen name="allrooms" component={RoomNavigator} options={{ title: "Kaikki kilpailut" }} />            
        </Top.Navigator>
    )
}