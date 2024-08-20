import Modal from "react-native-modal";
import { ThemedText } from "@/components/ThemedText";
import { Button, Platform, StyleSheet, View } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

interface ConfirmActionModal {
  isVisible: boolean;
  onConfirm: () => void;
  onDismiss: () => void;
}

export const ConfirmActionModal = ({
  isVisible,
  onConfirm,
  onDismiss,
}: ConfirmActionModal) => {
  const color = useThemeColor({}, "background");
  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      onBackdropPress={onDismiss}
    >
      <View style={[styles.content, { backgroundColor: color }]}>
        <ThemedText type={"title"}>
          Do you want to hide this box permanently?
        </ThemedText>
        <View style={styles.ctaContainer}>
          <Button color={color} title={"Yes"} onPress={onConfirm} />
          <Button color={color} title={"No"} onPress={onDismiss} />
        </View>
      </View>
    </Modal>
  );
};

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
  ctaContainer: {
    ...Platform.select({
      web: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 8,
      },
    }),
  },
  cta: {
    width: 200,
  },
});
