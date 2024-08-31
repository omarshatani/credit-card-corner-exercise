import { render } from "@testing-library/react-native";
import { CreditCard } from "@/components/CreditCard";

describe("CreditCard", () => {
  it("should render", () => {
    const screen = render(<CreditCard uri={"aUri"} />);

    expect(screen.getByTestId("CreditCardShadowedView")).toBeVisible();
    expect(screen.getByTestId("CreditCardShadowedView")).toHaveStyle({
      height: 200,
      width: 350,
    });
    expect(screen.getByTestId("CreditCardImage")).toBeVisible();
  });

  it("should not render if no uri", () => {
    const screen = render(<CreditCard />);

    expect(screen.queryByTestId("CreditCard")).not.toBeVisible();
    expect(screen.queryByTestId("CreditCardImage")).not.toBeVisible();
  });
});
