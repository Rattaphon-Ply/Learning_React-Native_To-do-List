import { TouchableOpacity, Text, StyleSheet } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function todoItem({ item, onDelete }) {
  return (
    <TouchableOpacity style={styles.item} onPress={() => onDelete(item.id)}>
      <Text>{item.title}</Text>
      <MaterialCommunityIcons name="delete" size={24} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: "#e0f2f1",
    borderRadius: 6,
    marginBottom: 10,
    justifyContent:"space-between",
    flexDirection:"row",
  },
});
