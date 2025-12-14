import { View, Text, FlatList, StyleSheet } from "react-native";
import TodoInput from "../components/TodoInput";
import TodoItem from "../components/TodoItem";
import useTodos from "../hooks/useTodos";
import { theme } from "../styles/theme";

export default function TodoScreen() {
  const { todos, addTodo, deleteTodo } = useTodos();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 My To-Do</Text>

      <TodoInput onAdd={addTodo} />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem item={item} onDelete={deleteTodo} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
  },
  title: {
    fontSize: theme.fontSize.xl,
    fontWeight: "bold",
    color: theme.colors.primary,
    marginBottom: theme.spacing.md,
  },
});
