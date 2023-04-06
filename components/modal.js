import React from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { globalStyles } from "../styles";
import { AntDesign } from "@expo/vector-icons";
import Button from "./Button";

export const FormModal = ({ showModal, closeModal, addItem, edit, item }) => {
  const ref_input2 = React.useRef();
  const [name, onChangeName] = React.useState("");
  const [phone, onChangePhone] = React.useState("");

  React.useEffect(() => {
    if (item) {
      onChangeName(item.name);
      onChangePhone(item.phone);
    }
  }, [item]);

  const resetForm = () => {
    onChangeName("");
    onChangePhone("");
  };

  const handleClose = () => {
    resetForm();
    closeModal();
  };

  const handleSubmit = () => {
    addItem({ name, phone });
    resetForm();
    closeModal();
  };

  const handleEdit = () => {
    edit({ name, phone, id: item.id });
  };

  return (
    <Modal visible={showModal} animationType="slide">
      <View style={{ marginTop: 80 }}>
        <TouchableOpacity
          onPress={handleClose}
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <AntDesign name="closecircle" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ textAlign: "center", margin: 10 }}>Contact Info</Text>
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
      {item ? (
        <Button onPress={handleEdit}>Save</Button>
      ) : (
        <Button onPress={handleSubmit} backgroundColor="#b1b1b1">
          Submit
        </Button>
      )}
    </Modal>
  );
};
