import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image , ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import SvgUri from 'react-native-svg-uri';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      } else {
        navigation.navigate('Home');
      }
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <ImageBackground source={require('../assets/bgImage.png')} style={styles.container} resizeMode='cover'  >
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
      />
      <TextInput
        style={styles.input}
        placeholder="email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
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
    BgImage: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    logo: {
      width: 140,
      height: 100,
      resizeMode: 'contain',
      marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40, // augmenter la hauteur de l'élément
        padding: 10,
        marginBottom: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 5,
        color: 'white',
        fontSize: 20, // augmenter la taille de la police
        fontWeight: 'bold',
      }
      ,
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
