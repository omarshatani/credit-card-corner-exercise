import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, ViewProps } from "react-native";
import { Shadows } from "@/constants/Shadows";
import { PropsWithChildren } from "react";

export const ShadowedView = ({
  children,
  style,
  testID = "",
  ...props
}: PropsWithChildren & ViewProps) => (
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
