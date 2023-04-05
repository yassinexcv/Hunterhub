import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
// import Nav from '../components/Nav';
const Home= () => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {

    const getMarkers = async () => {
      const response = await fetch('http://192.168.10.37:5000/spot/getSpots/');
      const data = await response.json();
      setMarkers(data);
    };

    getMarkers();
   
  }, []);

  return (
    <>
   
   
      <MapView
          style={{ flex: 1, width: '100%', height: '100%' }}
          initialRegion={{
            latitude: 34.05,
            longitude: -6.75,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
      > 
  
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            title={marker.nom}
            description={marker.description}
            image={require('../assets/marker.png')}
          />
        ))}
  
  
      </MapView>
       
     
    

      </>
     
      
    );

  // const markers = [
    // {
    //   nom: 'Lagune Sidi Boughaba',
    //   description: 'Située sur la côte ouest du Maroc, la lagune de Sidi Boughaba est une importante région de pêche pour les espèces de poissons telles que les sardines, les anchois et les maquereaux.',
    //   latitude: 32.8901,
    //   longitude: -9.2553,
    // },
  //   {
  //     nom: 'Baie de Dakhla',
  //     description: 'Située sur la côte sud-ouest du Maroc, la baie de Dakhla est une importante région de pêche pour les espèces de poissons telles que les crevettes, les calamars et les sardines.',
  //     latitude: 23.7142,
  //     longitude: 23.7142,
  //   },
  //   {
  //     nom: 'Port de Safi',
  //     description: 'Situé sur la côte ouest du Maroc, le port de Safi est une importante région de pêche pour les espèces de poissons telles que les sardines, les thons et les daurades.',
  //     latitude: 32.3123,
  //     longitude: -9.2311,
  //   },
  //   {
  //     nom: 'Port de Tanger',
  //     description: 'Situé sur la côte nord-ouest du Maroc, le port de Tanger est une importante région de pêche pour les espèces de poissons telles que les sardines, les thons et les merlans.',
  //     latitude: 35.7888,
  //     longitude: -5.8097,
  //   },
  //   {
  //     nom: 'Baie de Asilah',
  //     description: 'Située sur la côte nord-ouest du Maroc, la baie de Asilah est une importante région de pêche pour les espèces de poissons telles que les crevettes, les soles et les dorades.',
  //     latitude: 35.4859,
  //     longitude: -6.0266,
  //   },
  //   {
  //     nom: 'Port d\'El Jadida',
  //     description: 'Situé sur la côte ouest du Maroc, le port d\'El Jadida est une importante région de pêche pour les espèces de poissons telles que les sardines, les merlans et les dorades.',
  //     latitude: 33.2625,
  //     longitude: -8.5103,
  //   },
  //   {
  //     nom: 'Port d\'Agadir',
  //     description: 'Situé sur la côte sud-ouest du Maroc, le port d\'Agadir est une importante région de pêche pour les espèces de poissons telles que les sardines, les thons et les merlans.',
  //     latitude: 30.4245,
  //     longitude: -9.5986,
  //   },
  //   {
  //     nom: 'Réserve naturelle de Oualidia',
  //     ville: 'Oualidia',
  //     region : 'eljadida',
  //     description: 'Située sur la côte ouest du Maroc, la réserve naturelle de Oualidia est une importante région de pêche pour les espèces de poissons telles que les crevettes, les huîtres et les soles.',
  //     latitude: 32.8222,
  //     longitude: -8.9090,

  //   },
    // {
    //   nom: 'Baie d\'Essaouira',
    //   description: 'Située sur la côte ouest du Maroc, la baie d\'Essaouira est une importante région de pêche pour les espèces de poissons telles que les sardines, les anchois et les maquereaux.',
    //   latitude: 31.5103,
    //   longitude: -9.7593,
    // },
  //   {
  //     nom: 'Port de Casablanca',
  //     description: 'Situé sur la côte ouest du Maroc, le port de Casablanca est une importante région de pêche pour les espèces de poissons telles que les sardines, les merlans et les dorades.',
  //     latitude: 33.5995,
  //     longitude: -7.6102,
  //   },
  //   {
  //     nom: 'Barrage moulay youssef',
  //     description: 'Câble à pêche, lacs à côté du barrage, poissons tels que le barbeau, la carpe, le silure et le brochet.',
  //     latitude: 31.61017,
  //     longitude: -7.27250,
  //   },
  //   {
  //     nom: 'Barrage Bin El Ouidane',
  //     description: 'Lacs de pêche avec des poissons tels que la truite, la perche, la tanche et le black bass.',
  //     latitude: 32.10698802007394,
  //     longitude: -6.46398425102234,
  //   },
  //   {
  //     nom: 'Barrage Al Mansour Eddahbi',
  //     description: 'Câble à pêche, lacs à côté du barrage, poissons tels que la truite, la perche, la tanche et le brochet.',
  //     latitude: 32.8515,
  //     longitude: -6.7726,
  //   },
  //   {
  //     nom: 'Lac Aguelmam Azigza',
  //     description: 'Lac de montagne avec une variété de poissons tels que la truite, la perche et la tanche.',
  //     latitude:32.9740469,
  //     longitude: -5.4429699,
  //   },
  //   {
  //     nom: 'Barrage Al Wahda',
  //     description: 'Câble à pêche, lacs à côté du barrage, poissons tels que la carpe, la perche, la tanche et le brochet.',
  //     latitude: 31.7606,
  //     longitude: -7.7637,
  //   },
  //   {
  //     nom: 'Lac Lalla Takerkoust',
  //     description: 'Lac de pêche populaire avec une variété de poissons tels que la carpe, la perche, la tanche et le black bass.',
  //     latitude:  31.3669,
  //     longitude:  -8.13306,
  //   },
  //   {
  //     nom: 'Barrage Al Massira',
  //     description: 'Câble à pêche, lacs à côté du barrage, poissons tels que le barbeau, la carpe, le silure et le brochet.',
  //     latitude: 33.2609,
  //     longitude: -7.5833,
  //   },
   
  
  // ];
  


};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
