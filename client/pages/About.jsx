import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({ navigation }) => {
  const handleDone = () => {
    navigation.navigate('Home');
  };

  return (
    
    <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        pages={[
            {
                backgroundColor: '#fff',
                // image: <Image source={require('../assets/onboarding-img1.png')} />,
                title: 'Connectez-vous à votre compte',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            {
                backgroundColor: '#fff',
                // image: <Image source={require('../assets/onboarding-img2.png')} />,
                title: 'Connectez-vous à votre compte',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            {
                backgroundColor: '#fff',
                // image: <Image source={require('../assets/onboarding-img3.png')} />,
                title: 'Connectez-vous à votre compte',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
        ]}
    />
    );
};


const styles = StyleSheet.create({
  imageContainer: {
    marginBottom: 30,
  },
  image: {
    width: '80%',
    resizeMode: 'contain',
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
