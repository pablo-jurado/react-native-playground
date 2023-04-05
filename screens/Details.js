import React from "react";
import { Text } from "react-native";

export default function Details({ route }) {
  const { contact } = route.params;

  return (
    <Text>
      {contact.name} - {contact.phone}
    </Text>
  );
}
