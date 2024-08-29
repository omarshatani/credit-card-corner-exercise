import React from "react";
import { Pressable, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ShadowedView } from "@/components/ShadowedView";

interface DismissableBoxProps {
  title: string;
  onPress?: () => void;
  onDismiss?: () => void;
}

export const DismissableBox = ({
  title,
  onPress,
  onDismiss,
}: DismissableBoxProps) => {
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
        onPress={onPress}
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
    marginVertical: 16,
    borderRadius: 8,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 24,
  },
  hitSlop: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  },
});
