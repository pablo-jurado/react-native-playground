import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { PostListItem } from "../components/PostListItem";
import { getPosts } from "../services/api";
import Loader from "../components/Loader";

export default function Posts() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return posts.length > 0 ? (
    <ScrollView>
      {posts.map((post) => (
        <View key={post.id}>
          <PostListItem post={post} />
        </View>
      ))}
    </ScrollView>
  ) : (
    <Loader />
  );
}
