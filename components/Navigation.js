import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Nav() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <Button
          style={styles.button}
          title="Contact"
          onPress={() => navigation.navigate("Contacts")}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          style={styles.button}
          title="Post"
          onPress={() => navigation.navigate("Posts")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonWrapper: {
    flex: 1,
    padding: 5,
  },
});
