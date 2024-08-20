import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { DismissableBox } from "@/components/DismissableBox";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useLocalStore } from "@/hooks/useLocalStore";
import { LocalStorageKey } from "@/constants/LocalStorageKey";
import { ConfirmActionModal } from "@/components/ConfirmActionModal";

export const HomeScreen = () => {
  const [isBoxVisible, setIsBoxVisible] = React.useState(false);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const { get, set } = useLocalStore();
  const insets = useSafeAreaInsets();

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

  return (
    <ThemedView
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <View style={styles.content}>
        <View>
          {isBoxVisible && (
            <DismissableBox title={"ciao"} onDismiss={showModal} />
          )}
        </View>
        <ConfirmActionModal
          isVisible={isModalVisible}
          onConfirm={hideBoxPermanently}
          onDismiss={hideBoxAndModal}
        />
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    ...Platform.select({
      web: {
        width: "70%",
        marginVertical: 0,
        marginHorizontal: "auto",
      },
    }),
  },
});
