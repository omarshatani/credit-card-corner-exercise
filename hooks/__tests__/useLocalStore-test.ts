import * as SecureStore from "expo-secure-store";
import { renderHook } from "@testing-library/react-native";
import { useLocalStore } from "@/hooks/useLocalStore";
import { LocalStorageKey } from "@/constants/LocalStorageKey";
import AsyncStorage from "@react-native-async-storage/async-storage";

jest.mock("expo-secure-store", () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));
const mockedSecureStore = jest.mocked(SecureStore);

describe("useLocalStore", () => {
  describe("mobile", () => {
    it("get", async () => {
      // When
      const {
        result: { current },
      } = renderHook(() => useLocalStore());

      await current.get(LocalStorageKey.MODAL_DISMISS);

      // Then
      expect(mockedSecureStore.getItem).toHaveBeenCalledWith(
        LocalStorageKey.MODAL_DISMISS,
      );
    });
    it("set", async () => {
      // When
      const {
        result: { current },
      } = renderHook(() => useLocalStore());

      await current.set(LocalStorageKey.MODAL_DISMISS, "true");

      // Then
      expect(mockedSecureStore.setItem).toHaveBeenCalledWith(
        LocalStorageKey.MODAL_DISMISS,
        "true",
      );
    });
  });
  // TODO: Couldn't find a way to properly mock Platform unfortunately :(
  describe.skip("web", () => {
    jest.mock("react-native/Libraries/Utilities/Platform", () => ({
      ...jest.requireActual("react-native/Libraries/Utilities/Platform"),
      __esModule: true,
      OS: "android",
    }));

    it.skip("get", async () => {
      // When
      const {
        result: { current },
      } = renderHook(() => useLocalStore());

      await current.get(LocalStorageKey.MODAL_DISMISS);

      // Then
      expect(AsyncStorage.getItem).toHaveBeenCalledWith(
        LocalStorageKey.MODAL_DISMISS,
      );
    });
    it.skip("set", async () => {
      // When
      const {
        result: { current },
      } = renderHook(() => useLocalStore());

      await current.set(LocalStorageKey.MODAL_DISMISS, "true");

      // Then
      expect(AsyncStorage.setItem).toHaveBeenCalledWith(
        LocalStorageKey.MODAL_DISMISS,
        "true",
      );
    });
  });
});
