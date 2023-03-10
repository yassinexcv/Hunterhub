import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Nav from '../components/Nav';

const OnboardingScreen = ({ navigation }) => {
  const handleDone = () => {
    navigation.navigate('Nav');
  };

  return (
    <>
    
    
    <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        pages={[
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/onboarding-image1.png') } style={styles.image} />,
                title: 'Bienvenue sur Hunterhub',
                subtitle: 'Vous etes un pécheur ou un chasseur ? Vous etes au bon endroit !',
            },
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/onboarding-image2.png')} style={styles.image}/>,
                title: 'Trouvez les meilleurs spots de pêche et de chasse',
                subtitle: 'Nous vous proposons les meilleurs spots de pêche et de chasse en fonction de votre localisation.',
            },
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/onboarding-image3.png') } style={styles.image} />,
                title: 'Gardez une trace de vos meilleurs moments',
                subtitle: 'Gagner du temps en gardant une trace de vos meilleurs moments de pêche et de chasse.',
            },
        ]}
    />

</>
    );
};


const styles = StyleSheet.create({
  imageContainer: {
    marginBottom: 30,
  },
  image: {
    width: 300,
    height: 300,


  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#FFD47F',
    height: 60,
    borderRadius: 30,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default OnboardingScreen;
