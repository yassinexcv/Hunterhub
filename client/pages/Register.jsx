import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground , Keyboard } from 'react-native';
// import {fetch} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
    const navigation = useNavigation();
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [region, setRegion] = useState('');
    const [ville, setVille] = useState('');


    const handleRegister = async () => {
        try {
            const res = await fetch("http://192.168.10.37:5000/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({

                    nom,
                    prenom,
                    email,
                    password,
                    region,
                    ville,
                    
                })
            });
            const data = await res.json();
            if (data.error) {
              alert(data.error);
            } else {
                // Naviguer vers la page d'accueil de l'application si l'enregistrement réussi
                navigation.navigate('Home');
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <ImageBackground source={require('../assets/register.png')} style={styles.container} resizeMode='cover'  >
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../assets/link2.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={nom}
                    onChangeText={setNom}
                    keyboardType="username"
                    returnKeyType="next"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Prenom"
                    value={prenom}
                    onChangeText={setPrenom}
                    keyboardType="prenom"
                    returnKeyType="next"

                />
              
                <TextInput
                    style={styles.input}
                    placeholder="Region"
                    value={region}
                    onChangeText={setRegion}
                    keyboardType="region"
                    returnKeyType="next"
                    
                />
                <TextInput
                    style={styles.input}
                    placeholder="Ville"
                    value={ville}
                    onChangeText={setVille}
                    keyboardType="ville"
                    returnKeyType="next"
                />
                  <TextInput
                    style={styles.input}
                    placeholder="email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    returnKeyType="next"

                />
                 <TextInput
                    style={styles.input}
                    placeholder=" Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    returnKeyType="done"
                    onSubmitEditing={() => { Keyboard.dismiss(); }}

                />

                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Register</Text>
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
    width: 200,
    height: 200,
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
    color: 'black', // changement de couleur à noir
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
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    },
    });
    
    export default RegisterScreen;