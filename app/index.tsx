import { StyleSheet } from "react-native";
import { HomeScreen } from "@/app/screens/home";

export default function Index() {
  return <HomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
