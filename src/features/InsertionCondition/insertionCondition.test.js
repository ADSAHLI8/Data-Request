import { Provider } from "react-redux";
import InsertionCondition from "./InsertionCondition";
import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom'; // For matchers like 'toBeInTheDocument'
import store from "../../store/store";
import { PrimeReactProvider } from "primereact/api";

 const MockedInsertionCondition = () => {
    return(
        <Provider store={store}>
            <PrimeReactProvider>
              <InsertionCondition />
            </PrimeReactProvider>
        </Provider>
    )
}

describe('Insertion Condition',() =>{
    it('should render buttons',async ()=>{
        render (<MockedInsertionCondition />);
        const selectElement= screen.getAllByRole('button')
        expect(selectElement.length).toBe(3)
    })
    it('should render isp input',async ()=>{
        render (<MockedInsertionCondition />);
        const selectElement= screen.getByPlaceholderText('Input ISP')
        expect(selectElement).toBeInTheDocument()
    })
    it('should render provider input',async ()=>{
        render (<MockedInsertionCondition />);
        const selectElement= screen.getByPlaceholderText('Input Provider')
        expect(selectElement).toBeInTheDocument()
    })
    it('should render list name input',async ()=>{
        render (<MockedInsertionCondition />);
        const selectElement= screen.getByPlaceholderText('Input List Name')
        expect(selectElement).toBeInTheDocument()
    })
    it('should render textarea',async ()=>{
        render (<MockedInsertionCondition />);
        const selectElement= screen.getByPlaceholderText('Any additional information...')
        expect(selectElement).toBeInTheDocument()
    })

})