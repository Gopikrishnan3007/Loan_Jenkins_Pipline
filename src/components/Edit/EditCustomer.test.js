import { getByTestId, render, screen, fireEvent, getByText, waitFor } from
    '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Routes } from 'react-router-dom';
import EditCustomer from './EditCustomer';
jest.mock('axios');
jest.mock('react-router-dom');

describe("Add Customer Page Lables", () => {

    test('renders name', () => {
        render(<EditCustomer />);
        const checkName = screen.getByRole("customername");
        expect(checkName).toBeInTheDocument();
        expect(checkName).toHaveTextContent('Customer Name');
    });

    test('renders address', () => {
        render(<EditCustomer />);
        const checkAddress = screen.getByRole("address");
        expect(checkAddress).toBeInTheDocument();
        expect(checkAddress).toHaveTextContent('Address :');
    });

    test('renders Mobile No', () => {
        render(<EditCustomer />);
        const checkMobileNo = screen.getByRole("customerMobileNo");
        expect(checkMobileNo).toBeInTheDocument();
        expect(checkMobileNo).toHaveTextContent('Mobile No :');
    });

    test('renders date', () => {
        render(<EditCustomer />);
        const checkDate = screen.getByRole("date");
        expect(checkDate).toBeInTheDocument();
        expect(checkDate).toHaveTextContent('Date :');
    });

    test('renders account number', () => {
        render(<EditCustomer />);
        const checkAccountNumber = screen.getByRole("accountNumber");
        expect(checkAccountNumber).toBeInTheDocument();
        expect(checkAccountNumber).toHaveTextContent('Account Number :');
    });

    
});


describe("Add Customer Page Text", () => {

    test('renders head', () => {
        render(<EditCustomer />);
        const headElement = screen.getByText(/Update customer Data/i);
        expect(headElement).toBeInTheDocument();
    });

});