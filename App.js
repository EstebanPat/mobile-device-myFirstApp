import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./src/stack/HomeStack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Posts } from "./src/components/Posts";

const Tab = createBottomTabNavigator();

export default function App() {

  const [userRegistered, setUserRegistered] = useState(false);

  const handleRegistrationComplete = () => {
    setUserRegistered(!userRegistered);
  }

  return (
    <Posts></Posts>
    
  );
}

{/* <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} options={{tabBarLabel: "Inicio", 
        tabBarIcon:({color, size}) =>(
          <MaterialCommunityIcons name="home" color={color} size={size} />
        )}}>

        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer> */}