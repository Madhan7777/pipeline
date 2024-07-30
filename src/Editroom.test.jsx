import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Editroom from './Editroom';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
 
// jest.mock('axios');
// jest.mock('react-router-dom');
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
  }));
  const mock = new MockAdapter(axios);
 
test('renders Add rooms details ', () => {
    render(<Editroom />);
    const linkElement = screen.getByTestId("heading");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("ROOM DETAILS");
});
 
test('renders Add id ', () => {
    render(<Editroom />);
    const linkElement = screen.getByTestId("id");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("ID :");
});
 
test('renders Add roomno ', () => {
    render(<Editroom />);
    const linkElement = screen.getByTestId("roomno");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Room No :");
});
 
test('renders Add hostelfees ', () => {
    render(<Editroom />);
    const linkElement = screen.getByTestId("hostelfees");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Hostel Fees :");
});
 
test('renders Add messfees ', () => {
    render(<Editroom />);
    const linkElement = screen.getByTestId("messfees");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Mess Fees :");
});
 
test('renders Add total ', () => {
    render(<Editroom />);
    const linkElement = screen.getByTestId("total");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Total :");
});

test('renders Add room edit button', () => {
    render(<Editroom />);
    const linkElement = screen.getByTestId("updatebutton");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Update");
});