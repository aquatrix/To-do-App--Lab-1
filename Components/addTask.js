import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { style as CSS } from "./styles";

const AddTask = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  const inputChange = (text) => {
    setInputValue(text);
    setIsInputEmpty(text.trim() === "");
  };

  const additem = () => {
    addTask(inputValue);
    setInputValue("");
    setIsInputEmpty(true);
  };

  return (
    <View style={CSS.container}>
      <View style={CSS.main}>
        <View style={CSS.inputContainer}>
          <TextInput
            style={CSS.input}
            value={inputValue}
            onChangeText={inputChange}
            placeholder="Enter task to complete.."
          />

          <TouchableOpacity
            onPress={additem}
            style={[
              CSS.addButton,
              { backgroundColor: isInputEmpty ? "#CCCCCC" : "#CA6702" },
            ]}
            disabled={isInputEmpty}
          >
            <Text style={CSS.deleteButtonText}>Add Task</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddTask;
