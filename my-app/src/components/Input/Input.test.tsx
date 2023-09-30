import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Input from "./Input";

describe('Input component', () => {
    test('Renders with label and placeholder', () => {
        render(<Input type='text' label='testLabel' placeholder='placeholder' value='blabla' onChange={() => {}} />)
        render(<div id="12">placeholder</div>)
        const input = screen.getByText("placeholder")
        expect(input).toBeInTheDocument();
    })
})