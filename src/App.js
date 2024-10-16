import React from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { TabView, TabPanel } from 'primereact/tabview';import "primereact/resources/themes/lara-light-cyan/theme.css";
import './App.css';
import DataRequest from './features/DataRequest/DataRequest';
import InsertionCondition from './features/InsertionCondition/InsertionCondition';
import { Accordion, AccordionTab } from 'primereact/accordion';
import 'primeicons/primeicons.css';
import Submit from './features/submit/Submit';

/**
 * @component
 * 
 * @returns{JSX.Element} 
 */



function App() {
  
  
  return (
    /**
     * Prime React Provider
     * Components
     */
     <PrimeReactProvider>
      <div className='full-container'>
        <TabView>
          <TabPanel >
            <Accordion activeIndex={0}>
            <AccordionTab header="Data Request">
            <DataRequest/>
            </AccordionTab>
             <AccordionTab header="Insertion Condition">
             <InsertionCondition/>
             </AccordionTab>
             </Accordion>
         <Submit/>
        </TabPanel>
      </TabView>
      </div>

     </PrimeReactProvider>

  );
}

export default App;
