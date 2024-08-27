import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, ViewProps } from "react-native";
import { Shadows } from "@/constants/Shadows";

export const ShadowedView = ({ style, ...props }: ViewProps) => (
  <ThemedView style={[styles.shadow, style]} {...props} />
);

const styles = StyleSheet.create({
  shadow: {
    ...Shadows,
  },
});
