import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View } from "react-native";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent("Better News", () => App);
