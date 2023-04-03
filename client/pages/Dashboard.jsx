import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const DashboardScreen = () => {
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [spots, setSpots] = useState([]);
  const [search, setSearch] = useState('');

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

  const filterSpots = (spots, search) => {
    return spots.filter(
      (spot) =>
        spot.nom.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        spot.description.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        spot.region.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        spot.ville.toLowerCase().indexOf(search.toLowerCase()) !== -1
        
    );
  };

  const filteredSpots = filterSpots(spots, search);

  const renderSpotItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('SpotDetails', { spot: item })}>
      <Card containerStyle={styles.card}>
        <Image style={styles.cardImage} source={{ uri: item.image }} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.nom}</Text>
          <Text style={styles.cardText}>{item.description}</Text>
          <View style={styles.cardDetails}>
            <Text style={styles.cardDetailText}>{item.region}</Text>
            <Text style={styles.cardDetailText}>{item.ville}</Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <TextInput
          style={styles.searchBar}
          value={search}
          onChangeText={(text) => setSearch(text)}
          placeholder="Search"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity>
          <Ionicons name="ios-options-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredSpots}
        keyExtractor={(item) => item._id}
        renderItem={renderSpotItem}
      />
      <Button title="Logout" buttonStyle={styles.logoutButton} onPress={handleLogout} />
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddSpot')}>
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4511e',
  },
  logo: {
    width: 50,
    height: 50,
  },
  searchBar: {
    width: '70%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingLeft: 20,
  },
  card: {
    borderRadius: 20,
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 20,
  },
  cardContent: {
    marginTop: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 16,
    color: '#6b6b6b',
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cardDetailText: {
    fontSize: 16,
    color: '#6b6b6b',
  },
  logoutButton: {
    backgroundColor: '#f4511e',
    borderRadius: 20,
    margin: 20,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#f4511e',
    borderRadius: 50,
    padding: 10,
  },
});

export default DashboardScreen;