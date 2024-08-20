import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

interface DismissableBoxProps {
  title: string;
  onDismiss?: () => void;
}

export const DismissableBox = ({ title, onDismiss }: DismissableBoxProps) => {
  const [isVisible, setVisible] = React.useState(true);
  const color = useThemeColor({}, "text");

  const dismiss = () => {
    setVisible(false);
    onDismiss && onDismiss();
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { display: isVisible ? "flex" : "none", borderColor: color },
      ]}
    >
      <ThemedText>{title}</ThemedText>
      <TouchableOpacity onPress={dismiss} hitSlop={styles.hitSlop}>
        <Ionicons name="close" size={24} color={color} />
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
    marginVertical: 16,
  },
  hitSlop: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  },
});
