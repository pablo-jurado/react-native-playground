import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";
import { globalStyles } from "./styles";
import { TodoItem } from "./components/todoItem";

export default function App() {
  const [items, setItems] = React.useState([]);
  const [text, onChangeText] = React.useState("");

  function AddItem() {
    setItems([...items, text]);
    onChangeText("");
  }

  function removeItem(removeIndex) {
    setItems(items.filter((item, index) => index !== removeIndex));
  }

  return (
    <>
      <StatusBar style="auto" />

      <View style={globalStyles.container}>
        <Text>My Todos!!!</Text>
        <TextInput
          style={globalStyles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="new todo"
        />
        <Button title="Add" onPress={AddItem} disabled={text === ""} />

        <FlatList
          data={items}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => (
            <TodoItem itemText={item} onPress={() => removeItem(index)} />
          )}
        />
      </View>
    </>
  );
}
