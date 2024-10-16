import { Provider } from "react-redux";
import Submit from "./Submit";
import { fireEvent, render,screen,waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom'; // For matchers like 'toBeInTheDocument'
import store from "../../store/store";
import renderer from 'react-test-renderer';
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
        await screen.findByRole('dialog')
        const modalElement = screen.getByRole('dialog')
        const buttonElements= screen.getAllByRole('button')
        expect(modalElement).toBeInTheDocument()
        expect(buttonElements.length).toBe(5)
    })
    it('should close modal',async ()=>{
        render (<MockedSubmit />);
        const openButton = screen.getByText('Submit');
        fireEvent.click(openButton);
        await screen.findByRole('dialog')
        // Ensure the modal is now visible
        expect(screen.getByRole('dialog')).toBeInTheDocument();

         // Find the close button 
         const closeButton = screen.getByRole('button', { name: /Close/i });
         fireEvent.click(closeButton);
         // Ensure the modal is no longer visible
         await waitFor(() => {
            expect(screen.queryByText('Data Request Message')).not.toBeInTheDocument()
          })
    });
   
    it('should render correctly',async () => {
        const component = renderer.create(<MockedSubmit/>);
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
    })

    
