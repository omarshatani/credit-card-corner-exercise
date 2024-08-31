import { act, render, userEvent } from "@testing-library/react-native";
import { InboxMessageModal } from "@/components/InboxMessageModal";

describe("InboxMessageModal", () => {
  const user = userEvent.setup();
  const onClose = jest.fn();

  beforeAll(() => {
    jest.useFakeTimers();
  });

  describe("when visible", () => {
    it("should render", () => {
      // When
      const screen = render(
        <InboxMessageModal
          isVisible={true}
          title={aTitle}
          message={aMessage}
          date={aDate}
        />,
      );
      // Then
      expect(screen.getByTestId("InboxModal")).toBeVisible();
      expect(screen.getByTestId("InboxModalContent")).toBeVisible();
      expect(screen.getByTestId("InboxModalTitleText")).toBeVisible();
      expect(screen.getByTestId("InboxModalDateText")).toBeVisible();
      expect(screen.getByTestId("InboxModalDateText")).toHaveTextContent(
        new Date(aDate).toUTCString(),
      );
      expect(screen.getByTestId("InboxModalMessageText")).toBeVisible();
      expect(
        screen.getByTestId("InboxModalCloseCtaThemedButtonShadowedView"),
      ).toBeVisible();
    });
  });
  describe("when not visible", () => {
    it("should not render", () => {
      // When
      const screen = render(
        <InboxMessageModal
          isVisible={false}
          title={aTitle}
          message={aMessage}
          date={aDate}
        />,
      );
      // Then
      expect(screen.queryByTestId("InboxModal")).not.toBeVisible();
    });
  });
  describe("actions", () => {
    it("should close modal if close cta is pressed", async () => {
      // When
      const screen = render(
        <InboxMessageModal
          isVisible={true}
          title={aTitle}
          message={aMessage}
          date={aDate}
          onClose={onClose}
        />,
      );
      await user.press(
        screen.getByTestId("InboxModalCloseCtaThemedButtonPressable"),
      );
      // Then
      expect(onClose).toHaveBeenCalled();
    });
  });
});

const aTitle = "aTitle";
const aMessage = "aMessage";
const aDate = "2024-02-22T10:22:52.788Z";
