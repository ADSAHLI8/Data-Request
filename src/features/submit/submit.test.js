import { Provider } from "react-redux";
import Submit from "./Submit";
import { fireEvent, render,screen } from "@testing-library/react";
import '@testing-library/jest-dom'; // For matchers like 'toBeInTheDocument'
import store from "../../store/store";
import { PrimeReactProvider } from "primereact/api";

 const MockedSubmit = () => {
    return(
        <Provider store={store}>
            <PrimeReactProvider>
              <Submit />
            </PrimeReactProvider>
        </Provider>
    )
}

describe('Submit',() =>{
    it('should render buttons',async ()=>{
        render (<MockedSubmit />);
        const buttonElements= screen.getAllByRole('button')
        expect(buttonElements.length).toBe(2)
    })
    it('should render modal',async ()=>{
        render (<MockedSubmit />);
        const buttonElement= screen.getByText('Submit')
        fireEvent.click(buttonElement)
        const modalElement = screen.getByRole('dialog')
        const buttonElements= screen.getAllByRole('button')
        expect(modalElement).toBeInTheDocument()
        expect(buttonElements.length).toBe(5)
    })
    it('should close modal',async ()=>{
        render (<MockedSubmit />);
        const buttonElement= screen.getByText('Submit')
        fireEvent.click(buttonElement)
        const buttonElement2=screen.getAllByText('Close')
        const modalElement = screen.getByRole('dialog')
        const buttonElements= screen.getAllByRole('button')
        expect(modalElement).toBeInTheDocument()
        expect(buttonElements.length).toBe(5)
    })

    
})