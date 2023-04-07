import { View, Text, ScrollView } from "react-native";
import React from "react";
import { PostListItem } from "../components/PostListItem";
import { getPosts } from "../services/api";

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
  ) : null;
}
