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

describe("User interactions", () => {
	const setup = () => {
		return mount(
			<Provider store={store}>
				<Calculator></Calculator>
			</Provider>
		);
	};

	let wrapper;
	beforeEach(() => {
		wrapper = setup();
		const buttonClear = wrapper.find("[data-test='value-clear']");
		buttonClear.simulate("click");
	})

	it("shows in currentNumber div the number 1 when clicked the button with text 1", () => {
		wrapper = setup();
		const button = wrapper.find("[data-test='value-1']");
		button.simulate("click");
		const currentNumberDiv = wrapper.find("[data-test='current-value']");
		expect(currentNumberDiv.text()).toBe("1");
	});

	it("after clicking the buttons 1 and * it shows in currentNumber div the text 0 and in prevNumber the text 1*", () => {
		wrapper = setup();
		const buttonOne = wrapper.find("[data-test='value-1']");
		const buttonMultiply = wrapper.find("[data-test='value-*']");
		buttonOne.simulate("click");
		buttonMultiply.simulate("click");
		const currentNumberDiv = wrapper.find("[data-test='current-value']");
		const prevNumberDiv = wrapper.find("[data-test='prev-value']");
		expect(currentNumberDiv.text()).toBe("0");
		expect(prevNumberDiv.text()).toBe("1*");
	});

	it("(2 * 4) displays in currentNumber div the text 4 and in prevNumber the text 2*", () => {
		wrapper = setup();
		const buttonTwo = wrapper.find("[data-test='value-2']");
		const buttonMultiply = wrapper.find("[data-test='value-*']");
		const buttonFour = wrapper.find("[data-test='value-4']");
		buttonTwo.simulate("click");
		buttonMultiply.simulate("click");
		buttonFour.simulate("click");
		const currentNumberDiv = wrapper.find("[data-test='current-value']");
		const prevNumberDiv = wrapper.find("[data-test='prev-value']");
		expect(currentNumberDiv.text()).toBe("4"); 
		expect(prevNumberDiv.text()).toBe("2*"); 
	});

	it("(2 * 4 +) displays in currentNumber div the text 4 and in prevNumber the text 8+", () => {
		wrapper = setup();
		const buttonTwo = wrapper.find("[data-test='value-2']");
		const buttonMultiply = wrapper.find("[data-test='value-*']");
		const buttonFour = wrapper.find("[data-test='value-4']");
		const buttonAdd = wrapper.find("[data-test='value-+']");
		buttonTwo.simulate("click");
		buttonMultiply.simulate("click");
		buttonFour.simulate("click");
		buttonAdd.simulate("click");
		const currentNumberDiv = wrapper.find("[data-test='current-value']");
		const prevNumberDiv = wrapper.find("[data-test='prev-value']");
		expect(currentNumberDiv.text()).toBe("0");
		expect(prevNumberDiv.text()).toBe("8+");
	});

	it("(2 * 4 =) displays in currentNumber div the text 8 and in prevNumber empty string", () => {
		wrapper = setup();
		const buttonTwo = wrapper.find("[data-test='value-2']");
		const buttonMultiply = wrapper.find("[data-test='value-*']");
		const buttonFour = wrapper.find("[data-test='value-4']");
		const buttonEquals = wrapper.find("[data-test='value-=']");
		buttonTwo.simulate("click");
		buttonMultiply.simulate("click");
		buttonFour.simulate("click");
		buttonEquals.simulate("click");
		const currentNumberDiv = wrapper.find("[data-test='current-value']");
		const prevNumberDiv = wrapper.find("[data-test='prev-value']");
		expect(currentNumberDiv.text()).toBe("8");
		expect(prevNumberDiv.text()).toBe("");
	});

	it("(8 / 4 =) displays in currentNumber div the text 2 and in prevNumber empty string", () => {
		wrapper = setup();
		const buttonEight = wrapper.find("[data-test='value-8']");
		const buttonDivide = wrapper.find("[data-test='value-/']");
		const buttonFour = wrapper.find("[data-test='value-4']");
		const buttonEquals = wrapper.find("[data-test='value-=']");
		buttonEight.simulate("click");
		buttonDivide.simulate("click");
		buttonFour.simulate("click");
		buttonEquals.simulate("click");
		const currentNumberDiv = wrapper.find("[data-test='current-value']");
		const prevNumberDiv = wrapper.find("[data-test='prev-value']");
		expect(currentNumberDiv.text()).toBe("2");
		expect(prevNumberDiv.text()).toBe("");
	});

	it("(8 - 4 =) displays in currentNumber div the text 4 and in prevNumber empty string", () => {
		wrapper = setup();
		const buttonEight = wrapper.find("[data-test='value-8']");
		const buttonSubtract = wrapper.find("[data-test='value--']");
		const buttonFour = wrapper.find("[data-test='value-4']");
		const buttonEquals = wrapper.find("[data-test='value-=']"); 
		buttonEight.simulate("click");
		buttonSubtract.simulate("click");
		buttonFour.simulate("click");
		buttonEquals.simulate("click");
		const currentNumberDiv = wrapper.find("[data-test='current-value']");
		const prevNumberDiv = wrapper.find("[data-test='prev-value']");
		expect(currentNumberDiv.text()).toBe("4");
		expect(prevNumberDiv.text()).toBe("");
	});

	it("divide by zero does nothing", () => {
		wrapper = setup();
		const buttonEight = wrapper.find("[data-test='value-8']");
		const buttonDivide = wrapper.find("[data-test='value-/']");
		const buttonZero = wrapper.find("[data-test='value-0']");
		const buttonEquals = wrapper.find("[data-test='value-=']");
		buttonEight.simulate("click");
		buttonDivide.simulate("click");
		buttonZero.simulate("click");
		buttonEquals.simulate("click");
		const currentNumberDiv = wrapper.find("[data-test='current-value']");
		const prevNumberDiv = wrapper.find("[data-test='prev-value']");
		expect(currentNumberDiv.text()).toBe("0");
		expect(prevNumberDiv.text()).toBe("8÷");
	});

	it("does not displays multiple periods", () => {
		wrapper = setup();
		const buttonEight = wrapper.find("[data-test='value-8']");
		const buttonPeriod = wrapper.find("[data-test='value-.']");
		const buttonOne = wrapper.find("[data-test='value-1']");
		buttonEight.simulate("click");
		buttonPeriod.simulate("click");
		buttonPeriod.simulate("click");
		buttonPeriod.simulate("click");
		buttonOne.simulate("click");
		const currentNumberDiv = wrapper.find("[data-test='current-value']");
		const prevNumberDiv = wrapper.find("[data-test='prev-value']");
		expect(currentNumberDiv.text()).toBe("8.1");
		expect(prevNumberDiv.text()).toBe("");
	});

	it("does not displays multiple zeros in front of the number", () => {
		wrapper = setup();
		const buttonZero = wrapper.find("[data-test='value-0']");
		const buttonEight = wrapper.find("[data-test='value-8']");
		const buttonOne = wrapper.find("[data-test='value-1']");
		buttonZero.simulate("click");
		buttonZero.simulate("click");
		buttonZero.simulate("click");
		buttonEight.simulate("click");
		buttonOne.simulate("click");
		const currentNumberDiv = wrapper.find("[data-test='current-value']");
		const prevNumberDiv = wrapper.find("[data-test='prev-value']");
		expect(currentNumberDiv.text()).toBe("81");
		expect(prevNumberDiv.text()).toBe("");
	});

	it("(8 * 4 square root =) current number displays 18 previous number displays empty string", () => {
		wrapper = setup();
		const buttonRoot = wrapper.find("[data-test='value-r']");
		const buttonEight = wrapper.find("[data-test='value-8']");
		const buttonFour = wrapper.find("[data-test='value-4']");
		const buttonMultiply = wrapper.find("[data-test='value-*']");
		const buttonEquals = wrapper.find("[data-test='value-=']");
		buttonEight.simulate("click");
		buttonMultiply.simulate("click");
		buttonFour.simulate("click");
		buttonRoot.simulate("click");
		buttonEquals.simulate("click");
		const currentNumberDiv = wrapper.find("[data-test='current-value']");
		const prevNumberDiv = wrapper.find("[data-test='prev-value']");
		expect(currentNumberDiv.text()).toBe("16");
		expect(prevNumberDiv.text()).toBe("");
	});

	it("(8 * 4 squared =) current number displays 128 previous number displays empty string", () => {
		wrapper = setup();
		const buttonSquared = wrapper.find("[data-test='value-e']");
		const buttonEight = wrapper.find("[data-test='value-8']");
		const buttonFour = wrapper.find("[data-test='value-4']");
		const buttonMultiply = wrapper.find("[data-test='value-*']");
		const buttonEquals = wrapper.find("[data-test='value-=']");
		buttonEight.simulate("click");
		buttonMultiply.simulate("click");
		buttonFour.simulate("click");
		buttonSquared.simulate("click");
		buttonEquals.simulate("click");
		const currentNumberDiv = wrapper.find("[data-test='current-value']");
		const prevNumberDiv = wrapper.find("[data-test='prev-value']");
		expect(currentNumberDiv.text()).toBe("128");  
		expect(prevNumberDiv.text()).toBe("");
	});

	it("button DEL deletes the last digit", () => {
		wrapper = setup();
		const buttonEight = wrapper.find("[data-test='value-8']");
		const buttonFour = wrapper.find("[data-test='value-4']");
		const buttonDel = wrapper.find("[data-test='value-del']");
		buttonEight.simulate("click");
		buttonFour.simulate("click");
		buttonEight.simulate("click");
		buttonFour.simulate("click");
		buttonDel.simulate("click");
		const currentNumberDiv = wrapper.find("[data-test='current-value']");
		const prevNumberDiv = wrapper.find("[data-test='prev-value']");
		expect(currentNumberDiv.text()).toBe("848"); 
		expect(prevNumberDiv.text()).toBe("");
	});

	it("button CE deletes everything", () => {
		wrapper = setup();
		const buttonEight = wrapper.find("[data-test='value-8']");
		const buttonFour = wrapper.find("[data-test='value-4']");
		const buttonClear = wrapper.find("[data-test='value-clear']");
		const buttonMultiply = wrapper.find("[data-test='value-*']");
		buttonEight.simulate("click");
		buttonMultiply.simulate("click");
		buttonFour.simulate("click");
		buttonClear.simulate("click");
		const currentNumberDiv = wrapper.find("[data-test='current-value']");
		const prevNumberDiv = wrapper.find("[data-test='prev-value']");
		expect(currentNumberDiv.text()).toBe("0");
		expect(prevNumberDiv.text()).toBe("");
	});

	it("user can change operation (from * to +)", () => {
		wrapper = setup();
		const buttonEight = wrapper.find("[data-test='value-8']");
		const buttonPlus = wrapper.find("[data-test='value-+']");
		const buttonMultiply = wrapper.find("[data-test='value-*']");
		buttonEight.simulate("click");
		buttonMultiply.simulate("click");
		buttonPlus.simulate("click");
		const currentNumberDiv = wrapper.find("[data-test='current-value']");
		const prevNumberDiv = wrapper.find("[data-test='prev-value']");
		expect(currentNumberDiv.text()).toBe("0");
		expect(prevNumberDiv.text()).toBe("8+");
	});
});
