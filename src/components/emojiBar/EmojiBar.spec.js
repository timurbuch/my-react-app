import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmojiBar from "./EmojiBar";

describe("EmojiBar", () => {
  it("renders 4 buttons", () => {
    const mockOnEmojiButtonClick = jest.fn();

    render(<EmojiBar handleEmojiClick={mockOnEmojiButtonClick} />);
    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(5);
  });
  it("shows specifified emojis", () => {
    const mockOnEmojiButtonClick = jest.fn();

    render(<EmojiBar handleEmojiClick={mockOnEmojiButtonClick} />);
    const emoji1 = screen.getByText("🤓");
    const emoji2 = screen.getByText("😱");
    const emoji3 = screen.getByText("🤡");
    const emoji4 = screen.getByText("💀");
    const emoji5 = screen.getByText("🧙‍♀️");
    expect(emoji1).toBeInTheDocument();
    expect(emoji2).toBeInTheDocument();
    expect(emoji3).toBeInTheDocument();
    expect(emoji4).toBeInTheDocument();
    expect(emoji5).toBeInTheDocument();
  });
  it("calls the onClick function when a button is clicked", () => {
    const mockOnEmojiButtonClick = jest.fn();

    render(<EmojiBar handleEmojiCLick={mockOnEmojiButtonClick} />);
    const buttons = screen.getAllByRole("button");
    buttons.forEach((button) => userEvent.click(button));
    expect(mockOnEmojiButtonClick).toHaveBeenCalledTimes(5);
  });
});
