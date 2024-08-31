import React from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { getLastFourDigits } from "@/utils/getLastFourDigits";
import { ThemedView } from "@/components/ThemedView";
import { ShadowedView } from "@/components/ShadowedView";

interface CreditCardOverlayProps {
  availability: string;
  expenses: string;
  cardNumber: string;
  currency: string;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

export const CreditCardOverlay = ({
  availability,
  currency,
  expenses,
  cardNumber,
  style,
  testID = "",
}: CreditCardOverlayProps) => {
  const lastFourDigits = getLastFourDigits(cardNumber);
  return (
    <ShadowedView
      style={[styles.container, style]}
      testID={`${testID}CreditCardOverlay`}
    >
      <ThemedView
        style={styles.content}
        testID={`${testID}CreditCardOverlayContent`}
      >
        <OverlaySection
          title={"Availability"}
          amount={availability}
          currency={currency}
          testID={"Availability"}
        />
        <OverlaySection
          title="Expenses"
          amount={expenses}
          currency={currency}
          testID={"Expenses"}
        />
      </ThemedView>
      <ThemedText style={styles.text} testID={`${testID}CardNumber`}>
        **** **** **** {lastFourDigits}
      </ThemedText>
    </ShadowedView>
  );
};

const OverlaySection = ({
  title,
  amount,
  currency,
  testID = "",
}: {
  title: string;
  amount: string;
  currency: string;
  testID: string;
}) => (
  <ThemedView style={styles.section} testID={`${testID}OverlaySection`}>
    <ThemedText
      type={"defaultSemiBold"}
      testID={`${testID}OverlaySectionTitle`}
    >
      {title}
    </ThemedText>
    <ThemedText style={styles.text} testID={`${testID}OverlaySectionValue`}>
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
