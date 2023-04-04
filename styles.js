import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    marginTop: 40,
    margin: 20,
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
