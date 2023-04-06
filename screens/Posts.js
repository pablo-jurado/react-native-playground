import { View, Text } from "react-native";
import React from "react";

export default function Posts() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    }

    getPosts();
  }, []);

  return (
    <View>
      <Text>Posts</Text>
    </View>
  );
}
