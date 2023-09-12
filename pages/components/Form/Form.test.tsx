/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
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
    expect(screen.getByRole("textbox", { name: /name/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /email/i })).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
  it("Successfully updates the name field", () => {
    render(
      <Form
        onSubmitHandler={(name, email) =>
          console.log("submitted with:", name, email)
        }
      />
    );
    fireEvent.change(screen.getByRole("textbox", { name: /name/i }), {
      target: { value: "Mayra" },
    });
    // What do we check?
    expect(
      screen.getByRole<HTMLInputElement>("textbox", { name: /name/i }).value
    ).toBe("Mayra");
  });
  it("Successfully updates the email field", async () => {
    render(
      <Form
        onSubmitHandler={(name, email) =>
          console.log("submitted with:", name, email)
        }
      />
    );
    fireEvent.change(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "mayra@email.com" },
    });
    // What do we check?
    await waitFor(() => {
      expect(
        screen.getByRole<HTMLInputElement>("textbox", { name: /email/i }).value
      ).toBe("mayra@email.com");
    });
  });
  it("Successfully calls handleOnSubmit", () => {
    const mockOnSubmitHandler = jest.fn();
    render(<Form onSubmitHandler={mockOnSubmitHandler} />);
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));
    expect(mockOnSubmitHandler).toBeCalledTimes(1);
  });
  // TODO: fix test
  it("Successfully clears inputs after submit", () => {
    render(<Form onSubmitHandler={() => jest.fn} />);
    fireEvent.change(screen.getByRole("textbox", { name: /name/i }), {
      target: { value: "Mayra" },
    });
    fireEvent.change(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "mayra@email.com" },
    });
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));
    expect(
      screen.getByRole<HTMLInputElement>("textbox", { name: /name/i }).value
    ).toBe("");
    expect(
      screen.getByRole<HTMLInputElement>("textbox", { name: /email/i }).value
    ).toBe("");
  });
});
