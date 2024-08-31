import React from "react";
import Modal from "react-native-modal";
import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedButtonWithShadow } from "@/components/ThemedButtonWithShadow";

interface InboxMessageModalProps {
  isVisible: boolean;
  title: string;
  message: string;
  date: string;
  onClose?: () => void;
  testID?: string;
}

export const InboxMessageModal = ({
  isVisible,
  title,
  message,
  date,
  onClose,
  testID = "",
}: InboxMessageModalProps) => (
  <Modal
    isVisible={isVisible}
    style={styles.modal}
    onBackdropPress={onClose}
    testID={`${testID}InboxModal`}
  >
    <ThemedView style={styles.content} testID={`${testID}InboxModalContent`}>
      <ThemedText style={styles.title} testID={`${testID}InboxModalTitle`}>
        {title}
      </ThemedText>
      <ThemedText style={styles.date} testID={`${testID}InboxModalDate`}>
        {new Date(date).toUTCString()}
      </ThemedText>
      <ThemedText testID={`${testID}InboxModalMessage`}>{message}</ThemedText>
      <ThemedButtonWithShadow
        style={styles.cta}
        onPress={onClose}
        testID={`${testID}InboxModalCloseCta`}
      >
        Close
      </ThemedButtonWithShadow>
    </ThemedView>
  </Modal>
);

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    padding: 24,
    borderRadius: 8,
    width: "100%",
    gap: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
  },
  cta: {
    minWidth: 140,
    alignSelf: "center",
    marginVertical: 8,
  },
});
