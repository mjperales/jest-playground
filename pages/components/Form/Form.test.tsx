/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Form";

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
    // missing name field
    // missing email field
    expect(submitButton).toBeInTheDocument();
  });
  it("Successfully updates the name field", async () => {});
  it("Successfully updates the email field", () => {});
  it("Successfully calls handleOnSubmit", () => {
    // use jest.fn(). Example: line 48
  });
  // TODO: fix test
  it("Successfully clears inputs after submit", () => {
    render(<Form onSubmitHandler={() => jest.fn} />);
    fireEvent.change(screen.getByRole("textbox", { name: /name/i }), {
      target: { value: "Mayra" },
    });
    fireEvent.change(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "m.j.perales@gmail.com" },
    });
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));
    expect(screen.getByRole("textbox", { name: /name/i }).value).toBe("");
    expect(screen.getByRole("textbox", { name: /email/i }).value).toBe("");
  });
});
