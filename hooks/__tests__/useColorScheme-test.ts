import { renderHook } from "@testing-library/react-native";
import { useColorScheme as reactNativeUseColorScheme } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";

jest.mock("react-native/Libraries/Utilities/useColorScheme");
const mockedUseColorScheme = jest.mocked(reactNativeUseColorScheme);

describe("useColorScheme", () => {
  it("should return correct color scheme", () => {
    // Given
    mockedUseColorScheme.mockReturnValue("light");
    // When
    const { result } = renderHook(() => useColorScheme());
    // Then
    expect(result.current).toEqual("light");
  });
});
