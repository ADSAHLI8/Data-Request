import { Provider } from "react-redux";
import { render,screen,fireEvent,waitFor,within } from "@testing-library/react";
import '@testing-library/jest-dom'; // For matchers like 'toBeInTheDocument'
import store from "./store/store";
import renderer from 'react-test-renderer';
import App from "./App";

const MockedApp = () => {
    return(
        <Provider store={store}>
              <App />
        </Provider>
    )
}
describe('App', ()=> {
    it('should render accordions properly',async ()=>{
        render(<MockedApp />)
        const buttonElement = screen.getByRole('button',{name : 'Data Request'})
        const buttonElement2 = screen.getByRole('button',{name : 'Insertion Condition'})
        expect(buttonElement).toBeInTheDocument()
        expect(buttonElement2).toBeInTheDocument()
        fireEvent.click(buttonElement)
        const dataRequestElement = screen.getByRole('button',{name:'itm'})
        expect(dataRequestElement).toBeInTheDocument()
        fireEvent.click(buttonElement2)
        await waitFor(() => {
            const Element2 = screen.getByRole('button',{name:'Enabled'})
            expect(Element2).toBeInTheDocument()
          })
    })
    it('should render correctly',async () => {
        const component = renderer.create(<MockedApp/>);
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('Should display buttons values on request message',async () =>{
        render(<MockedApp />)
        const buttonElement=screen.getByRole('button',{name : /itm/i})
        fireEvent.click(buttonElement)
        const buttonElement2 = screen.getByRole('button',{name : /EUROPE/i})
        fireEvent.click(buttonElement2)
        const buttonElement3 = screen.getByRole('button',{name : 'Insertion Condition'})
        fireEvent.click(buttonElement3)
        const buttonElement4 = screen.getByRole('button',{name : 'Enabled'})
        fireEvent.click(buttonElement4)

        
        const submitButton = screen.getByRole('button',{name : 'Submit'})
        fireEvent.click(submitButton)
        await screen.findByRole('dialog')
        const modal = screen.getByRole('dialog')   
        
        expect(within(modal).getByText(/itm/i)).toBeInTheDocument()
        expect(within(modal).getByText(/EUROPE/i)).toBeInTheDocument()
        expect(within(modal).getByText(/Enabled/i)).toBeInTheDocument()

    })
    it('Should display inputs values on request message',async () =>{
        render(<MockedApp />)
        const inputElement=screen.getByPlaceholderText('Input Domain')
        fireEvent.change(inputElement,{target:{value:'domdom'}})
        const inputElement1=screen.getByPlaceholderText('Input Dashboard Name')
        fireEvent.change(inputElement1,{target:{value:'dashdash'}})
        const buttonElement = screen.getByRole('button',{name : 'Insertion Condition'})
        fireEvent.click(buttonElement)
        const inputElement2 = screen.getByPlaceholderText('Input Provider')
        fireEvent.change(inputElement2,{target:{value:'provider2'}})
        const inputElement3 = screen.getByPlaceholderText('Input ISP')
        fireEvent.change(inputElement3,{target:{value:'isp2'}})
        const inputElement4 = screen.getByPlaceholderText('Input List Name')
        fireEvent.change(inputElement4,{target:{value:'list-list'}})
        const textAreaElement = screen.getByPlaceholderText('Any additional information...')
        fireEvent.change(textAreaElement,{target:{value:'additional info ...'}})

        
        const submitButton = screen.getByRole('button',{name : 'Submit'})
        fireEvent.click(submitButton)
        await screen.findByRole('dialog')
        const modal = screen.getByRole('dialog')
        
        expect(within(modal).getByText(/domdom/i)).toBeInTheDocument()
        expect(within(modal).getByText(/dashdash/i)).toBeInTheDocument()
        expect(within(modal).getByText(/provider2/i)).toBeInTheDocument()
        expect(within(modal).getByText(/isp2/i)).toBeInTheDocument() 
        expect(within(modal).getByText(/additional info.../i)).toBeInTheDocument()
    })
    it('Should display select values on request message',async () =>{
        render(<MockedApp />)
        const selectElement=screen.getByText('Select ISP')
        fireEvent.mouseDown(selectElement)
        const option = screen.getByText('orange')
        expect(option).toBeInTheDocument()
        fireEvent.click(option)

        const selectElement2=screen.getByText('Select Another Country')
        fireEvent.mouseDown(selectElement2)
        const option2 = screen.getByText('AF')
        expect(option2).toBeInTheDocument()  
        fireEvent.click(option2)

        const submitButton = screen.getByRole('button',{name : 'Submit'})
        fireEvent.click(submitButton)
        await screen.findByRole('dialog')
        const modal = screen.getByRole('dialog')
        
        expect(within(modal).getByText(/orange/i)).toBeInTheDocument() 
        expect(within(modal).getByText(/af/i)).toBeInTheDocument() 
    })
    it('Should display switch values on request message',async () =>{
        render(<MockedApp />)
        const switchElements=screen.getAllByRole('switch')
        const switchElement = switchElements[0]
        fireEvent.click(switchElement)
    
        const submitButton = screen.getByRole('button',{name : 'Submit'})
        fireEvent.click(submitButton)
        await screen.findByRole('dialog')
        const modal = screen.getByRole('dialog')
        
        expect(within(modal).getByText(/is_Amazon/i)).toBeInTheDocument() 
    })
    it('should reset form',()=>{
        render(<MockedApp />)
        const inputElement=screen.getByPlaceholderText('Input Domain')
        fireEvent.change(inputElement,{target:{value:'domdom'}})
        const resetButton = screen.getByRole('button',{name : /reset/i})
        fireEvent.click(resetButton)

        expect(screen.queryByText(/domdom/i)).not.toBeInTheDocument()

    })
})
