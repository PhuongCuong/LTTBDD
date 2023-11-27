import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainTab from './src/MainTab';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Screen1 from './src/screen/Screen1';
import Cart from './src/screen/Cart';

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="chat" component={MainTab} />
        <Stack.Screen name="cart" component={Cart} options={{ title: 'Cart' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


