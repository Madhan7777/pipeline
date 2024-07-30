import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Editroom from './Editroom';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import Editstudent from './Editstudent';
 
// jest.mock('axios');
// jest.mock('react-router-dom');
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
  }));
  const mock = new MockAdapter(axios);
 
test('renders Add student details ', () => {
    render(<Editstudent />);
    const linkElement = screen.getByTestId("heading");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("HOSTEL Management System");
});
 
test('renders Add id ', () => {
    render(<Editstudent />);
    const linkElement = screen.getByTestId("id");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("ID :");
});
 
test('renders Add studentname ', () => {
    render(<Editstudent />);
    const linkElement = screen.getByTestId("studentname");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("StudentName :");
});
 
test('renders Add student department ', () => {
    render(<Editstudent />);
    const linkElement = screen.getByTestId("department");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Department :");
});
 
test('renders Add student year ', () => {
    render(<Editstudent />);
    const linkElement = screen.getByTestId("year");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Year :");
});
 
test('renders Add roomno ', () => {
    render(<Editstudent />);
    const linkElement = screen.getByTestId("roomno");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Room No :");
});

test('renders Add room edit button', () => {
    render(<Editstudent />);
    const linkElement = screen.getByTestId("updatebutton");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Update");
});