const API_URL = "https://jsonplaceholder.typicode.com";
import { Alert } from "react-native";

export async function getPosts() {
  try {
    const response = await fetch(`${API_URL}/posts`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    return response.json();
  } catch (error) {
    Alert.alert("Error", error);
  }
}

export async function getPost(id) {
  try {
    const response = await fetch(`${API_URL}/posts/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    return response.json();
  } catch (error) {
    Alert.alert("Error", error);
  }
}

export async function getPostComments(postId) {
  try {
    const response = await fetch(`${API_URL}/posts/${postId}/comments`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    return response.json();
  } catch (error) {
    Alert.alert("Error", error);
  }
}
