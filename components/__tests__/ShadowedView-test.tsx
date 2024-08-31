import { render } from "@testing-library/react-native";
import { ShadowedView } from "@/components/ShadowedView";

// TODO: Check if there's an easy way to mock Platform, otherwise this test will be really short :(

describe("ShadowedView", () => {
  it("should render", () => {
    // When
    const screen = render(<ShadowedView testID={"Hello"} />);
    // Then
    expect(screen.getByTestId("HelloShadowedView")).toBeVisible();
  });
});
