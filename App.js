import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View } from "react-native";
import { Login } from "./components/Login";
import { AppRegistry } from "react-native";

export default function App() {
  return <Login />;
}

AppRegistry.registerComponent("Better News", () => App);
