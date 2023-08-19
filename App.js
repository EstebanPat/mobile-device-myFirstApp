import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions, StyleSheet } from "react-native";
import WelcomeSlide from "./src/screens/WelcomeSlide";
import RegisterForm from "./src/screens/RegisterForm";
import LoginForm from "./src/screens/LoginForm";
import { useEffect, useState } from "react";

const Stack = createStackNavigator();

export default function App() {
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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome"
        screenOptions={{
          headerStyle: orientation === "portrait" ? styles.headerStylePortrait : styles.headerStyleLandscape,
        }}>
        <Stack.Screen name="Welcome" component={WelcomeSlide} />
        <Stack.Screen name="Registro" component={RegisterForm} />
        <Stack.Screen name="Login" component={LoginForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
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