 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
// import About from '../pages/About';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

const Nav = () => {
  const [isLoggedIn, setIsLogged] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    function checkIfLoggedIn() {
      AsyncStorage.getItem('token').then((value) => {
        if (value !== null) {
          console.log('token', "I m here")
          setIsLogged(true);
        } else {
          setIsLogged(false);
        }
      });
    }
    checkIfLoggedIn();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Login') {
            iconName = focused ? 'log-in' : 'log-in-outline';
          } else if (route.name === 'Register') {
            iconName = focused ? 'person-add' : 'person-add-outline';
          } else if (route.name === 'Dashboard') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'About') {
            iconName = focused ? 'ios-happy' : 'ios-happy-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      {
          isLoggedIn ? (
            <>
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Dashboard" component={Dashboard} />
            </>
          ) : (
            <>
              <Tab.Screen name="Login" component={Login} />
              <Tab.Screen name="Register" component={Register} />
           
            </>
          )
      }

    </Tab.Navigator>
  );
};

export default Nav;
