import Modal from "react-native-modal";
import { ThemedText } from "@/components/ThemedText";
import { Platform, Pressable, StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ShadowedView } from "@/components/ShadowedView";

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
  const backgroundColor = useThemeColor({}, "background");
  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      onBackdropPress={onDismiss}
    >
      <ThemedView style={[styles.content, { backgroundColor }]}>
        <ThemedText type={"subtitle"}>
          Do you want to hide this box permanently?
        </ThemedText>
        <ThemedView style={styles.ctaContainer}>
          <Pressable
            style={(state) => [{ opacity: state.pressed ? 0.8 : 1 }]}
            onPress={onConfirm}
          >
            <ShadowedView style={styles.cta}>
              <ThemedText>Yes</ThemedText>
            </ShadowedView>
          </Pressable>
          <Pressable
            style={(state) => [{ opacity: state.pressed ? 0.8 : 1 }]}
            onPress={onDismiss}
          >
            <ShadowedView style={styles.cta}>
              <ThemedText>No</ThemedText>
            </ShadowedView>
          </Pressable>
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
    backgroundColor: "white",
    padding: 24,
    borderRadius: 8,
    width: "100%",
  },
  ctaContainer: {
    marginVertical: 16,
    gap: 8,
    flexDirection: "row",
    // alignItems: "center",
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
