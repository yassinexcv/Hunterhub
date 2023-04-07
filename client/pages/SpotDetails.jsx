import React, { useState } from 'react';
import { View, Text, Image, Modal, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SpotDetails = ({ route }) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  // Vérifie si route.params existe et s'il contient une clé "spot"
  if (!route.params || !route.params.spot) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Une erreur est survenue. Veuillez réessayer.</Text>
      </View>
    );
  }

  const { spot } = route.params;

  const image = (string) => {
    let str = string;
    return str.replace(/\\/g, "/");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: `http://192.168.10.37:5000/` + image(spot.image) }} />
      <View style={styles.content}>
        <Text style={styles.title}>{spot.nom}</Text>
        <Text style={styles.text}>{spot.description}</Text>
        <View style={styles.details}>
        <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.details}>
      <View style={styles.detail}>
        <MaterialIcons name="location-on" size={24} color="black" />
        <Text style={styles.detailText}>{spot.region}</Text>
      </View>
      <View style={styles.detail}>
        <MaterialIcons name="location-on" size={24} color="black" />
        <Text style={styles.detailText}>{spot.ville}</Text>
      </View>
      <View style={styles.detail}>
        <MaterialIcons name="place" size={24} color="black" />
        <Text style={styles.detailText}>Latitude: {spot.latitude}</Text>
      </View>
      <View style={styles.detail}>
        <MaterialIcons name="place" size={24} color="black" />
        <Text style={styles.detailText}>Longitude: {spot.longitude}</Text>
      </View>
    </ScrollView>
</View>

          <View style={styles.detail}>
            <MaterialIcons name="location-on" size={24} color="black" />
            <Text style={styles.detailText}>{spot.ville}</Text>
          </View>
          <View style={styles.detail}>
            <MaterialIcons name="place" size={24} color="black" />
            <Text style={styles.detailText}>Latitude: {spot.latitude}</Text>
          </View>
          <View style={styles.detail}>
            <MaterialIcons name="place" size={24} color="black" />
            <Text style={styles.detailText}>Longitude: {spot.longitude}</Text>
          </View>
        </View>
      </View>

      <MapView style={styles.map}
        initialRegion={{
          latitude: spot.latitude,
          longitude: spot.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker  image={require('../assets/marker.png')} coordinate={{latitude: spot.latitude, longitude: spot.longitude}} />
      </MapView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    height: 300,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  details: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    overflow: 'scroll',
  },
  
  detail: {
    flexDirection: 'row',
    marginRight: 10,
  },
  detailText: {
    fontSize: 16,
    marginLeft: 5,
  },
  map: {
    height: 300,
  },
});

export default SpotDetails;
