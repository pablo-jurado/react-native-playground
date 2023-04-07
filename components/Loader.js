import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Loader = () => {
  return (
    <View style={styles.loader}>
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Loader;
