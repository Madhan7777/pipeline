import { render, screen, getByRole, getByTestId } from '@testing-library/react';
// import axios from 'axios'
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Viewroom from './Viewroom';

jest.mock('axios'); 
jest.mock('react-router-dom');
jest.mock('react-router-dom');


test('renders view customer title ', () => {
    render(<Viewroom />);
    const linkElement = screen.getByRole("heading");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("ROOM'S DETAILS");
});

