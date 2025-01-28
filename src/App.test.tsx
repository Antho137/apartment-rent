import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from './App';

describe("App", () => {
    it("renders Header and Apartment headings ", () => {
        render(<App />);
        expect(screen.getByText("Apartment Rental")).toBeInTheDocument();
        expect(screen.getByText("Which Apartment suits your need?")).toBeInTheDocument();
    });

    it('renders input element', () => {
        render(<App />);        
        const textbox = screen.getByRole('textbox');
        fireEvent.change(textbox, {target: {value:'3'}});

        expect(textbox).toHaveDisplayValue('3');
        expect(textbox).toHaveAttribute('value');
    });

    it('renders button element', () => {
        render(<App />);        
        const button = screen.getByRole('button'); 
        expect(button).toHaveTextContent('Search');
    });
});