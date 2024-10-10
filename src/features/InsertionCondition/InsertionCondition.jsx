
import { InputText } from "primereact/inputtext";
import "../../css/dataRequest.css"
import filterOptions from "../../data/filterOptions";
import { SelectButton } from 'primereact/selectbutton';
import { InputTextarea } from "primereact/inputtextarea";
import { useDispatch, useSelector } from "react-redux";
import {changeISP2,changeProvider,changeFilter,changeListName,changeAdditionalInformation} from "./insertionConditionSlice"

/**
 * @component
 * 
 * @returns{JSX.Element} 
 */

const InsertionCondition = () => {
  /** Defining a state for each form element */
  const ISP2 = useSelector((state)=>state.insertionCondition.ISP2)
  const Provider = useSelector((state)=>state.insertionCondition.Provider)
  const Filter = useSelector((state)=>state.insertionCondition.Filter)
  const ListName = useSelector((state)=>state.insertionCondition.ListName)
  const AdditionalInformation = useSelector((state)=>state.insertionCondition.AdditionalInformation)
/** Call use Dispatch */
  const dispatch = useDispatch()
/** Return insertion conditions form */
  return (
    <div className="">
      <div className="line">
      <div className="isp-domain">
      <div className="label" id="isp2-label">
        ISP
      </div>
      <div className="label" id="provider-label">
        Provider
      </div>
      </div>
      <div className="isp-domain">
      <InputText 
      className='input'
      id="isp2-input"
      value={ISP2} 
      name="isp2"
      placeholder = "Input ISP"
      onChange={(e)=>dispatch(changeISP2(e.target.value))} 
      />
    <InputText 
      className='input'
      value={Provider} 
      name="provider"
      id="provider-input"
      placeholder = "Input Provider"
      onChange={(e)=>dispatch(changeProvider(e.target.value))} 
      />
    </div>
    </div>
    <div className="line">
    <div className="isp-domain">
    <div className="label" id="filter-label">
        Filter
    </div>
    <div className="label" id="list-name-label">
        List Name
    </div>
    </div>
    <div className="isp-domain">
      <SelectButton 
       id="filter-select"
       value={Filter}
       onChange={(e)=>dispatch(changeFilter(e.target.value))} 
       optionLabel="name" 
       name='filter' 
       options={filterOptions}  />
      <InputText 
      id="list-name-input"
      className='input'
      value={ListName} 
      name="listName"
      placeholder = "Input List Name"
      onChange={(e)=>dispatch(changeListName(e.target.value))}
       />
    </div>
    </div>
    <div className="label" id="text-area-label">
        Additional Information
    </div>
    <InputTextarea 
    keyFilter="int"
    className="text-area"
    placeholder="Any additional information..."
    value={AdditionalInformation} 
    name="additionalInformation" 
    onChange={(e)=>dispatch(changeAdditionalInformation(e.target.value))} 
    rows={6} cols={70} />
    </div>
  )
}
/** Export Component */
export default InsertionCondition