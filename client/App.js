import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import Trotinette from './pages/Trotinette';
import Login from './pages/Login';
import Register from './pages/Register';
import Nav from './components/Nav';

const Stack = createStackNavigator();

const Image = { uri: "https://img.freepik.com/free-vector/blue-sky-with-clouds-background-elegant_1017-26302.jpg?w=1380&t=st=1674549824~exp=1674550424~hmac=5516180b0d8a73a2e0944931f027def86d71e03dbadfe8489a98a11e484a5479" };

export default function App() {


  return (


    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>   
           <Stack.Screen
          name="Nav"
          component={Nav}
          options={{
            headerShown: false
          }}  
        />
          <Stack.Screen
            name="Trotinette"
            component={Trotinette}
            options={{
              headerShown: false
            }}
          />
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



