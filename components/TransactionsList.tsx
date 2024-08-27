import React from "react";
import { Button, StyleSheet } from "react-native";
import { Transaction } from "@/api/models/Transaction";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { ShadowedView } from "@/components/ShadowedView";

interface TransactionsListProps {
  transactions: Transaction[];
}

export const TransactionsList = ({
  transactions = [],
}: TransactionsListProps) => {
  const [showAll, setShowAll] = React.useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.showAll}>
        <Button
          title={showAll ? "Show less" : "Show all"}
          onPress={handleShowAll}
        />
      </ThemedView>
      {transactions
        .map((transaction) => (
          <TransactionItem key={transaction.id} {...transaction} />
        ))
        .filter((_, index) => (showAll ? true : index < 3))}
    </ThemedView>
  );
};

const TransactionItem = ({
  merchant,
  amount,
  currency,
  date,
  location,
  status,
}: Transaction) => (
  <ShadowedView style={styles.itemContainer}>
    <ThemedView style={styles.row}>
      <ThemedText>{merchant}</ThemedText>
      <ThemedText>
        {amount} {currency}
      </ThemedText>
    </ThemedView>
    <Separator />
    <ThemedView style={styles.row}>
      <ThemedText>
        {location}, {date}
      </ThemedText>
      <ThemedText>{status}</ThemedText>
    </ThemedView>
  </ShadowedView>
);

const Separator = () => <ThemedView style={styles.separator} />;

const styles = StyleSheet.create({
  container: {
    marginBottom: 4,
  },
  showAll: {
    width: 100,
    marginVertical: 8,
  },
  itemContainer: {
    padding: 12,
    marginBottom: 8,
    borderRadius: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  separator: {
    width: "100%",
    marginVertical: 4,
    backgroundColor: Colors.dark.background,
    height: 1,
    opacity: 0.1,
  },
});
