import { render, userEvent } from "@testing-library/react-native";
import { ConfirmActionModal } from "@/components/ConfirmActionModal";

describe("ConfirmActionModal", () => {
  const onConfirm = jest.fn();
  const onDismiss = jest.fn();
  const user = userEvent.setup();

  beforeAll(() => {
    jest.useFakeTimers();
  });

  describe("when visible", () => {
    it("should render", () => {
      // When
      const screen = render(
        <ConfirmActionModal
          isVisible={true}
          onConfirm={onConfirm}
          onDismiss={onDismiss}
        />,
      );
      //
      expect(screen.getByTestId("ConfirmActionModal")).toBeVisible();
      expect(screen.getByTestId("ConfirmActionModalContent")).toBeVisible();
    });
  });

  describe("when not visible", () => {
    it("should not render", () => {
      // When
      const screen = render(
        <ConfirmActionModal
          isVisible={false}
          onConfirm={onConfirm}
          onDismiss={onDismiss}
        />,
      );
      //
      expect(screen.queryByTestId("ConfirmActionModal")).not.toBeVisible();
      expect(
        screen.queryByTestId("ConfirmActionModalContent"),
      ).not.toBeVisible();
    });
  });

  describe("actions", () => {
    describe("when pressing Yes", () => {
      it("should call onConfirm", async () => {
        // When
        const screen = render(
          <ConfirmActionModal
            isVisible={true}
            onConfirm={onConfirm}
            onDismiss={onDismiss}
          />,
        );
        await user.press(
          screen.getByTestId(
            "ConfirmActionModalConfirmCtaThemedButtonPressable",
          ),
        );
        // Then
        expect(onConfirm).toHaveBeenCalled();
      });
    });
    describe("when pressing no", () => {
      it("should call onDismiss", async () => {
        // When
        const screen = render(
          <ConfirmActionModal
            isVisible={true}
            onConfirm={onConfirm}
            onDismiss={onDismiss}
          />,
        );
        await user.press(
          screen.getByTestId(
            "ConfirmActionModalDismissCtaThemedButtonPressable",
          ),
        );
        // Then
        expect(onDismiss).toHaveBeenCalled();
      });
    });
  });
});
