import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/MaterialIcons";
import IdentifyProblem from "./screens/IdentifyProblem";
import Pest from "./screens/Pest";
import Weather from "./screens/Weather";

// Import the AnotherScreen component
import Camera from "./screens/Camera";
import Gallery from "./screens/Gallery";
import LeafRust from "./screens/LeafRust";
import LooseSmut from "./screens/LooseSmut";
import RootRot from "./screens/RootRot";
import Septoria from "./screens/Septoria";
import StripeRust from "./screens/StripeRust";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator(); // Create a stack navigator

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 15,
          textAlign: "left",
          fontWeight: "bold",
          marginLeft: "10%",
        },
        activeTintColor: "black", // Text color of active tab
        activeBackgroundColor: "blue", // Background color of active tab
        inactiveTintColor: "black", // Text color of inactive tab
        inactiveBackgroundColor: "lightgray", // Background color of inactive tab
      }}
    >
      <Tab.Screen
        name="Identify The Problem"
        component={IdentifyProblem}
        options={{
          tabBarLabel: "Identify The Problem",
          tabBarIcon: ({ color, size }) => (
            <Icon name="camera-alt" size={40} style={styles.TabIcons} />
          ),
        }}
      />
      <Tab.Screen
        name="Pest And Disease"
        component={Pest}
        options={{
          tabBarLabel: "Pest And Disease",
          tabBarIcon: ({ color, size }) => (
            <Icon name="coronavirus" size={40} style={styles.TabIcons} />
          ),
        }}
      />
      <Tab.Screen
        name="Weather"
        component={Weather}
        options={{
          tabBarLabel: "Weather",
          tabBarIcon: ({ color, size }) => (
            <Icon name="cloud" size={40} style={styles.TabIcons} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      {/* Use the TabNavigator */}
      <Stack.Navigator>
        {/* Use the TabNavigator as a screen */}
        <Stack.Screen name="WheatWeather AI" component={TabNavigator} />

        {/* Use AnotherScreen outside of the TabNavigator */}
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Gallery" component={Camera} />
        <Stack.Screen name="LeafRust" component={LeafRust} />
        <Stack.Screen name="LooseSmut" component={LooseSmut} />
        <Stack.Screen name="RootRot" component={RootRot} />
        <Stack.Screen name="Septoria" component={Septoria} />
        <Stack.Screen name="StripeRust" component={StripeRust} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  TabIcons: {
    marginLeft: "-50%",
    marginTop: "-50%",
  },
  TabHeading: {
    width: 10,
  },
});
export default App;
