import * as React from "react";
import { ThemedText } from "../ThemedText";
import { render } from "@testing-library/react-native";

describe("ThemedText", () => {
  it("should render", () => {
    const screen = render(<ThemedText testID={"Hello"}>Hello</ThemedText>);

    expect(screen.getByTestId("HelloText")).toBeVisible();
    expect(screen.getByTestId("HelloText")).toHaveStyle({
      color: "#11181C",
      fontSize: 16,
      lineHeight: 24,
    });
  });

  it("should change color if passed by prop", () => {
    const screen = render(
      <ThemedText testID={"Hello"} lightColor={"#fff"}>
        Hello
      </ThemedText>,
    );

    expect(screen.getByTestId("HelloText")).toBeVisible();
    expect(screen.getByTestId("HelloText")).toHaveStyle({
      color: "#fff",
      fontSize: 16,
      lineHeight: 24,
    });
  });

  describe("types", () => {
    const styles = {
      default: {
        fontSize: 16,
        lineHeight: 24,
      },
      defaultSemiBold: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "600",
      },
      title: {
        fontSize: 32,
        fontWeight: "bold",
        lineHeight: 32,
      },
      subtitle: {
        fontSize: 20,
        fontWeight: "bold",
      },
      link: {
        lineHeight: 30,
        fontSize: 16,
        color: "#0a7ea4",
      },
    };

    it.each([
      ["defaultSemiBold", styles.defaultSemiBold],
      ["title", styles.title],
      ["subtitle", styles.subtitle],
      ["link", styles.link],
    ])(
      "renders the correct style for %s",
      (type: any, style: Record<string, string | number>) => {
        const screen = render(
          <ThemedText testID={"Hello"} type={type}>
            Hello
          </ThemedText>,
        );

        expect(screen.getByTestId("HelloText")).toHaveStyle(style);
      },
    );
  });
});
