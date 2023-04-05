import React from "react";
import { Text, View, Button } from "react-native";
import { globalStyles } from "../styles";

export function ContactListItem({ contact, navigation }) {
  return (
    <View style={globalStyles.listItem}>
      <Text>{contact.name + " - " + contact.phone}</Text>
      <View style={{ flexDirection: "row", gap: 5 }}>
        <Button
          title="View"
          onPress={() => navigation.navigate("Details", { contact })}
        ></Button>
      </View>
    </View>
  );
}
