import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList , ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
// burger menu
import { DrawerActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ajouter le bouton burger menu

const DashboardScreen = () => {
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setIsLoggedIn(false);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    } catch (e) {
      console.log('Error during logout:', e);
    }
  };
  


  return (
   
      <ScrollView>
      <Button

                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='deconection'
                onPress={handleLogout}
                
                />

      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#000',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  BgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
    },
});

export default DashboardScreen;






