import { getByTestId, render, screen, fireEvent, getByText, waitFor } from
    '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Routes } from 'react-router-dom';
import Addcustomer from './AddCustomer';
jest.mock('axios');
jest.mock('react-router-dom');

describe("Add Customer Page Lables", () => {

    test('renders name', () => {
        render(<Addcustomer />);
        const checkName = screen.getByRole("customername");
        expect(checkName).toBeInTheDocument();
        expect(checkName).toHaveTextContent('Customer Name');
    });

    test('renders address', () => {
        render(<Addcustomer />);
        const checkAddress = screen.getByRole("address");
        expect(checkAddress).toBeInTheDocument();
        expect(checkAddress).toHaveTextContent('Address :');
    });

    test('renders Mobile No', () => {
        render(<Addcustomer />);
        const checkMobileNo = screen.getByRole("customerMobileNo");
        expect(checkMobileNo).toBeInTheDocument();
        expect(checkMobileNo).toHaveTextContent('Mobile No :');
    });

    test('renders date', () => {
        render(<Addcustomer />);
        const checkDate = screen.getByRole("date");
        expect(checkDate).toBeInTheDocument();
        expect(checkDate).toHaveTextContent('Date :');
    });

    test('renders account number', () => {
        render(<Addcustomer />);
        const checkAccountNumber = screen.getByRole("accountNumber");
        expect(checkAccountNumber).toBeInTheDocument();
        expect(checkAccountNumber).toHaveTextContent('Account Number :');
    });

    test('renders loan id', () => {
        render(<Addcustomer />);
        const checkLoanId = screen.getByRole("loanId");
        expect(checkLoanId).toBeInTheDocument();
        expect(checkLoanId).toHaveTextContent('loan Id :');
    });

    
});

describe("Add Customer Page placeholders", () => {

    test("renders name placeholder", () => {
        render(<Addcustomer />)
        const Placeholder = screen.getByPlaceholderText("Enter Customer Name");
        expect(Placeholder).toHaveAttribute("type", "text");
    });

    test("renders address placeholder", () => {
        render(<Addcustomer />)
        const Placeholder = screen.getByPlaceholderText("Enter Customer Address");
        expect(Placeholder).toHaveAttribute("type", "text");
    });

    test("renders moble number placeholder", () => {
        render(<Addcustomer />)
        const Placeholder = screen.getByPlaceholderText("Customer Mobile No");
        expect(Placeholder).toHaveAttribute("type", "text");
    });

    test("renders date placeholder", () => {
        render(<Addcustomer />)
        const Placeholder = screen.getByPlaceholderText("DD/MM/YYYY");
        expect(Placeholder).toHaveAttribute("type", "date");
    });

    test("renders Account Number placeholder", () => {
        render(<Addcustomer />)
        const Placeholder = screen.getByPlaceholderText("Account Number");
        expect(Placeholder).toHaveAttribute("type", "text");
    });


});


describe("Add Customer Page Text", () => {

    test('renders head', () => {
        render(<Addcustomer />);
        const headElement = screen.getByText(/Add New customer Data/i);
        expect(headElement).toBeInTheDocument();
    });

    test('renders button', () => {
        render(<Addcustomer />);
        const buttonElement = screen.getByText(/Submit/i);
        expect(buttonElement).toBeInTheDocument();
    });

});