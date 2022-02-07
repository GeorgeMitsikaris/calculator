import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Button from "./Button";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("Button component", () => {
  it("renders a button", () => {
    const wrapper = shallow(<Button>1</Button>);
    const button = wrapper.find('button');
		expect(button.length).toBe(1); 
  });
  
  it('renders the correct text', () => {
    const wrapper = shallow(<Button>1</Button>);
    const button = wrapper.find('button');
		expect(button.text()).toBe('1'); 
  })
});
