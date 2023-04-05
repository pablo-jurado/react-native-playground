import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import { globalStyles } from "../styles";
import { ContactListItem } from "../components/ContactListItem";
import { FormModal } from "../components/modal";

export default function Home({ navigation }) {
  const [items, setItems] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [itemIndex, setItemIndex] = React.useState(null);

  function addItem(newItem) {
    const id = Math.random().toString();
    setItems([...items, { ...newItem, id }]);
  }

  function removeItem(removeIndex) {
    setItems(items.filter((_, index) => index !== removeIndex));
  }

  function editItem(item) {
    setItems(items.map((oldItem) => (oldItem.id === item.id ? item : oldItem)));
    setItemIndex(null);
    setShowModal(false);
  }

  function onEdit(index) {
    setItemIndex(index);
    setShowModal(true);
  }

  function openModal() {
    setItemIndex(null);
    setShowModal(true);
  }

  return (
    <>
      <FormModal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
        addItem={addItem}
        editItem={editItem}
        item={items[itemIndex]}
      />
      <View style={globalStyles.container}>
        {items.length === 0 ? (
          <Text style={{ textAlign: "center" }}>No Contacts</Text>
        ) : (
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ContactListItem contact={item} navigation={navigation} />
            )}
          />
        )}
      </View>
      <Button title="Add Contact" onPress={openModal} />
    </>
  );
}
