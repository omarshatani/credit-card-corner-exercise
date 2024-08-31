import { useThemeColor } from "@/hooks/useThemeColor";
import { renderHook } from "@testing-library/react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

jest.mock("react-native/Libraries/Utilities/useColorScheme");
const mockedUseColorScheme = jest.mocked(useColorScheme);

describe("useThemeColor", () => {
  it("should return default theme", () => {
    // When
    const { result } = renderHook(() => useThemeColor({}, "background"));
    // Then
    expect(result.current).toEqual(Colors.light.background);
  });
  describe("different color scheme", () => {
    describe("light", () => {
      it("should return custom colors passed by prop", () => {
        // Given
        mockedUseColorScheme.mockReturnValue("light");
        // When
        const { result } = renderHook(() =>
          useThemeColor({ light: "#eee", dark: "#000" }, "background"),
        );
        // Then
        expect(result.current).toEqual("#eee");

        // Given
        mockedUseColorScheme.mockReturnValue("dark");
        // When
        const { result: secondResult } = renderHook(() =>
          useThemeColor({ light: "#eee", dark: "#000" }, "background"),
        );
        // Then
        expect(secondResult.current).toEqual("#000");
      });
    });
    describe("dark", () => {
      it("should return custom colors passed by prop", () => {
        // Given
        mockedUseColorScheme.mockReturnValue("dark");
        // When
        const { result: secondResult } = renderHook(() =>
          useThemeColor({ light: "#eee", dark: "#000" }, "background"),
        );
        // Then
        expect(secondResult.current).toEqual("#000");
      });
    });
  });
});
