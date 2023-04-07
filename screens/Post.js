import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getPost } from "../services/api";

const Post = ({ route }) => {
  const postId = route.params.postId;
  const [post, setPost] = React.useState(null);

  useEffect(() => {
    getPost(postId).then(setPost);
  }, []);

  if (!post) return <Text>Loading</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Post {postId}: {post.title}
      </Text>
      <Text>{post.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { margin: 10 },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default Post;
