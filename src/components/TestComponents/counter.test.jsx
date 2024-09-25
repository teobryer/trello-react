import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Counter from "./counter";

describe("Counter", () => {
  it("incrémente le compteur au clic", () => {
    render(<Counter />);
    const button = screen.getByRole("button", { name: "Incrémenter" });

    fireEvent.click(button);
    const countElement = screen.getByText("Compteur : 1");
    expect(countElement).toBeInTheDocument();
  });
});
