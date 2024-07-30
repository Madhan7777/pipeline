import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Addstudent from './Addstudent';
import axios from 'axios';
 
// jest.mock('axios');
// jest.mock('react-router-dom');
 
test('renders Add student data ', () => {
    render(<Addstudent />);
    const linkElement = screen.getByTestId("heading");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("ADD STUDENT DATA");
});
 
test('renders Add sname ', () => {
    render(<Addstudent />);
    const linkElement = screen.getByTestId("studentname");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("StudentName :");
});
 
test('renders Add department ', () => {
    render(<Addstudent />);
    const linkElement = screen.getByTestId("department");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Department :");
});
 
test('renders Add year ', () => {
    render(<Addstudent />);
    const linkElement = screen.getByTestId("year");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Year :");
});
 
test('renders Add roomno ', () => {
    render(<Addstudent />);
    const linkElement = screen.getByTestId("roomno");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Room No :");
});
 
test('renders Add studetn submit button', () => {
    render(<Addstudent />);
    const linkElement = screen.getByTestId("submitbutton");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Submit");
});