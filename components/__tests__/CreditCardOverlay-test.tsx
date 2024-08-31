import { render } from "@testing-library/react-native";
import { CreditCardOverlay } from "@/components/CreditCardOverlay";

describe("CreditCardOverlay", () => {
  it("should render", () => {
    // When
    const screen = render(
      <CreditCardOverlay
        availability={"100"}
        expenses={"50"}
        cardNumber={"123412341234"}
        currency={"CHF"}
      />,
    );
    // Then
    expect(screen.getByTestId("CreditCardOverlayShadowedView")).toBeVisible();
    // Availability
    expect(screen.getByTestId("AvailabilityOverlaySection")).toBeVisible();
    expect(
      screen.getByTestId("AvailabilityOverlaySectionTitleText"),
    ).toBeVisible();
    expect(
      screen.getByTestId("AvailabilityOverlaySectionTitleText"),
    ).toHaveTextContent("Availability");
    expect(
      screen.getByTestId("AvailabilityOverlaySectionValueText"),
    ).toBeVisible();
    expect(
      screen.getByTestId("AvailabilityOverlaySectionValueText"),
    ).toHaveTextContent("100 CHF");
    // Expenses
    expect(screen.getByTestId("ExpensesOverlaySection")).toBeVisible();
    expect(screen.getByTestId("ExpensesOverlaySectionTitleText")).toBeVisible();
    expect(
      screen.getByTestId("ExpensesOverlaySectionTitleText"),
    ).toHaveTextContent("Expenses");
    expect(screen.getByTestId("ExpensesOverlaySectionValueText")).toBeVisible();
    expect(
      screen.getByTestId("ExpensesOverlaySectionValueText"),
    ).toHaveTextContent("50 CHF");
    // Card number
    expect(screen.getByTestId("CardNumberText")).toBeVisible();
    expect(screen.getByTestId("CardNumberText")).toHaveTextContent(
      "**** **** **** 1234",
    );
  });
});
