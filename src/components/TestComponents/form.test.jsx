import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Form from "./form";

describe("Form", () => {
  it("affiche un message d'erreur si le champ est vide", async () => {
    render(<Form />);
    const button = screen.getByRole("button");

    userEvent.click(button);

    const errorMessage = await screen.findByText(
      /Le champ ne peut pas être vide./i
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
