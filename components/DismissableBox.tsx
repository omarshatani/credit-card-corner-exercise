import React from "react";
import { Pressable, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ShadowedView } from "@/components/ShadowedView";

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
    <ShadowedView
      style={[
        styles.container,
        { display: isVisible ? "flex" : "none", borderColor: color },
      ]}
    >
      <Pressable
        style={(state) => [
          styles.content,
          {
            opacity: state.pressed ? 0.8 : 1,
          },
        ]}
      >
        <ThemedText>{title}</ThemedText>
        <TouchableOpacity onPress={dismiss} hitSlop={styles.hitSlop}>
          <Ionicons name="close" size={24} color={color} />
        </TouchableOpacity>
      </Pressable>
    </ShadowedView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 24,
    marginVertical: 16,
  },
  content: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hitSlop: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  },
});
