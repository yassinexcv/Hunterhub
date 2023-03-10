import React, { useState  , useRef} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground, Keyboard , ScrollView , RefreshControl} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Home from './Home';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import Button from '../components/Button';



const LoginScreen = (props) => {

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let passwordRef = useRef();

  

  const handleLogin = async () => {


    
    try {
      const response = await fetch('http://192.168.10.37:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (data.error) {
        alert(data.error);
      }
      else {
        await AsyncStorage.setItem('token', data.token);
        // donne accès à la page Home avec une autre façon de faire
        props.navigation.navigate('Home');
      }
    } catch (err) {
      console.log(err);
    }

   


  };

  return (
    <ImageBackground source={require('../assets/bgImage.png')} style={styles.container} resizeMode='cover'>
      <View style={styles.container}>

      {/* <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Text>Pull down to see RefreshControl indicator</Text>
      </ScrollView> */}

        <Image
          style={styles.logo}
          source={require('../assets/link2.png')}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() => { passwordRef.focus(); }}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          ref={(input) => { passwordRef = input; }}
          returnKeyType="done"
          onSubmitEditing={() => { Keyboard.dismiss(); }}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>


      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    padding: 10,
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 5,
    color: 'black', // changement de couleur à noir
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default LoginScreen;
