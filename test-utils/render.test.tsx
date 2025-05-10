import { describe, it, expect } from "vitest";
import { render } from "./render";
import { screen } from "@testing-library/react";

describe("test-utils/render", () => {
  it("should render a component wrapped with the Provider", () => {
    render(<div data-testid="test-element">Hello, World!</div>);

    const element = screen.getByTestId("test-element");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Hello, World!");
  });
});