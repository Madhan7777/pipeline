import { render, screen } from '@testing-library/react';
import App from './App';
import Approuter from './Approuter';
import New from './New';
import Loginsample from './Loginsample';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test ("renders Hi !!!",()=> {
  render(<New />);
  const linkElement = screen.getByText('Hi !!!');
  expect(linkElement).toBeInTheDocument();
});

it ("renders Welcome to Relevantz",()=> {
  render(<New />);
  const linkElement = screen.getByText('Welcome to Relevantz');
  expect(linkElement).toBeInTheDocument();
});

describe ('All Tests',()=> {
  test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Learn React');
  expect(linkElement).toBeInTheDocument();
});

// it ("renders 'label' ",()=> {
//   render(<Loginsample />);
//   const linkElement = screen.getByRole('label');
//   expect(linkElement).toBeInTheDocument();
// })
})
