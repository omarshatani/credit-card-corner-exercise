import Modal from "react-native-modal";
import { ThemedText } from "@/components/ThemedText";
import { Platform, StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedButtonWithShadow } from "@/components/ThemedButtonWithShadow";

interface ConfirmActionModalProps {
  isVisible: boolean;
  onConfirm: () => void;
  onDismiss: () => void;
  testID?: string;
}

export const ConfirmActionModal = ({
  isVisible,
  onConfirm,
  onDismiss,
  testID = "",
}: ConfirmActionModalProps) => {
  const backgroundColor = useThemeColor({}, "background");
  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      onBackdropPress={onDismiss}
      testID={`${testID}ConfirmActionModal`}
    >
      <ThemedView
        style={[styles.content, { backgroundColor }]}
        testID={`${testID}ConfirmActionModalContent`}
      >
        <ThemedText type={"subtitle"}>
          Do you want to hide this box permanently?
        </ThemedText>
        <ThemedView style={styles.ctaContainer}>
          <ThemedButtonWithShadow
            onPress={onConfirm}
            testID={`${testID}ConfirmActionModalConfirmCta`}
          >
            Yes
          </ThemedButtonWithShadow>
          <ThemedButtonWithShadow
            onPress={onDismiss}
            testID={`${testID}ConfirmActionModalDismissCta`}
          >
            No
          </ThemedButtonWithShadow>
        </ThemedView>
      </ThemedView>
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
    padding: 24,
    borderRadius: 8,
    width: "100%",
  },
  ctaContainer: {
    marginVertical: 16,
    gap: 8,
    flexDirection: "row",
    justifyContent: "center",
    ...Platform.select({
      web: {
        marginVertical: 8,
      },
    }),
  },
  cta: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
