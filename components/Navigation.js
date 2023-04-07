import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "./Button";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function Nav() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <Button onPress={() => navigation.navigate("Home")}>
          <Entypo
            style={{ letterSpacing: 5 }}
            name="home"
            size={16}
            color="#ffffff"
          />
          Home
        </Button>
      </View>
      <View style={styles.buttonWrapper}>
        <Button onPress={() => navigation.navigate("Contacts")}>
          <Ionicons
            style={{ letterSpacing: 5 }}
            name="person"
            size={16}
            color="#ffffff"
          />
          Contacts
        </Button>
      </View>
      <View style={styles.buttonWrapper}>
        <Button onPress={() => navigation.navigate("Posts")}>
          <FontAwesome
            name="book"
            style={{ letterSpacing: 5 }}
            size={16}
            color="#ffffff"
          />
          Posts
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#95cffe",
    paddingTop: 10,
    paddingBottom: Platform.OS === "ios" ? 30 : 10,
    paddingHorizontal: 10,
  },
  buttonWrapper: {
    flex: 1,
    padding: 5,
  },
});
