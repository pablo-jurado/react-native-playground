import React, { useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { getPost, getPostComments } from "../services/api";
import Button from "../components/Button";
import { globalStyles } from "../styles";

const Post = ({ route }) => {
  const postId = route.params.postId;
  const [post, setPost] = React.useState(null);
  const [comments, setComments] = React.useState([]);
  const [showComments, setShowComments] = React.useState(false);

  function handleGetComments() {
    toggleComments();

    if (!comments.length) {
      getPostComments(postId).then(setComments);
    }
  }

  function toggleComments() {
    setShowComments(!showComments);
  }

  useEffect(() => {
    getPost(postId).then(setPost);
  }, []);

  if (!post) return <Text>Loading</Text>;

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>
          Post {postId}: {post.title}
        </Text>
        <Text>{post.body}</Text>
      </View>
      <View style={styles.container}>
        <Button onPress={handleGetComments}>
          {showComments ? "Hide" : "Show"} Comments
        </Button>
      </View>
      {showComments && comments.length ? (
        <ScrollView>
          {comments.map((comments) => (
            <View key={comments.id} style={globalStyles.container}>
              <Text style={styles.email}>{comments.email}</Text>
              <Text>{comments.body}</Text>
            </View>
          ))}
        </ScrollView>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: { margin: 10 },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  email: {
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default Post;
