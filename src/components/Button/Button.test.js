import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe("Button component", () => {
  const setup = (children) => {
    render(
      <Provider store={store}>
        <Button>{children}</Button>
      </Provider>
    )
  }
	it("renders a button", () => {
		setup('1');
		const button = screen.queryByRole("button");
		expect(button).toBeInTheDocument();
  });
  
  it('renders the correct text', () => {
    setup('1');
    const button = screen.queryByRole("button", {
      name: '1' 
    });
    expect(button).toBeInTheDocument();
  })
});