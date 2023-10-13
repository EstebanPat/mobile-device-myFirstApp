import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react'
import { Dimensions, StyleSheet } from 'react-native';
import LoginForm from '../screens/LoginForm';
import WelcomeSlide from '../screens/WelcomeSlide';
import RegisterForm from '../screens/RegisterForm';

const Stack = createStackNavigator();

const HomeStack = () => {
    const [orientation, setOrientation] = useState(null);

    const handleOrientationChange = ({ window: { width, height } }) => {
        const newOrientation = height > width ? "portrait" : "landscape";
        setOrientation(newOrientation);
    };

    useEffect(() => {
        Dimensions.addEventListener("change", handleOrientationChange);
        return () => {
          // Dimensions.removeEventListener("change", handleOrientationChange);
        };
    }, []);

    useEffect(() => {
        console.log("Orientation:", orientation);
    }, [orientation]); // Se ejecutará cuando cambie la orientación 

  return (
    <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
            headerStyle: orientation === "portrait" ? styles.headerStylePortrait : styles.headerStyleLandscape,
            headerTintColor: "#fff"
    }}>
        <Stack.Screen name="Welcome" component={WelcomeSlide} options={{ headerShown: false }} />
        <Stack.Screen name="Registro" component={RegisterForm}  options={{ title: "Registro" }}/>
        <Stack.Screen name="Login" component={LoginForm} options={{ title: "Login" }}  />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
    headerStylePortrait: {
      backgroundColor: "#2181CD",
      height: 100,
    },
    headerStyleLandscape: {
      backgroundColor: "#2181CD",
      height: 50,
    },
  });

export default HomeStack
