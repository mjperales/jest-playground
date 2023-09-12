/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Form";

// React Testing Library Cheatcheet: https://testing-library.com/docs/react-testing-library/cheatsheet/
// React Testing Library even types: https://github.com/testing-library/dom-testing-library/blob/main/src/event-map.js
describe("<Form />", () => {
  beforeAll(() => jest.clearAllMocks());
  it("Successfully renders component", () => {
    render(
      <Form
        onSubmitHandler={(name, email) =>
          console.log("submitted with:", name, email)
        }
      />
    );
    const submitButton = screen.getByRole("button", { name: /submit/i });
    // TODO: Find name field
    // TODO: Find email field
    expect(submitButton).toBeInTheDocument();
  });
  it("Successfully updates the name field", async () => {
    // TODO: use onChange event to update the name input
    // TODO: Assert that the value for the input did change
  });
  it("Successfully updates the email field", () => {
    // TODO: use onChange event to update the email input
    // TODO: Assert that the value for the input did change
  });
  it("Successfully calls handleOnSubmit", () => {
    // TODO: Assert that handleOnSubmit was called during submit
    // Use jest.fn(). Example in test below.
    // More docs on mocks: https://jestjs.io/docs/mock-functions
  });
  // TODO: fix test
  it("Successfully clears inputs after submit", () => {
    // Assert
    render(<Form onSubmitHandler={() => jest.fn} />);

    // Act
    // Fire change event
    fireEvent.change(screen.getByRole("textbox", { name: /name/i }), {
      target: { value: "Mayra" },
    });
    fireEvent.change(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "m.j.perales@gmail.com" },
    });
    // Fire change event
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    // Assert
    // TODO: Fix  the Form component to clear those inputs after submit
    expect(
      screen.getByRole<HTMLInputElement>("textbox", { name: /name/i }).value
    ).toBe("");
    expect(
      screen.getByRole<HTMLInputElement>("textbox", { name: /email/i }).value
    ).toBe("");
  });
});
