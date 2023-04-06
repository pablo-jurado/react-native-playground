import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    padding: 10,
  },
  list: {
    margin: 5,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    padding: 5,
    elevation: 5,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    padding: 10,
  },
});
