import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DashboardScreen = () => {
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [spots, setSpots] = useState([]);

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

  const getSpots = async () => {
    const response = await fetch('http://192.168.10.37:5000/spot/getSpots');
    const data = await response.json();
    setSpots(data);
  };

  useEffect(() => {
    getSpots();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>information about spots</Text>
      </View>
      <FlatList
        data={spots}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Card>
            <Card.Title>{item.nom}</Card.Title>
            <Card.Divider />
            <Text style={{ marginBottom: 10 }}>description : {item.description}</Text>
            <Card.Divider />
            <Text style={{ marginBottom: 10 }}>region : {item.region}</Text>
            <Card.Divider />
            <Text style={{ marginBottom: 10 }}>ville : {item.ville}</Text>
            <Card.Divider />
            <Text style={{ marginBottom: 10 }}>longitude : {item.longitude}</Text>
            <Card.Divider />
            <Text style={{ marginBottom: 10 }}>latitude : {item.latitude}</Text>
          </Card>
        )}
      />
      <Button title="Logout" onPress={handleLogout} />
    </View>
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
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DashboardScreen;



