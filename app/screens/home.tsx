import React from "react";
import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { DismissableBox } from "@/components/DismissableBox";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSecureStore } from "@/hooks/useSecureStore";
import { SecureStoreKey } from "@/constants/SecureStoreKey";
import { ConfirmActionModal } from "@/components/ConfirmActionModal";

export const HomeScreen = () => {
  const [isBoxVisible, setIsBoxVisible] = React.useState(false);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const { get, set } = useSecureStore();
  const insets = useSafeAreaInsets();

  React.useEffect(() => {
    (async () => {
      const shouldHideBox = await get(SecureStoreKey.MODAL_DISMISS);
      if (!!shouldHideBox) {
        setIsBoxVisible(false);
      }
    })();
  }, []);

  const hideBoxAndModal = () => {
    hideModal();
    hideBox();
  };
  const hideBox = () => setIsBoxVisible(false);
  const hideModal = () => setIsModalVisible(false);
  const showModal = () => setIsModalVisible(true);
  const hideBoxPermanently = () => {
    set(SecureStoreKey.MODAL_DISMISS, "true");
    hideBoxAndModal();
  };

  return (
    <>
      <ThemedView
        style={[
          styles.container,
          { paddingTop: insets.top, paddingBottom: insets.bottom },
        ]}
      >
        {isBoxVisible && (
          <DismissableBox title={"ciao"} onDismiss={showModal} />
        )}
      </ThemedView>
      <ConfirmActionModal
        isVisible={isModalVisible}
        onConfirm={hideBoxPermanently}
        onDismiss={hideBoxAndModal}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
