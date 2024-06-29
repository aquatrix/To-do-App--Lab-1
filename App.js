import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import AddTask from "./Components/addTask";
import TaskList from "./Components/taskList";
import { style as CSS } from "./Components/styles";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [idCounter, setIdCounter] = useState(1);

  const addTask = (inputValue) => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, { id: idCounter, text: inputValue, done: false }]);
      setIdCounter(idCounter + 1);
    }
  };

  const changeTask = (id) => {
    const updatedtasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedtasks);
  };

  const deleteTask = (id) => {
    const updatedtasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedtasks);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={CSS.header}>
          <Text style={CSS.headerText}>Todo List App</Text>
        </View>

        <TaskList
          tasks={tasks}
          changeTaskStatus={changeTask}
          deleteTask={deleteTask}
        />

        <AddTask addTask={addTask} />

        <View style={styles.footer}>
          <Text>Mihir Jain : 1170003</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  footer: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    alignItems: "center",
  },
});

export default App;
