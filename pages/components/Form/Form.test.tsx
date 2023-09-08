/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import Form from "./Form";

describe("<Form />", () => {
  it("Successfully renders component", () => {
    render(<Form />);
  });
});
