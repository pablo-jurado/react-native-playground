import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { globalStyles } from "../styles";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";

export function PostListItem({ post }) {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.listItem}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          Post {post.id}: {post.title}
        </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          backgroundColor="#fff"
          textColor="#757575"
          onPress={() => navigation.navigate("Post", { postId: post.id })}
        >
          View
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: { width: 100 },
  titleWrapper: { flex: 1 },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  body: {
    fontSize: 12,
    fontWeight: "light",
  },
});
