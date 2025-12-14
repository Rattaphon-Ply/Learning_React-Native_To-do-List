import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TodoScreen from "./screens/TodoScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <TodoScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
