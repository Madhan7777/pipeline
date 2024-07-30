import { render, screen, getByRole, getByTestId } from '@testing-library/react';
// import axios from 'axios'
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Viewstudent from './Viewstudent';

jest.mock('axios'); 
jest.mock('react-router-dom');
jest.mock('react-router-dom');


test('renders view customer title ', () => {
    render(<Viewstudent />);
    const linkElement = screen.getByTestId("heading");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Hostel Management System");
});

