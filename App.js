import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Login from "./screens/Login";
import Home from "./screens/Home";
import Profile from './screens/Profile';
import Search from './screens/Search';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = focused ? 'home' : 'home-outline';
          } 
          else if (route.name === 'explore') {
            iconName = focused ? 'search' : 'search-outline';
          } 
          else if (route.name === 'history') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          } 
          else if (route.name === 'profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#841584',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        headerShown:false
      }
      )}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="explore" component={Search} />
      <Tab.Screen name="history" component={Home} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
}


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
