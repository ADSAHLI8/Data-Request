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
    it('should render Labels',async ()=>{
        render (<MockedDataRequest />);
        const selectElement= screen.getByText('Entity')
        expect(selectElement).toBeInTheDocument()
        const selectElement1= screen.getByText('Country')
        expect(selectElement1).toBeInTheDocument()
        const selectElement2= screen.getByText('ISP')
        expect(selectElement2).toBeInTheDocument()
        const selectElement3= screen.getByText('Domain')
        expect(selectElement3).toBeInTheDocument()
        const selectElement4= screen.getByText('Dashboard Name')
        expect(selectElement4).toBeInTheDocument()
        const selectElement5= screen.getByText('Is_Amazon')
        expect(selectElement5).toBeInTheDocument()
        const selectElement6= screen.getByText('Is_Paypal')
        expect(selectElement6).toBeInTheDocument()
        const selectElement7= screen.getByText('Is_Insurance')
        expect(selectElement7).toBeInTheDocument()
        const selectElement8= screen.getByText('Is_Fedex')
        expect(selectElement8).toBeInTheDocument()
        const selectElement9= screen.getByText('Is_Hardbounce')
        expect(selectElement9).toBeInTheDocument()
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