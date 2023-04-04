import React from "react";
import { Text, View, Button } from "react-native";
import { globalStyles } from "../styles";

export function TodoItem({ itemText, onRemove, onEdit }) {
  return (
    <View style={globalStyles.listItem}>
      <Text>{itemText}</Text>
      <View style={{ flexDirection: "row", gap: 5 }}>
        <Button title="Remove" onPress={onRemove}></Button>
        <Button title="Edit" onPress={onEdit}></Button>
      </View>
    </View>
  );
}
