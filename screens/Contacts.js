import React from "react";
import { View, Text, FlatList, Alert } from "react-native";
import { globalStyles } from "../styles";
import { ContactListItem } from "../components/ContactListItem";
import { FormModal } from "../components/modal";
import Button from "../components/Button";
import { storeData, getData } from "../services/localStorage";

export default function Contacts({ navigation }) {
  const [contacts, setContacts] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [contactIndex, setContactIndex] = React.useState(null);

  // load items from local store
  React.useEffect(() => {
    getData("contacts").then(setContacts);
  }, []);

  // update local store when items change
  React.useEffect(() => {
    storeData("contacts", contacts);
  }, [contacts]);

  function addItem(newItem) {
    const id = Math.random().toString();
    setContacts([...contacts, { ...newItem, id }]);
  }

  function removeItem(removeIndex) {
    setContacts(contacts.filter((_, index) => index !== removeIndex));
  }

  function edit(item) {
    setContacts(
      contacts.map((oldItem) => (oldItem.id === item.id ? item : oldItem))
    );
    setContactIndex(null);
    setShowModal(false);
  }

  function onEdit(index) {
    setContactIndex(index);
    setShowModal(true);
  }

  function openModal() {
    setContactIndex(null);
    setShowModal(true);
  }

  return (
    <>
      <FormModal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
        addItem={addItem}
        edit={edit}
        item={contactIndex ? contacts[contactIndex] : null}
      />
      <View style={{ marginHorizontal: 40, marginVertical: 20 }}>
        <Button onPress={openModal} backgroundColor="#b1b1b1">
          Add Contacts
        </Button>
      </View>
      <View style={globalStyles.container}>
        {contacts.length === 0 ? (
          <Text style={{ textAlign: "center" }}>No Contacts</Text>
        ) : (
          <FlatList
            data={contacts}
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
