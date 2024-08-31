import { ThemedView, ThemedViewProps } from "@/components/ThemedView";
import { StyleSheet } from "react-native";
import { Shadows } from "@/constants/Shadows";
import { PropsWithChildren } from "react";

export const ShadowedView = ({
  children,
  style,
  testID = "",
  ...props
}: PropsWithChildren & ThemedViewProps) => (
  <ThemedView
    {...props}
    style={[styles.shadow, style]}
    testID={`${testID}ShadowedView`}
  >
    {children}
  </ThemedView>
);

const styles = StyleSheet.create({
  shadow: {
    ...Shadows,
  },
});
