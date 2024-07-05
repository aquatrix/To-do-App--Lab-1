import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import AddTask from "./Components/addTask";
import TaskList from "./Components/taskList";
import { style as CSS } from "./Components/styles";
import { app } from "./Components/config";
import { getDatabase, ref, onValue, push, update, set, remove } from "firebase/database";
const App = () => {
  const [tasks, setTasks] = useState([]);

  const db = getDatabase(app);
  const todoRef = ref(db, "TodoList");

  useEffect(() => {
    const loadData = onValue(todoRef, (snapshot) => {
      const todoData = [];
      snapshot.forEach((cshot) => {
        todoData.push({ id: cshot.key, ...cshot.val() });
      });
      setTasks(todoData);
    });
    return () => loadData();
  }, []);

  const addTask = (inputValue) => {
    if (inputValue.trim() !== "") {
      const task = {
        text: inputValue,
        status: false,
      };
      addToDB(task);
    }
  };

  async function addToDB(task) {
    const newTaskRef = push(todoRef);
    await set(newTaskRef, {
      task: task.text,
      status: task.status,
    });
  }

  const changeTask = async (id) => {
    const updateRef = ref(db, "TodoList/" + id);
    await update(updateRef, {
      status: !tasks.find((task) => task.id === id).status,
    });
  };

  const deleteTask = async (id) => {
    const deleteRef = ref(db, "TodoList/" + id);
    await remove(deleteRef);
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
