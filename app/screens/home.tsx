import React from "react";
import { Platform, ScrollView, StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { DismissableBox } from "@/components/DismissableBox";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useLocalStore } from "@/hooks/useLocalStore";
import { LocalStorageKey } from "@/constants/LocalStorageKey";
import { ConfirmActionModal } from "@/components/ConfirmActionModal";
import { InboxMessage } from "@/api/models/InboxMessage";
import { getLatestInboxMessage } from "@/api/repository/InboxRepository";
import { CreditCard } from "@/components/CreditCard";
import { CreditCardOverlay } from "@/components/CreditCardOverlay";
import { LayoutChangeEvent } from "react-native/Libraries/Types/CoreEventTypes";
import { TransactionsList } from "@/components/TransactionsList";
import { getAllTransactions } from "@/api/repository/TransactionRepository";
import { Transaction } from "@/api/models/Transaction";
import { getCreditCardInfo } from "@/api/repository/CreditCardRepository";
import { CreditCardInfo } from "@/api/models/CreditCardInfo";
import { SplashScreen } from "expo-router";
import { useThemeColor } from "@/hooks/useThemeColor";

export const HomeScreen = () => {
  const [isBoxVisible, setIsBoxVisible] = React.useState(false);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [inboxMessage, setInboxMessage] = React.useState<InboxMessage>();
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);
  const [creditCardInfo, setCreditCardInfo] = React.useState<CreditCardInfo>();
  const [creditCardWidth, setCreditCardWidth] = React.useState(0);
  const { get, set } = useLocalStore();
  const insets = useSafeAreaInsets();
  const themeColor = useThemeColor({}, "background");

  const shouldShowBox = isBoxVisible && inboxMessage;

  React.useEffect(() => {
    (async () => {
      const shouldHideBox = await get(LocalStorageKey.MODAL_DISMISS);
      if (Boolean(shouldHideBox)) {
        hideBox();
      } else {
        showBox();
      }
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const [inboxMessage, transactions, creditCardInfo] = await Promise.all([
        getLatestInboxMessage(),
        getAllTransactions(),
        getCreditCardInfo(),
      ]);
      setTransactions(transactions);
      setInboxMessage(inboxMessage);
      setCreditCardInfo(creditCardInfo);
      // Hide SplashScreen when all calls received a result
      SplashScreen.hideAsync();
    })();
  }, []);

  const hideBoxAndModal = () => {
    hideModal();
    hideBox();
  };
  const hideBox = () => setIsBoxVisible(false);
  const hideModal = () => setIsModalVisible(false);
  const showBox = () => setIsBoxVisible(true);
  const showModal = () => setIsModalVisible(true);
  const hideBoxPermanently = () => {
    set(LocalStorageKey.MODAL_DISMISS, "true");
    hideBoxAndModal();
  };
  const onCreditCardLayout = (event: LayoutChangeEvent) => {
    const width = event.nativeEvent?.layout?.width;
    setCreditCardWidth(width);
  };

  return (
    <ThemedView
      style={[
        styles.container,
        {
          paddingTop: insets?.top || 16,
          paddingBottom: insets?.bottom || 16,
        },
      ]}
    >
      {shouldShowBox && (
        <DismissableBox title={inboxMessage.title} onDismiss={showModal} />
      )}
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        style={{
          backgroundColor: themeColor,
        }}
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
      >
        <CreditCard onLayout={onCreditCardLayout} uri={creditCardInfo?.image} />
        {!!creditCardWidth && creditCardInfo && (
          <CreditCardOverlay
            style={[
              styles.overlay,
              {
                width: creditCardWidth,
              },
            ]}
            availability={creditCardInfo.availability.amount}
            currency={creditCardInfo.availability.currency}
            expenses={creditCardInfo.expenses.amount}
            cardNumber={creditCardInfo.cardNumber}
          />
        )}
        <TransactionsList transactions={transactions} />
        <ConfirmActionModal
          isVisible={isModalVisible}
          onConfirm={hideBoxPermanently}
          onDismiss={hideBoxAndModal}
        />
      </ScrollView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  scrollViewContainer: {
    paddingHorizontal: 8,
    ...Platform.select({
      web: {
        width: "70%",
        marginHorizontal: "auto",
      },
    }),
  },
  overlay: {
    alignSelf: "center",
  },
});
