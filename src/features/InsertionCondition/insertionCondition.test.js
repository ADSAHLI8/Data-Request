import { Provider } from "react-redux";
import InsertionCondition from "./InsertionCondition";
import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom'; // For matchers like 'toBeInTheDocument'
import renderer from 'react-test-renderer';
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
    it('should render Labels',async ()=>{
        render (<MockedInsertionCondition />);
        const selectElement= screen.getByText('ISP')
        expect(selectElement).toBeInTheDocument()
        const selectElement1= screen.getByText('Provider')
        expect(selectElement1).toBeInTheDocument()
        const selectElement2= screen.getByText('Filter')
        expect(selectElement2).toBeInTheDocument()
        const selectElement3= screen.getByText('List Name')
        expect(selectElement3).toBeInTheDocument()
        const selectElement4= screen.getByText('Additional Information')
        expect(selectElement4).toBeInTheDocument()
       
    })
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
    it('should render correctly',async () => {
        const component = renderer.create(<MockedInsertionCondition/>);
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })


})