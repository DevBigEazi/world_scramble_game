import '@testing-library/jest-dom';

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { vi } from "vitest";
import * as utils from "./utils/utils";

vi.mock("./utils/utils.js", () => ({
  ...vi.importActual("./utils/"),
  getRandomWord: vi.fn(),
  scrambleWord: vi.fn(),
}));

describe("Scrambled Word Game", () => {
  beforeEach(() => {
    utils.getRandomWord.mockReturnValue("react");
    utils.scrambleWord.mockReturnValue("caret");
  });

  test("renders scrambled word and handles correct guess", () => {
    render(<App />);

    // Check if scrambled word is displayed
    expect(screen.getByText("caret")).toBeInTheDocument();

    // Enter correct guess
    const input = screen.getByPlaceholderText("Your guess");
    fireEvent.change(input, { target: { value: "react" } });

    // Submit guess
    const button = screen.getByText("Submit");
    fireEvent.click(button);

    // Verify feedback
    expect(screen.getByText("Correct! 🎉")).toBeInTheDocument();
  });

  test("renders feedback on incorrect guess", () => {
    render(<App />);

    // Enter incorrect guess
    const input = screen.getByPlaceholderText("Your guess");
    fireEvent.change(input, { target: { value: "wrong" } });

    // Submit guess
    const button = screen.getByText("Submit");
    fireEvent.click(button);

    // Verify feedback
    expect(screen.getByText("Try again! ❌")).toBeInTheDocument();
  });
});
