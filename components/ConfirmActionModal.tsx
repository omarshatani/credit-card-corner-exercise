import Modal from "react-native-modal";
import { ThemedText } from "@/components/ThemedText";
import { Button, StyleSheet, View } from "react-native";

interface ConfirmActionModal {
  isVisible: boolean;
  onConfirm: () => void;
  onDismiss: () => void;
}

export const ConfirmActionModal = ({
  isVisible,
  onConfirm,
  onDismiss,
}: ConfirmActionModal) => (
  <Modal isVisible={isVisible} style={styles.modal} onBackdropPress={onDismiss}>
    <View style={styles.content}>
      <ThemedText>Do you want to hide this box permanently?</ThemedText>
      <Button title={"Yes"} onPress={onConfirm} />
      <Button title={"No"} onPress={onDismiss} />
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "white",
    padding: 24,
    borderRadius: 8,
    width: "100%",
  },
});
