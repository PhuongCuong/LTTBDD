import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Menus from './screen/Menus';
import Home from './screen/Home';
import Screen1 from './screen/Screen1';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from "react-native-vector-icons/Ionicons"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from './screen/Cart';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();




const MainTab = ({ navigation }) => {
    return (
        <Tab.Navigator initialRouteName='chat' screenOptions={({ route }) => ({
            headerStyle: {
                backgroundColor: "#1BA9FF",
                height: 42
            },
            headerTintColor: "#FFFFFF",
            headerTitleAlign: "center",
            headerLeft: () => (
                <Pressable style={{ marginLeft: 17 }}>
                    <Icon name="arrow-left" size={24} color="white" />
                </Pressable>
            ),
            headerRight: () => (
                <Pressable style={{ marginRight: 17 }}
                    onPress={() => navigation.navigate("cart")}
                >
                    <Icon name="cart-arrow-down" size={24} color="white" />
                </Pressable>
            ),
            tabBarIcon: ({ focused }) => {
                let icon;
                let rn = route.name;

                if (rn === "menu") {
                    icon = "menu"
                } else if (rn === "home") {
                    icon = "home"
                } else {
                    icon = "return-up-back"
                }

                return <Ionicons name={icon} size={24} color={focused ? "blue" : ""} />
            },
            tabBarStyle: {
                backgroundColor: "#1BA9FF",
                height: 49
            }


        })}>
            <Tab.Screen name='menu' component={Menus} />
            <Tab.Screen name='home' component={Home} />
            <Tab.Screen name='chat' component={Screen1} />
        </Tab.Navigator>
    );
};

export default MainTab;