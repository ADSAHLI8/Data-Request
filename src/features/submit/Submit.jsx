import React from 'react'
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import { reset } from '../DataRequest/dataRequestSlice';
import copy from "copy-to-clipboard";
import { useDispatch, useSelector } from 'react-redux';
import { useAddRequestMutation } from '../requestApi';


/**
 * @component
 * 
 * @returns{JSX.Element} 
 */
const Submit = () => {
    /** Define a state for every store element  */
   const state = useSelector((state)=>state)
   const Entity = useSelector((state)=>state.dataRequest.Entity)
   const Country = useSelector((state)=>state.dataRequest.Country)
   const Country2 = useSelector((state)=>state.dataRequest.Country2)
   const ISP = useSelector((state)=>state.dataRequest.ISP)
   const Domain = useSelector((state)=>state.dataRequest.Domain)
   const DashboardName = useSelector((state)=>state.dataRequest.DashboardName)
   const Is_Amazon = useSelector((state)=>state.dataRequest.Is_Amazon)
   const Is_Paypal = useSelector((state)=>state.dataRequest.Is_Paypal)
   const Is_Fedex = useSelector((state)=>state.dataRequest.Is_Fedex)
   const Is_Insurance = useSelector((state)=>state.dataRequest.Is_Insurance)
   const Is_Hardbounce = useSelector((state)=>state.dataRequest.Is_Hardbounce)
   const ISP2 = useSelector((state)=>state.insertionCondition.ISP2)
  const Provider = useSelector((state)=>state.insertionCondition.Provider)
  const Filter = useSelector((state)=>state.insertionCondition.Filter)
  const ListName = useSelector((state)=>state.insertionCondition.ListName)
  const AdditionalInformation = useSelector((state)=>state.insertionCondition.AdditionalInformation)
  /**Calling useDispatch */
  const dispatch = useDispatch()
  /** Modal switch */
  const [visible, setVisible] = useState(false);
  /** 
   * Display select 
   * @param {Array} array -creatable select selected values 
   * @returns {String} - selected values as a string
   */
  const displaySelect = (array=[]) => {
    let i = 0
    let countries = '';
    for ( i=0 ; i<array.length;i++){
      countries = countries  +(array[i]["label"])+ ',';
      }
      return countries.slice(0,-1) 
  }
  /** 
   * Display buttons 
   * @param {Array} array - selectButtons  selected values 
   * @returns {String} - selected values as a string
   */
  const displayButtons =(array=[]) => {
    let i = 0
    let countries = '';
    for ( i=0 ; i<array.length;i++){
      countries = countries  +(array[i])+ ',';
      }
      return countries.slice(0,-1) 
  }
    /**Modal footer */
    const footerContent = (
        <div>
            <Button label="Copy" icon="pi pi-clipboard" onClick={() => copy(document.getElementById('copy-text').textContent)} className="p-button-text" />
            <Button label="Close"  onClick={() => setVisible(false)} autoFocus />
        </div>
    );
    /** Modal header */
    const headerContent = (
        <div>
            <h3 className='message'>Data Request Message</h3>
        </div>
    );

    /**
     * handle submit function
     * opens modal 
     * post request
     */
    const [addRequest] = useAddRequestMutation()
    const handleSubmit =async (e) => {
        e.preventDefault()
        setVisible(!visible)
        await addRequest(state)
    }
   /** Return buttons and data request message */
  return (
    <div>
        <Button label="Reset" className='buttons' onClick={() => dispatch(reset())} />
        <Button label="Submit" className='buttons' onClick={handleSubmit} />
            <Dialog header={headerContent} visible={visible} className='modal' style={{ width: '30%' }} onHide={() => {if (!visible) return; setVisible(false); }} footer={footerContent}>
                <div className='container'>
                <section id='copy-text'>
                    <p className='message-header'>
                I hope this message finds you well. <br />
                    This is my request: 
                    </p>
                    <hr />
                    Data Insertion : <br />

                        -Entity : {displayButtons(Entity)}  <br />
                        -Country :  {displayButtons(Country)} {displaySelect(Country2)}  <br />
                        -ISP : {displaySelect(ISP)} <br />
                        -Domain : {Domain}  <br />
                        -Dashboard name : {DashboardName} <br />
                        <hr />

                  
                    Insertion conditions : <br />
                        -ISP : {ISP2} <br />
                        -Provider : {Provider} <br />
                        -Filter : {Filter} <br />
                        -List Name : {ListName} <br />
                        <hr />

                    Filters : {(Is_Amazon)?"Is_Amazon":""} {(Is_Paypal)?"Is_Paypal":""} {(Is_Fedex)?"Is_Fedex":""} {(Is_Insurance)?"Is_Insurance":""} {(Is_Hardbounce)?"Is_Hardbounce":""} <br />
                    
                    <hr />
                    Additional Information : {AdditionalInformation} <br />
                     
                    <hr />



                        Best regards,
                </section>
                </div>
            </Dialog>
    </div>
  )
}

export default Submit