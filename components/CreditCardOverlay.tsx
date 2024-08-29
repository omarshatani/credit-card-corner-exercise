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
  currency: string;
  style?: StyleProp<ViewStyle>;
}

export const CreditCardOverlay = ({
  availability,
  currency,
  expenses,
  cardNumber,
  style,
}: CreditCardOverlayProps) => {
  const lastFourDigits = getLastFourDigits(cardNumber);
  return (
    <ShadowedView style={[styles.container, style]}>
      <ThemedView style={styles.content}>
        <OverlaySection
          title={"Availability"}
          amount={availability}
          currency={currency}
        />
        <OverlaySection
          title="Expenses"
          amount={expenses}
          currency={currency}
        />
      </ThemedView>
      <ThemedText style={styles.text}>
        **** **** **** {lastFourDigits}
      </ThemedText>
    </ShadowedView>
  );
};

const OverlaySection = ({
  title,
  amount,
  currency,
}: {
  title: string;
  amount: string;
  currency: string;
}) => (
  <ThemedView style={styles.section}>
    <ThemedText type={"defaultSemiBold"}>{title}</ThemedText>
    <ThemedText style={styles.text}>
      {amount} {currency}
    </ThemedText>
  </ThemedView>
);

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
