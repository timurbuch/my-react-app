import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "./Card";
describe("Card", () => {
  const name = "TestName";
  const house = "Testhouse";
  const key = "1";
  const img = "";
  const gender = "male";
  const dateOfBirth = "test";
  const patronus = "test";
  const favorites = [];
  const favoriteHandler = jest.fn();
  const setShowDetails = jest.fn();
  it("renders", () => {
    render(
      <Card
        key={key}
        name={name}
        img={img}
        gender={gender}
        dateOfBirth={dateOfBirth}
        house={house}
        patronus={patronus}
        favorites={favorites}
        favoriteHandler={favoriteHandler}
      />
    );
    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
  });
  it("has button with onClick function", () => {
    render(
      <Card
        key={key}
        name={name}
        img={img}
        gender={gender}
        dateOfBirth={dateOfBirth}
        house={house}
        patronus={patronus}
        favorites={favorites}
        favoriteHandler={favoriteHandler}
      />
    );

    const favoriteButton = screen.getByText("Favor");

    userEvent.click(favoriteButton);

    expect(favoriteHandler).toHaveBeenCalled();
  });
  it("has a button to toggle details", () => {
    render(
      <Card
        key={key}
        name={name}
        img={img}
        gender={gender}
        dateOfBirth={dateOfBirth}
        house={house}
        patronus={patronus}
        favorites={favorites}
        favoriteHandler={favoriteHandler}
      />
    );
    const detailButton = screen.getByRole("switch");

    userEvent.click(detailButton);
    expect(detailButton).toHaveTextContent("Show less");

    userEvent.click(detailButton);
    expect(detailButton).toHaveTextContent("Show more");
  });
});
