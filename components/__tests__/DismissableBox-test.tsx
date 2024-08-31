import { render, userEvent } from "@testing-library/react-native";
import { DismissableBox } from "@/components/DismissableBox";

describe("DismissableBox", () => {
  const user = userEvent.setup();
  const onPress = jest.fn();
  const onDismiss = jest.fn();

  beforeAll(() => {
    jest.useFakeTimers();
  });

  describe("when visible", () => {
    it("should render", () => {
      // When
      const screen = render(
        <DismissableBox title={"aTitle"} isVisible={true} />,
      );
      // Then
      screen.debug();
      expect(screen.getByTestId("DismissableBoxShadowedView")).toBeVisible();
      expect(screen.getByTestId("DismissableBoxContent")).toBeVisible();
      expect(screen.getByTestId("DismissableBoxTitleText")).toBeVisible();
      expect(screen.getByTestId("DismissableBoxCloseIcon")).toBeVisible();
    });
  });
  describe("when not visible", () => {
    it("should not render", () => {
      // When
      const screen = render(
        <DismissableBox title={"aTitle"} isVisible={false} />,
      );
      // Then
      expect(
        screen.queryByTestId("DismissableBoxShadowedView"),
      ).not.toBeVisible();
    });
  });
  describe("actions", () => {
    it("it should call onClose callback when close icon is pressed", async () => {
      // When
      const screen = render(
        <DismissableBox
          title={"aTitle"}
          isVisible={true}
          onDismiss={onDismiss}
        />,
      );
      await user.press(screen.getByTestId("DismissableBoxCloseIcon"));
      // Then
      expect(onDismiss).toHaveBeenCalled();
    });
    it("it should call onPress callback when pressing the box", async () => {
      // When
      const screen = render(
        <DismissableBox title={"aTitle"} isVisible={true} onPress={onPress} />,
      );
      await user.press(screen.getByTestId("DismissableBoxContent"));
      // Then
      expect(onPress).toHaveBeenCalled();
    });
  });
});
