import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Trotinette from '../pages/Trotinette';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';


const Tab = createBottomTabNavigator();
const Tabs = () => {
  const [admin, setAdmin] = useState(true);
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
          } else if (route.name === 'Trotinette') {
            iconName = focused ? 'list' : 'list-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{headerShown : false }}/>
      <Tab.Screen name="Login" component={Login} />
      {admin ? (
        <>
          <Tab.Screen name="Register" component={Register} />
          {/* <Tab.Screen name="Dashboard" component={Dashboard} options={{headerShown : false }} /> */}
        </>
      ) : null}
    </Tab.Navigator>
  );
};


export default Tabs;

