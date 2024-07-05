import React from "react";
import { View, FlatList, Switch, TouchableOpacity, Text, Alert} from "react-native";
import { style as CSS } from "./styles";

const TaskList = ({ tasks, changeTaskStatus, deleteTask }) => {
  const showAlert = (id) => {
    Alert.alert(
      "Delete Task",
      "Are you sure you want to delete this task from the list",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => deleteTask(id),
        },
      ]
    );
  };

  const renderTodoItem = ({ item }) => (
    <View style={CSS.todoItem}>
      <Text style={item.status ? CSS.todoTextDone : CSS.todoText}>
        {item.task}
      </Text>
      <View style={CSS.buttonsContainer}>
        <Switch
          value={item.status}
          onValueChange={() => changeTaskStatus(item.id)}
          style={CSS.switch}
        />
        <TouchableOpacity
          onPress={() => showAlert(item.id)}
          style={CSS.deleteButton}
        >
          <Text style={CSS.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList data={tasks} renderItem={renderTodoItem} style={CSS.todoList} />
  );
};

export default TaskList;
