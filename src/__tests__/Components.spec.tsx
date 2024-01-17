import { fireEvent, render, screen } from "@testing-library/react";
import Button from "@/components/Button";

describe("Common Components", () => {
  describe("<Button />", () => {
    it("renders label correctly", () => {
      const label = "Click";
      const onClickMock = jest.fn();
      render(<Button label={label} onClick={onClickMock} />);
      const btnElem = screen.getByText(label);
      expect(btnElem.textContent).toEqual(label);
    });

    test("calls onClick when clicked", () => {
      const testId = "btn";
      const label = "Click";
      const onClickMock = jest.fn();
      render(<Button label={label} onClick={onClickMock} />);
      const btnElem = screen.getByTestId(testId);
      fireEvent.click(btnElem);
      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
  });
});
