import { useState } from "react";
import { Alert } from "react-native";

export default function useTodos() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (!text.trim()) return;

    setTodos((prev) => [
      ...prev,
      { id: Date.now().toString(), title: text },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
    Alert.alert("ลบสำเร็จ")
  };

  return { todos, addTodo, deleteTodo };
}
