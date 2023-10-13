import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-swiper';

const WelcomeSlide = () => {
    const navigation = useNavigation();
    const goToRegister = () => {
        navigation.navigate("Registro")
    }

    const goToLogin = () => {
        navigation.navigate("Login")
    }

    const Slide1 = () => {
      return (
        <View>
          <ImageBackground source={require('./images/reloj.jpg')} style={styles.imgBackground}>

          </ImageBackground>
        </View>
      )
    }
    const Slide2 = () => {
      return (
        <View>
          <ImageBackground source={require("./images/aaron2.png")} style={styles.imgBackground}>

          </ImageBackground>
        </View>
      )
    }
    const Slide3 = () => {
      return (
        <View>
          <ImageBackground source={require('./images/bombillo.jpg')} style={styles.imgBackground}>
            <Button title='Registro' onPress={goToRegister} /> 
            <Button title='Inicio de Sesion' onPress={goToLogin} />
          </ImageBackground>
        </View>
      )
    }

  return (
    <Swiper>
      <Slide1 />
      <Slide2 />
      <Slide3 />
    </Swiper>
    
  )
}

const styles = StyleSheet.create({
  imgBackground: {
    width: '100%',
    height: '90%'
  }
})

export default WelcomeSlide
