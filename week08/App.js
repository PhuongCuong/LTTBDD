import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './src/component/Screen1';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Update from './src/component/Update';
import Create from './src/component/Create';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <stack.Navigator initialRouteName='home'>
          <stack.Screen name='home' component={Screen1} />
          <stack.Screen name='update' component={Update} />
          <stack.Screen name='create' component={Create} />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


