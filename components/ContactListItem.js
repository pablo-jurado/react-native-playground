import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { globalStyles } from "../styles";
import Button from "./Button";

export function ContactListItem({ contact, navigation, onEdit, onRemoveItem }) {
  return (
    <View style={globalStyles.listItem}>
      <Text>{contact.name + " - " + contact.phone}</Text>
      <View style={styles.container}>
        <Button backgroundColor="#fff" textColor="#757575" onPress={onEdit}>
          Edit
        </Button>
        <Button
          backgroundColor="#fff"
          textColor="#b13434"
          onPress={onRemoveItem}
        >
          Delete
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", gap: 5 },
});
