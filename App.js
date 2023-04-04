import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Button, TextInput, FlatList } from "react-native";
import { globalStyles } from "./styles";
import { TodoItem } from "./components/todoItem";
import { FormModal } from "./components/modal";

export default function App() {
  const [items, setItems] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);

  function addItem(newItem) {
    setItems([...items, newItem]);
  }

  function removeItem(removeIndex) {
    setItems(items.filter((_, index) => index !== removeIndex));
  }

  return (
    <>
      <StatusBar style="auto" />
      <FormModal
        showModal={showModal}
        setShowModal={setShowModal}
        addItem={addItem}
      />
      <View style={globalStyles.container}>
        <Text>My Contacts</Text>
        <FlatList
          data={items}
          keyExtractor={(item) => item.key}
          renderItem={({ item, index }) => (
            <TodoItem
              itemText={item.name + " - " + item.phone}
              onPress={() => removeItem(index)}
            />
          )}
        />
      </View>
      <Button title="Add Contact" onPress={() => setShowModal(true)} />
    </>
  );
}
