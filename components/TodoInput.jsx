import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    onAdd(text);
    setText("");
  };
  return (
    <View style={styles.row}>
      <TextInput
        style={styles.input}
        placeholder="เพิ่มงาน..."
        value={text}
        onChangeText={setText}
      />
      <Button title="เพิ่ม" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});
