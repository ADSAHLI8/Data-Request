import { createSlice } from "@reduxjs/toolkit"
import { reset } from "../DataRequest/dataRequestSlice"

/** Create initial state */
const initialState = {
    ISP2 : '',
    Provider : '',
    Filter : '',
    ListName : '',
    AdditionalInformation : '',
   
}
/** Create insertion condition slice and actions */

const insertionConditionSlice = createSlice({
    name : 'insertionCondition',
    initialState,
    reducers:{
        changeISP2: (state,action) => {
            state.ISP2=action.payload
        },
        changeProvider: (state,action) => {
            state.Provider=action.payload
        },
        changeFilter: (state,action) => {
            state.Filter=action.payload
        },
        changeListName: (state,action) => {
            state.ListName=action.payload
        },
        changeAdditionalInformation: (state,action) => {
            state.AdditionalInformation=action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(reset,(state)=>{
            state.ISP2=''
            state.Provider=''
            state.Filter=''
            state.ListName=''
            state.AdditionalInformation=''
        })
    }
})
/** Export reducer and actions */
export default insertionConditionSlice.reducer
export const {changeISP2,changeProvider,changeFilter,changeListName,changeAdditionalInformation}= insertionConditionSlice.actions