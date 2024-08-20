import * as SecureStore from "expo-secure-store";
import { SecureStoreKey } from "@/constants/SecureStoreKey";

export const useSecureStore = () => {
  const get = async (key: SecureStoreKey): Promise<string | null> => {
    if (!(await SecureStore.isAvailableAsync())) {
      return null;
    }
    return SecureStore.getItemAsync(key);
  };
  const set = async (key: SecureStoreKey, value: string): Promise<void> => {
    if (!(await SecureStore.isAvailableAsync())) {
      return;
    }
    SecureStore.setItem(key, value);
  };

  return { get, set };
};
