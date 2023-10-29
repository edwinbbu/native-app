import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <Text>Enter your name </Text>
      <TextInput
        style={styles.textBox}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textBox: {
    height: 30,
    borderStyle: "solid",
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
