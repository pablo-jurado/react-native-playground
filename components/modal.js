import React from "react";
import { Modal, View, Text, Button, TextInput } from "react-native";
import { globalStyles } from "../styles";

export const FormModal = ({ showModal, setShowModal, addItem }) => {
  const ref_input2 = React.useRef();
  const [name, onChangeName] = React.useState("");
  const [phone, onChangePhone] = React.useState("");

  const handleSubmit = () => {
    addItem({ name, phone });
    onChangeName("");
    onChangePhone("");
    setShowModal(false);
  };

  return (
    <Modal visible={showModal} animationType="slide">
      <View style={globalStyles.container}>
        <Button title="Close" onPress={() => setShowModal(false)} />

        <Text>Form</Text>
        <TextInput
          style={globalStyles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder="Name"
          returnKeyType="next"
          onSubmitEditing={() => ref_input2.current.focus()}
        />
        <TextInput
          ref={ref_input2}
          keyboardType="numeric"
          style={globalStyles.input}
          onChangeText={onChangePhone}
          value={phone}
          placeholder="Phone"
          returnKeyType="next"
        />
      </View>
      <Button title="Submit" onPress={handleSubmit} />
    </Modal>
  );
};
