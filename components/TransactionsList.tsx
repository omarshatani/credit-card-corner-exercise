import React from "react";
import { Button, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { Transaction } from "@/api/models/Transaction";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { ShadowedView } from "@/components/ShadowedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useColorScheme } from "@/hooks/useColorScheme";

interface TransactionsListProps {
  transactions: Transaction[];
  testID?: string;
}

export const TransactionsList = ({
  transactions = [],
  testID = "",
}: TransactionsListProps) => {
  const [showAll, setShowAll] = React.useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  if (!transactions.length) {
    return null;
  }

  return (
    <ThemedView style={styles.container} testID={testID}>
      <ThemedView style={styles.showAll}>
        <Button
          title={showAll ? "Show less" : "Show all"}
          onPress={handleShowAll}
          testID={`${testID}${showAll ? "ShowLessCta" : "ShowAllCta"}`}
        />
      </ThemedView>
      {transactions
        .map((transaction, index) => (
          <TransactionItem
            {...transaction}
            key={transaction.id}
            testID={`#${index}TransactionCard`}
          />
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
  testID = "",
}: Transaction & { testID?: string }) => {
  const colorScheme = useColorScheme() ?? "light";
  const getStatusColor = () => {
    switch (status) {
      case "PENDING":
        return Colors[colorScheme].warning;
      case "SETTLED":
        return Colors[colorScheme].success;
    }
  };
  return (
    <ShadowedView
      style={styles.itemContainer}
      testID={testID}
      darkColor={"#808080"}
    >
      <ThemedView style={styles.row} darkColor={"#808080"}>
        <ThemedText testID={`${testID}Merchant`}>{merchant}</ThemedText>
        <ThemedText testID={`${testID}AmountAndCurrency`}>
          {amount} {currency}
        </ThemedText>
      </ThemedView>
      <Separator />
      <ThemedView style={styles.row} darkColor={"#808080"}>
        <ThemedText testID={`${testID}LocationAndDate`}>
          {location}, {date}
        </ThemedText>
        <ThemedText
          style={[
            styles.status,
            {
              backgroundColor: getStatusColor(),
            },
          ]}
          testID={`${testID}Status`}
        >
          {status}
        </ThemedText>
      </ThemedView>
    </ShadowedView>
  );
};

const Separator = () => {
  const backgroundColor = useThemeColor(
    { light: Colors["dark"].background, dark: Colors["light"].background },
    "background",
  );

  return (
    <ThemedView
      style={[
        styles.separator,
        {
          backgroundColor,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
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
    marginVertical: 8,
    height: 1,
    opacity: 0.1,
  },
  status: {
    fontWeight: "bold",
    paddingHorizontal: 8,
    color: Colors.dark.tint,
  },
});
