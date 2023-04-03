import React from "react";
import { Text, View, Button } from "react-native";
import { globalStyles } from "../styles";

export function TodoItem({ itemText, onPress }) {
  return (
    <View style={globalStyles.listItem}>
      <Text>{itemText}</Text>
      <Button title="Remove" onPress={onPress}></Button>
    </View>
  );
}
