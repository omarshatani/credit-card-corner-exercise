import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { getLastFourDigits } from "@/utils/getLastFourDigits";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ShadowedView } from "@/components/ShadowedView";

interface CreditCardOverlayProps {
  availability: string;
  expenses: string;
  cardNumber: string;
  style?: StyleProp<ViewStyle>;
}

export const CreditCardOverlay = ({
  availability,
  expenses,
  cardNumber,
  style,
}: CreditCardOverlayProps) => {
  const lastFourDigits = getLastFourDigits(cardNumber);
  return (
    <ShadowedView style={[styles.container, style]}>
      <ThemedView style={styles.content}>
        <ThemedView style={styles.section}>
          <ThemedText>Availability</ThemedText>
          <ThemedText style={styles.text}>{availability}</ThemedText>
        </ThemedView>
        <ThemedView style={styles.section}>
          <ThemedText>Expenses</ThemedText>
          <ThemedText style={styles.text}>{expenses}</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedText style={styles.text}>
        **** **** **** {lastFourDigits}
      </ThemedText>
    </ShadowedView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  content: {
    width: "100%",
    flexDirection: "row",
    padding: 8,
  },
  section: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});
