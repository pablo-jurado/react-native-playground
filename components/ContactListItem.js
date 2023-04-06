import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { globalStyles } from "../styles";

export function ContactListItem({ contact, navigation, onEdit, onRemoveItem }) {
  return (
    <View style={globalStyles.listItem}>
      <Text>{contact.name + " - " + contact.phone}</Text>
      <View style={styles.container}>
        <Button
          color={"gray"}
          style={styles.button}
          title="Edit"
          onPress={onEdit}
        ></Button>
        <Button
          color={"red"}
          style={styles.button}
          title="Delete"
          onPress={onRemoveItem}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", gap: 5 },
});
