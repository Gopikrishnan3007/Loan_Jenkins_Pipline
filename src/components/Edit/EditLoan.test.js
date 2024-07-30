import { getByTestId, render, screen, fireEvent, getByText, waitFor } from
    '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Routes } from 'react-router-dom';
import EditLoan from './EditLoan';
jest.mock('axios');
jest.mock('react-router-dom');

describe("Add Loan Page Lables", () => {

    test('renders id', () => {
        render(<EditLoan />);
        const checkName = screen.getByRole("loanId");
        expect(checkName).toBeInTheDocument();
        expect(checkName).toHaveTextContent('ID :');
    });

    test('renders name', () => {
        render(<EditLoan />);
        const checkName = screen.getByRole("loanName");
        expect(checkName).toBeInTheDocument();
        expect(checkName).toHaveTextContent('loan Name :');
    });

    test('renders loan Amount', () => {
        render(<EditLoan />);
        const checkLoanAmount = screen.getByRole("loanAmount");
        expect(checkLoanAmount).toBeInTheDocument();
        expect(checkLoanAmount).toHaveTextContent('loan Amount :');
    });

    test('renders principle amount', () => {
        render(<EditLoan />);
        const check = screen.getByRole("principalAmount");
        expect(check).toBeInTheDocument();
        expect(check).toHaveTextContent('Principal Amount :');
    });


    test('renders interest amount', () => {
        render(<EditLoan />);
        const check = screen.getByRole("interestAmount");
        expect(check).toBeInTheDocument();
        expect(check).toHaveTextContent('Interest Amount :');
    });

    
});



describe("Add Loan Page Text", () => {

    test('renders head', () => {
        render(<EditLoan />);
        const headElement = screen.getByText(/Update loan's Data/i);
        expect(headElement).toBeInTheDocument();
    });

});