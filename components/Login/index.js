import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View, Button, Alert } from "react-native";

export const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View className="w-3/4 space-y-2">
        <Text className="mb-1">Login</Text>
        <TextInput
          className="border border-solid border-gray-200 px-3 h-10 w-full"
          placeholder="Name"
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TextInput
          className="border border-solid border-gray-200 px-3 h-10 w-full"
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <Button
          title="Press me"
          onPress={() => Alert.alert("Simple Button pressed")}
          className="bg-blue-500 text-white px-3 h-10 w-full"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};