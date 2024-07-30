import { getByTestId, render, screen, fireEvent, getByText, waitFor } from
    '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Routes } from 'react-router-dom';
import AddLoan from './AddLoan';
jest.mock('axios');
jest.mock('react-router-dom');

describe("Add Loan Page Lables", () => {

    test('renders name', () => {
        render(<AddLoan />);
        const checkName = screen.getByRole("loanName");
        expect(checkName).toBeInTheDocument();
        expect(checkName).toHaveTextContent('loan Name :');
    });

    test('renders loan Amount', () => {
        render(<AddLoan />);
        const checkLoanAmount = screen.getByRole("loanAmount");
        expect(checkLoanAmount).toBeInTheDocument();
        expect(checkLoanAmount).toHaveTextContent('loan Amount :');
    });

    test('renders principle amount', () => {
        render(<AddLoan />);
        const check = screen.getByRole("principalAmount");
        expect(check).toBeInTheDocument();
        expect(check).toHaveTextContent('Principal Amount :');
    });


    test('renders interest amount', () => {
        render(<AddLoan />);
        const check = screen.getByRole("interestAmount");
        expect(check).toBeInTheDocument();
        expect(check).toHaveTextContent('Interest Amount :');
    });

    

    
});

describe("Add Loan Page placeholders", () => {

    test("renders name placeholder", () => {
        render(<AddLoan />)
        const Placeholder = screen.getByPlaceholderText("Enter loan Name");
        expect(Placeholder).toHaveAttribute("type", "text");
    });

    test("renders loanAmount placeholder", () => {
        render(<AddLoan />)
        const Placeholder = screen.getByPlaceholderText("Enter loan Amount");
        expect(Placeholder).toHaveAttribute("type", "text");
    });

    test("renders principalAmount placeholder", () => {
        render(<AddLoan />)
        const Placeholder = screen.getByPlaceholderText("Enter Principal Amount");
        expect(Placeholder).toHaveAttribute("type", "text");
    });

    test("renders interestAmount placeholder", () => {
        render(<AddLoan />)
        const Placeholder = screen.getByPlaceholderText("Enter Interest Amount");
        expect(Placeholder).toHaveAttribute("type", "text");
    });

    

});


describe("Add Loan Page Text", () => {

    test('renders head', () => {
        render(<AddLoan />);
        const headElement = screen.getByText(/Add New loan Data/i);
        expect(headElement).toBeInTheDocument();
    });

    test('renders button', () => {
        render(<AddLoan />);
        const buttonElement = screen.getByText(/Submit/i);
        expect(buttonElement).toBeInTheDocument();
    });

});