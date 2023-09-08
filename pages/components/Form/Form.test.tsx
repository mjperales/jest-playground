/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";

describe("<Form />", () => {
  beforeAll(() => jest.clearAllMocks());
  it("Successfully renders component", () => {
    render(<Form onSubmitHandler={() => console.log("submitted")} />);
    const submitButton = screen.getByRole("button", { name: /submit/i });
    // missing name field
    // missing email field
    expect(submitButton).toBeInTheDocument();
  });
  // it("Successfully updates the name field", () => {});
  // it("Successfully updates the email field", () => {});
  // it("Successfully calls handleOnSubmit", () => {});
});
