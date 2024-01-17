import { render, screen } from "@testing-library/react";
import Count from "@/components/Count";

describe("<Count />", () => {
  it("renders count", () => {
    const count = 5;
    render(<Count count={count} />);
    const countElem = screen.getByTestId("count");
    expect(countElem.textContent).toContain(`Count: ${count}`);
  });
});
