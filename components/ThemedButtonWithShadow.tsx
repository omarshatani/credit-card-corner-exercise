import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ShadowedView } from "@/components/ShadowedView";
import { ThemedText } from "@/components/ThemedText";
import { PropsWithChildren } from "react";

interface ThemedButtonWithShadowProps {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const ThemedButtonWithShadow = ({
  style,
  children,
  onPress,
}: PropsWithChildren & ThemedButtonWithShadowProps) => (
  <ShadowedView style={[styles.container, style]}>
    <Pressable
      style={(state) => [styles.content, { opacity: state.pressed ? 0.8 : 1 }]}
      onPress={onPress}
    >
      <ThemedText>{children}</ThemedText>
    </Pressable>
  </ShadowedView>
);

const styles = StyleSheet.create({
  container: {
    minWidth: 100,
    borderRadius: 4,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
});
