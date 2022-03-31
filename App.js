import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UserState from './context/user/UserState';
import Navigator from './Navigator';

export default function App() {
  return (
    <UserState>
      <Navigator />
    </UserState>
  );
}

