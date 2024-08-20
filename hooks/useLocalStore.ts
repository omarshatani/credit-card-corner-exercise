import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LocalStorageKey } from "@/constants/LocalStorageKey";
import { Platform } from "react-native";

export const useLocalStore = () => {
  const storage = getStorage();

  const get = async (key: LocalStorageKey): Promise<string | null> => {
    if (!key) {
      return null;
    }

    return storage.getItem(key);
  };
  const set = async (key: LocalStorageKey, value: string): Promise<void> => {
    if (!key) {
      return;
    }

    storage.setItem(key, value);
  };

  return { get, set };
};

const getStorage = () => {
  if (Platform.OS === "web") {
    return AsyncStorage;
  }

  return SecureStore;
};
