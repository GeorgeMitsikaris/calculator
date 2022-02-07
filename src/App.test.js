import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

it("renders without error", () => {
	const wrapper = shallow(<App />);
	const calculator = wrapper.find("[data-test='app-component']");
  expect(calculator.length).toBe(1);
});
