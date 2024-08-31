import { render, userEvent } from "@testing-library/react-native";
import { ThemedButtonWithShadow } from "@/components/ThemedButtonWithShadow";

describe("ThemedButtonWithShadow", () => {
  const onPress = jest.fn();

  it("should render", () => {
    // When
    const screen = render(<ThemedButtonWithShadow testID={"Hello"} />);
    // Then
    expect(screen.getByTestId("HelloThemedButtonShadowedView")).toBeVisible();
    expect(screen.getByTestId("HelloThemedButtonPressable")).toBeVisible();
  });

  it("should call onPress if pressed", async () => {
    // Given
    jest.useFakeTimers();
    const user = userEvent.setup();
    // When
    const screen = render(
      <ThemedButtonWithShadow testID={"Hello"} onPress={onPress} />,
    );
    await user.longPress(screen.getByTestId("HelloThemedButtonPressable"));
    // Then
    expect(onPress).toHaveBeenCalled();
  });
});
