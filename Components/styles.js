import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    marginVertical: 50,
  },
  header: {
    backgroundColor: "#CA6702",
    padding: 10,
    paddingTop: 30,
    alignItems: "center",
  },
  headerText: {
    paddingTop: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  main: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  addButton: {
    height: 40,
    padding: 10,
    borderRadius: 10,
  },
  deleteButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  footer: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    alignItems: "center",
  },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  todoText: {
    fontSize: 20,
    textTransform: "capitalize",
  },
  todoTextDone: {
    fontSize: 20,
    textDecorationLine: "line-through",
    textTransform: "capitalize",
    color: "gray",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  switch: {
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: "#CA6702",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  todoList: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  taskListContainer: {
    flex: 1,
  },
});
