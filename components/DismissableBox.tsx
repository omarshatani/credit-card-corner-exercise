import React from "react";
import { Platform, Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ShadowedView } from "@/components/ShadowedView";

interface DismissableBoxProps {
  title: string;
  isVisible: boolean;
  onPress?: () => void;
  onDismiss?: () => void;
  testID?: string;
}

export const DismissableBox = ({
  title,
  isVisible,
  onPress,
  onDismiss,
  testID = "",
}: DismissableBoxProps) => {
  const color = useThemeColor({}, "text");

  if (!isVisible) {
    return null;
  }

  return (
    <ShadowedView
      style={[styles.container, { borderColor: color }]}
      testID={`${testID}DismissableBox`}
    >
      <Pressable
        style={(state) => [
          styles.content,
          {
            opacity: state.pressed ? 0.8 : 1,
          },
        ]}
        onPress={onPress}
        testID={`${testID}DismissableBoxContent`}
      >
        <ThemedText testID={`${testID}DismissableBoxTitle`}>{title}</ThemedText>
        <Pressable
          onPress={onDismiss}
          hitSlop={styles.hitSlop}
          style={(state) => ({ opacity: state.pressed ? 0.8 : 1 })}
          testID={`${testID}DismissableBoxCloseIcon`}
        >
          <Ionicons name="close" size={24} color={color} />
        </Pressable>
      </Pressable>
    </ShadowedView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginVertical: 16,
    borderRadius: 8,
    ...Platform.select({
      web: {
        marginTop: 8,
        marginBottom: 24,
      },
    }),
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
