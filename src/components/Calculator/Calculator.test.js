import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Calculator from "./Calculator";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import Button from "../Button/Button";

describe("Calculator component", () => {
  const setup = () => {
		render(
			<Provider store={store}>
        <Calculator>
          <Button payload={"1"}></Button>
        </Calculator>
			</Provider>
		);
	};

	it("renders the header", () => {
		setup();
		const header = screen.queryByRole("heading", { name: "Calculator" });
		expect(header).toBeInTheDocument();
	});

	it("renders all the buttons", () => {
		setup();
		const buttons = screen.queryAllByRole("button");
		expect(buttons.length).toBe(20);
  });
  
  it("renders current value div", () => {
		setup();
		const div = screen.getByTestId("current-value");
		expect(div).toBeInTheDocument(); 
	});
  
  it("renders previous value div", () => {
		setup();
		const div = screen.getByTestId("prev-value");
		expect(div).toBeInTheDocument();
	});
});
