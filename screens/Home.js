import React from "react";
import { View, Text, FlatList, Alert } from "react-native";
import { globalStyles } from "../styles";
import { ContactListItem } from "../components/ContactListItem";
import { FormModal } from "../components/modal";
import Button from "../components/Button";
import { storeData, getData } from "../services/localStorage";

export default function Home({ navigation }) {
  const [items, setItems] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [itemIndex, setItemIndex] = React.useState(null);

  // load items from local store
  React.useEffect(() => {
    getData("contacts").then(setItems);
  }, []);

  // update local store when items change
  React.useEffect(() => {
    storeData("contacts", items);
  }, [items]);

  function addItem(newItem) {
    const id = Math.random().toString();
    setItems([...items, { ...newItem, id }]);
  }

  function removeItem(removeIndex) {
    setItems(items.filter((_, index) => index !== removeIndex));
  }

  function edit(item) {
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
        edit={edit}
        item={items[itemIndex]}
      />
      <View style={{ marginHorizontal: 40, marginVertical: 20 }}>
        <Button onPress={openModal} backgroundColor="#b1b1b1">
          Add Contacts
        </Button>
      </View>
      <View style={globalStyles.container}>
        {items.length === 0 ? (
          <Text style={{ textAlign: "center" }}>No Contacts</Text>
        ) : (
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <ContactListItem
                contact={item}
                navigation={navigation}
                onEdit={() => onEdit(index)}
                onRemoveItem={() => removeItem(index)}
              />
            )}
          />
        )}
      </View>
    </>
  );
}
