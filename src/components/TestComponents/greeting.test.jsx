import { render, screen } from "@testing-library/react";
import React from "react";
import Greeting from "./greeting";

describe("Greeting", () => {
  it("affiche le message de bienvenue correct", () => {
    render(<Greeting name="John Doe" />);
    const greetingElement = screen.getByText(/John Doe/i);
    expect(greetingElement).toBeInTheDocument();
  });
});
