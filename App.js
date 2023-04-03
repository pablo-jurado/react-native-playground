import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

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

      <View style={styles.container}>
        <TextInput
          style={styles.input}
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

function TodoItem({ itemText, onPress }) {
  return (
    <View style={styles.listItem}>
      <Text>{itemText}</Text>
      <Button title="Remove" onPress={onPress}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    margin: 50,
  },
  list: {
    margin: 5,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    padding: 5,
    borderStyle: "dashed",
    borderWidth: 1,
  },
  input: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    padding: 10,
  },
});
