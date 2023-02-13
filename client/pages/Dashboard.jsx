import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList , ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
// burger menu
import { DrawerActions } from '@react-navigation/native';

// ajouter le bouton burger menu

const DashboardScreen = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://192.168.10.37:5000/scouter/getScouter')
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        setLoading(false);
      }
      )
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ImageBackground source={require('../assets/bg.png')} style={styles.BgImage} resizeMode='cover'  >
  <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
        <Icon
          name='menu'
          color='#fff'
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          
        />
      
      </View>
      <ScrollView>
        <FlatList
          data={users}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Card>
              <Card.Title>{item.nom}</Card.Title>
              <Card.Divider />
              <Text style={{ marginBottom: 10 }}>
                {item.description}
              </Text>
              <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='VIEW NOW' 
                onPress={() => navigation.navigate('Trotinette')}
                />
               
              
              
            </Card>
          )}
        />
      </ScrollView>
    </View>
    </ImageBackground>
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






