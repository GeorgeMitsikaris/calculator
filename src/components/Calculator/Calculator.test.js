// import { render, screen } from "@testing-library/react";
// import { userEvent } from "@testing-library/user-event";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import Calculator from "./Calculator";
import { Provider } from "react-redux";
import { store } from "../../store/store";
// import Button from "../Button/Button";

describe("Calculator component", () => {
	Enzyme.configure({ adapter: new EnzymeAdapter() });

	const setup = () => {
		return mount(
			<Provider store={store}>
				<Calculator></Calculator>
			</Provider>
		);
	};

	it("renders the Calculator component", () => {
		const wrapper = setup();
		const container = wrapper.find("[data-test='calculator-component']");
		expect(container.length).toBe(1);
	});

	it("renders the header", () => {
		const wrapper = setup();
		const header = wrapper.find("[data-test='header']");
		expect(header.length).toBe(1);
	});

	it("renders current value div", () => {
		const wrapper = setup();
		const div = wrapper.find("[data-test='current-value']");
		expect(div.length).toBe(1);
	});

	it("renders previous value div", () => {
		const wrapper = setup();
		const div = wrapper.find("[data-test='prev-value']");
		expect(div.length).toBe(1);
	});

	it("renders all the buttons", () => {
		const wrapper = setup();
		const buttons = wrapper.find("button");
		expect(buttons.length).toBe(20);
	});

	it("renders the header with text Calculator", () => {
		const wrapper = setup();
		const header = wrapper.find("[data-test='header']");
		expect(header.text()).toBe("Calculator");
	});

	it("renders current number div with initial text 0", () => {
		const wrapper = setup();
		const div = wrapper.find("[data-test='current-value']");
		expect(div.text()).toBe("0");
	});

	it("renders previous value div with initial text empty string", () => {
		const wrapper = setup();
		const div = wrapper.find("[data-test='prev-value']");
		expect(div.text()).toBe("");
	});
});

describe("redux", () => {
	const setup = () => {
		return mount(
			<Provider store={store}>
				<Calculator></Calculator>
			</Provider>
		);
	};

	let wrapper;
	// beforeEach(() => {
	// 	wrapper = setup();
	// 	const currentNumberDiv = wrapper.find("[data-test='current-value]");
	// 	const prevNumberDiv = wrapper.find("[data-test='prev-value]");
	// })

	it("shows in currentNumber div the number 1 when clicked the button with text 1", () => {
		wrapper = setup();
		const button = wrapper.find("[data-test='value-1']");
		button.simulate("click");
		const currentNumberDiv = wrapper.find("[data-test='current-value']");
		expect(currentNumberDiv.text()).toBe("1");
	});

	it("shows in currentNumber div the number 0 ans prevNumber value 1* when clicked the button with text 1 and after clicked button *", () => {
		wrapper = setup();
		const buttonOne = wrapper.find("[data-test='value-1']"); 
		const buttonMultiply = wrapper.find("[data-test='value-*']");
		const buttonClear = wrapper.find("[data-test='value-clear']");
		buttonClear.simulate("click");
		buttonOne.simulate("click");
		buttonMultiply.simulate("click");
		const currentNumberDiv = wrapper.find("[data-test='current-value']");
		const prevNumberDiv = wrapper.find("[data-test='prev-value']");
		expect(currentNumberDiv.text()).toBe("0");
		expect(prevNumberDiv.text()).toBe("1*");
	});
});
