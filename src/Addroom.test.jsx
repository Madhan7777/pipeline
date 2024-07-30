import { render, screen } from '@testing-library/react';
import Addroom from './Addroom';;
import { BrowserRouter } from 'react-router-dom';
 
jest.mock('axios');
jest.mock('react-router-dom');
 
test('renders Add rooms data ', () => {
    render(<Addroom />);
    const linkElement = screen.getByTestId("heading");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("ADD ROOM'S DATA");
});
 
test('renders Add Roomno ', () => {
    render(<Addroom />);
    const linkElement = screen.getByTestId("roomno");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Room No :");
});
 
test('renders Add hostelfees ', () => {
    render(<Addroom />);
    const linkElement = screen.getByTestId("hostelfees");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Hostel Fees :");
});
 
test('renders Add messfees ', () => {
    render(<Addroom />);
    const linkElement = screen.getByTestId("messfees");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Mess Fees :");
});
 
test('renders Add total ', () => {
    render(<Addroom />);
    const linkElement = screen.getByTestId("total");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Total :");
});
 
test('renders Add room submit button', () => {
    render(<Addroom />);
    const linkElement = screen.getByTestId("submitbutton");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Submit");
});