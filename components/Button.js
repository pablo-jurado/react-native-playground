import { TouchableHighlight, StyleSheet, Text } from "react-native";
import React from "react";

const Button = ({ children, onPress }) => {
  return (
    <TouchableHighlight onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </TouchableHighlight>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2196F3",
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
    padding: 10,
  },
});
