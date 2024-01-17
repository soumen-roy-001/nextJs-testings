import { render, screen, fireEvent } from "@testing-library/react";
import Home from "@/app/page";

describe("<Home />", () => {
  it("renders initial count as 0", () => {
    render(<Home />); // ARRANGE
    const countElem = screen.getByTestId("count"); // ACTION
    expect(countElem.textContent).toContain("Count: 0"); // ASSERTION
  });
  it("increment count by 1 when 'Increment' button clicked", () => {
    render(<Home />);
    const incrementBtn = screen.getByText("Increment");
    const countElem = screen.getByTestId("count");
    fireEvent.click(incrementBtn);
    expect(countElem.textContent).toContain("Count: 1");
  });
  it("decrement count by 1 when 'Decrement' button clicked", () => {
    render(<Home />);
    const decrementBtn = screen.getByText("Decrement");
    const countElem = screen.getByTestId("count");
    fireEvent.click(decrementBtn);
    expect(countElem.textContent).toContain("Count: -1");
  });
  it("reset count to 0 when 'Reset' button clicked", () => {
    render(<Home />);
    const incrementBtn = screen.getByText("Increment");
    const resetBtn = screen.getByText("Reset");
    const countElem = screen.getByTestId("count");
    fireEvent.click(incrementBtn);
    fireEvent.click(resetBtn);
    expect(countElem.textContent).toContain("Count: 0");
  });
});
