import { render } from "@testing-library/react-native";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";

jest.mock("react-native/Libraries/Utilities/useColorScheme");
const mockedUseColorScheme = jest.mocked(useColorScheme);

describe("ThemedView", () => {
  it("should render", () => {
    // When
    const screen = render(<ThemedView testID={"Hello"} />);
    // Then
    expect(screen.getByTestId("Hello")).toBeVisible();
  });

  describe("different color scheme", () => {
    describe("light", () => {
      it("should render correct background color", () => {
        // Given
        mockedUseColorScheme.mockReturnValue("light");
        // When
        const screen = render(
          <ThemedView
            testID={"Hello"}
            lightColor={"#fff"}
            darkColor={"#000"}
          />,
        );
        // Then
        expect(screen.getByTestId("Hello")).toHaveStyle({
          backgroundColor: "#fff",
        });
      });
    });
    describe("light", () => {
      it("should render correct background color", () => {
        // Given
        mockedUseColorScheme.mockReturnValue("dark");
        // When
        const screen = render(
          <ThemedView
            testID={"Hello"}
            lightColor={"#fff"}
            darkColor={"#000"}
          />,
        );
        // Then
        expect(screen.getByTestId("Hello")).toHaveStyle({
          backgroundColor: "#000",
        });
      });
    });
  });
});
