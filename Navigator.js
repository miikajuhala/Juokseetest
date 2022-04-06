import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, ImageBackground } from '@react-navigation/native';
import { Ionicons} from '@expo/vector-icons'; 
import { useEffect, useState, useContext } from 'react';
import { app } from './database/firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Profile from './screens/profile/Profile';
import RoomNavigator from './screens/room/RoomNavigator';
import CreateRoom from './screens/room/CreateRoom';
import LoginNavigator from './screens/login/LoginNavigator';
import userContext from './context/user/userContext';
import WelcomePage from './WelcomePage';
import RoomTopNavigator from './screens/room/RoomTopNavigator';
import { Text } from 'react-native';
import StravaWelcome from './screens/login/StravaWelcome';

const auth = getAuth(app)

const Tab = createBottomTabNavigator();

export default function Navigator() {

  const { state, seenWelcome } = useContext(userContext)
  const [test, setTest] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      seenWelcome()
    }, 2000);
  }, [])
  
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
  
      if (route.name === 'Login') {
        iconName = 'md-home';
      } else if (route.name === 'Kilpailut') {
        iconName = 'md-settings';
      } else if (route.name === 'Luo') {
        iconName = 'md-settings';
      } else if (route.name === 'Profiili') {
        iconName = 'md-settings';
      }
  
      return <Ionicons name={iconName} size={size} color={color} />;
    }
  });

 
console.log(state)

  while (!state.seenWelcome) {
    return <WelcomePage />
  }


  if (state.user.user && state.strava === true) {
    return (
      <NavigationContainer>      
          <Tab.Navigator screenOptions={screenOptions}>
              <Tab.Screen name="Profiili" component={Profile} options={{ headerShown: false}}  />
              <Tab.Screen name="Kilpailut" component={RoomTopNavigator} options={{ headerShown: false}} />
              <Tab.Screen name="Luo" component={CreateRoom} options={{ headerShown: false }} />
          </Tab.Navigator>
      </NavigationContainer>
    )
  } 
  else if(state.user.user && state.strava !== true){
    return(
      <NavigationContainer>      
            <Tab.Navigator screenOptions={screenOptions}>
                <Tab.Screen name="StravaWelcome" component={StravaWelcome} options={{ headerShown: false, tabBarStyle: { display: 'none' }}}  />
            </Tab.Navigator>
      </NavigationContainer>
    );
  }
  
  else {
    return (
      <NavigationContainer>      
            <Tab.Navigator screenOptions={screenOptions}>
                <Tab.Screen name="Login" component={LoginNavigator} options={{ headerShown: false, tabBarStyle: { display: 'none' }}}  />
            </Tab.Navigator>
      </NavigationContainer>
    );
  }
  
  
}