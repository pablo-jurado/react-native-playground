import { TouchableHighlight, StyleSheet, Text } from "react-native";
import React from "react";

const Button = ({
  children,
  onPress,
  backgroundColor = "#2196F3",
  textColor = "white",
}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={[styles.button, { backgroundColor }]}
    >
      <Text style={[styles.text, { color: textColor }]}>{children}</Text>
    </TouchableHighlight>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    padding: 10,
  },
});
