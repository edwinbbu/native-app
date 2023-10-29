import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState("");
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="mb-1 ">Enter your name </Text>
      <TextInput
        className="border border-solid border-gray-200 px-3 h-10"
        placeholder="Name"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <StatusBar style="auto" />
    </View>
  );
}
