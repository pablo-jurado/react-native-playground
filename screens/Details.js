import React from "react";
import { Text, View, Button } from "react-native";

export default function Details({ route }) {
  const { contact, onRemoveItem } = route.params;

  return (
    <View style={{ justifyContent: "space-around" }}>
      <Text>
        {contact.name} - {contact.phone}
      </Text>
      <Button title="Delete" onPress={onRemoveItem}></Button>
    </View>
  );
}
