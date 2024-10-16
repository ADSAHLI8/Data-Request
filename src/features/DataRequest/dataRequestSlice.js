import { createSlice } from "@reduxjs/toolkit"
  /**   Create initial state */
const initialState = {
    Entity : '',
    Country : '',
    Country2 : '',
    ISP : '',
    Domain : '',
    DashboardName:'',
    Is_Amazon : false,
    Is_Paypal: false,
    Is_Fedex:false,
    Is_Insurance:false,
    Is_Hardbounce:false
}
/** Create data request slice and actions */
const dataRequestSlice = createSlice({
    name : 'dataRequest',
    initialState,
    reducers:{
        changeEntity: (state,action) => {
            state.Entity=action.payload
        },
        changeCountry: (state,action) => {
            state.Country=action.payload
        },
        changeCountry2: (state,action) => {
            state.Country2=action.payload
        },
        changeISP: (state,action) => {
            state.ISP=action.payload
        },
        changeDomain: (state,action) => {
            state.Domain=action.payload
        },
        changeDashboardName: (state,action) => {
            state.DashboardName=action.payload
        },
        changeIs_Amazon: (state,action) => {
            state.Is_Amazon=action.payload
        },
        changeIs_Paypal: (state,action) => {
            state.Is_Paypal=action.payload
        },
        changeIs_Fedex: (state,action) => {
            state.Is_Fedex=action.payload
        },
        changeIs_Insurance: (state,action) => {
            state.Is_Insurance=action.payload
        },
        changeIs_Hardbounce: (state,action) => {
            state.Is_Hardbounce=action.payload
        },
        reset: (state) =>{
            state.Entity = ''
            state.Country = ''
            state.Country2 = ''
            state.ISP = ''
            state.Domain = ''
            state.DashboardName=''
            state.Is_Amazon = false
            state.Is_Paypal= false
            state.Is_Fedex=false
            state.Is_Insurance=false
            state.Is_Hardbounce=false
        },
    },
})
/** Export reducer and actions */
export default dataRequestSlice.reducer
export const {changeEntity,changeCountry,changeCountry2,changeISP,changeDomain,changeDashboardName,changeIs_Amazon,
    changeIs_Paypal,changeIs_Fedex,changeIs_Insurance,changeIs_Hardbounce,reset}= dataRequestSlice.actions