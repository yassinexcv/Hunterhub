import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native';


import Nav from './components/Nav';
import About from './pages/About'
import Home from './pages/Home';
import Login from './pages/Login';

const Stack = createStackNavigator();


export default function App() {


  return (


    <SafeAreaView style={styles.container}>
      <NavigationContainer>

        <Stack.Navigator>   
          
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerShown: false
          }}/>

          <Stack.Screen
          name="Nav"
          component={Nav}
          options={{
            headerShown: false
          }}/>

          <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}/>

          {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}/> */}

        </Stack.Navigator>
       


      </NavigationContainer>
    </SafeAreaView>

  );

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },


});



