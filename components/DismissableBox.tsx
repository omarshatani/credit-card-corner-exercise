import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ThemedText } from "@/components/ThemedText";

interface DismissableBoxProps {
  title: string;
  onDismiss?: () => void;
}

export const DismissableBox = ({ title, onDismiss }: DismissableBoxProps) => {
  const [isVisible, setVisible] = React.useState(true);
  const dismiss = () => {
    setVisible(false);
    onDismiss && onDismiss();
  };
  return (
    <TouchableOpacity
      style={[styles.container, { display: isVisible ? "flex" : "none" }]}
    >
      <ThemedText>{title}</ThemedText>
      <TouchableOpacity onPress={dismiss} hitSlop={styles.hitSlop}>
        <Ionicons name="close" size={24} color="black" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    padding: 24,
  },
  hitSlop: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  },
});
