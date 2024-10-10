import { Provider } from "react-redux";
import DataRequest from "./DataRequest";
import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom'; // For matchers like 'toBeInTheDocument'
import store from "../../store/store";
import { PrimeReactProvider } from "primereact/api";

 const MockedDataRequest = () => {
    return(
        <Provider store={store}>
            <PrimeReactProvider>
              <DataRequest />
            </PrimeReactProvider>
        </Provider>
    )
}

describe('Data Request',() =>{
    it('should render buttons',async ()=>{
        render (<MockedDataRequest />);
        const buttonElements= screen.getAllByRole('button')
        expect(buttonElements.length).toBe(24)
    })
    it('should render Country Select',async ()=>{
        render (<MockedDataRequest />);
        const selectElement= screen.getByText('Select Another Country')
        expect(selectElement).toBeInTheDocument()
    })
    it('should render isp Select',async ()=>{
        render (<MockedDataRequest />);
        const selectElement= screen.getByText('Select ISP')
        expect(selectElement).toBeInTheDocument()
    })
    it('should render domain input',async ()=>{
        render (<MockedDataRequest />);
        const inputElement= screen.getByPlaceholderText('Input Domain')
        expect(inputElement).toBeInTheDocument()
    })
    it('should render dashboard name input',async ()=>{
        render (<MockedDataRequest />);
        const inputElement= screen.getByPlaceholderText('Input Dashboard Name')
        expect(inputElement).toBeInTheDocument()
    })
    it('should render switches',async ()=>{
        render (<MockedDataRequest />);
        const switchElements= screen.getAllByRole('switch')
        expect(switchElements.length).toBe(5)
    })

})