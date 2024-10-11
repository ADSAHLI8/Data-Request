import React from 'react'
import { SelectButton } from 'primereact/selectbutton';
import entityOptions from "../../data/entityOptions";
import countryOptions from "../../data/countriesOptions";
import ispOptions from '../../data/ispOptions';
import CreatableSelect from 'react-select/creatable';
import { InputText } from "primereact/inputtext";
import { InputSwitch } from "primereact/inputswitch";
import { Card } from 'primereact/card';
import countries2Options from '../../data/countries2Options';
import "../../css/dataRequest.css"
import { useDispatch, useSelector } from 'react-redux';
import {changeEntity,changeCountry,changeCountry2,changeISP,changeDomain,changeDashboardName,changeIs_Amazon,
  changeIs_Paypal,changeIs_Fedex,changeIs_Insurance,changeIs_Hardbounce} from './dataRequestSlice'

/**
 * @component
 * 
 * @returns{JSX.Element} 
 */


const DataRequest = () => {
  /** Defining a state for each form element */
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
   /** Calling use dispatch */
   const dispatch = useDispatch()
   /** Return data request Form */
  return (
    <div className='r'>
      <Card title="Entity">
            <SelectButton value={Entity} onChange={(e)=>dispatch(changeEntity(e.target.value))} className='entity'  optionLabel="name" name='entity' options={entityOptions} multiple />
      </Card>
      <Card title="Country">
    <div className="card flex justify-content-center">
            <SelectButton value={Country} onChange={(e)=>dispatch(changeCountry(e.target.value))} optionLabel="name" className='countries' name='country'  options={countryOptions} multiple />
    </div>
    <div className="select-group">
        <CreatableSelect
          isMulti
          name="country2"
          className="select"
          options={countries2Options}
          classNamePrefix="select"
          placeholder = "Select Another Country"
          onChange={(e)=>dispatch(changeCountry2(e))}
          value={Country2}
          />
    </div>
      </Card>
      <div className='cards'>

      <Card>
    <div className="label-inline" id='isp-label'>
        ISP
    </div>
        <CreatableSelect
          isMulti
          id='isp-select'
          name="isp"
          className="select"
          options={ispOptions}
          classNamePrefix="select"
          placeholder = "Select ISP"
          onChange={(e)=>dispatch(changeISP(e))}
          value={ISP}
          />
    <div className="label-inline " id='domain-label' >
        Domain
    </div>
        <InputText 
          id='domain-input'
          name="domain"
          className="input"
          placeholder = "Input Domain"
          onChange={(e)=>dispatch(changeDomain(e.target.value))}
          value={Domain}
          />
    <div className="label" id='dashboard-name-label'>
        Dashboard Name
    </div>
      <InputText 
      id='dashboard-name-input'
      className='input'
      value={DashboardName} 
      name="dashboardName"
      placeholder = "Input Dashboard Name"
      onChange={(e)=>dispatch(changeDashboardName(e.target.value))} />
      </Card>
    <Card >
      <div className='switch'>
        <div className="switch-label" id='isAmazon'>
         Is_Amazon
        </div>
        <InputSwitch checked={Is_Amazon} name ="isAmazon" className='switch-input'  onChange={(e)=>dispatch(changeIs_Amazon(e.target.value))} />
      </div>
      <div className='switch'>
       <div className="switch-label" id='isPaypal'>
        Is_Paypal
       </div>
        <InputSwitch checked={Is_Paypal} name ="isPaypal" className='switch-input' onChange={(e)=>dispatch(changeIs_Paypal(e.target.value))} />
      </div>
      <div className='switch'>
       <div className="switch-label" id='isFedex'>
        Is_Fedex
      </div>
        <InputSwitch checked={Is_Fedex} name ="isFedex" className='switch-input' onChange={(e)=>dispatch(changeIs_Fedex(e.target.value))} />
      </div>
      <div className="switch">
       <div className="switch-label" id='isInsurance'>
        Is_Insurance
      </div>
        <InputSwitch checked={Is_Insurance} name ="isInsurance" className='switch-input' onChange={(e)=>dispatch(changeIs_Insurance(e.target.value))} />
      </div>
      <div className="switch">
       <div className="switch-label" id='isHardbounce'>
        Is_Hardbounce
      </div>
      <InputSwitch checked={Is_Hardbounce} name ="isHardbounce" className='switch-input' onChange={(e)=>dispatch(changeIs_Hardbounce(e.target.value))} />
      </div>
        </Card>      
      </div>
        
    </div>
  )
}
/** Export Component */
export default DataRequest