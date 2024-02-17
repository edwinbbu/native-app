import React, { useCallback } from "react";
import { Alert, Button, Linking, TouchableOpacity, Text } from "react-native";

export const LinkButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <TouchableOpacity
      className="mt-2 items-start justify-center"
      onPress={handlePress}
    >
      <Text className="text-blue-700 text-left">Read more</Text>
    </TouchableOpacity>
  );
};
