import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles";

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.title}>Home Slider coming soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
  },
});
