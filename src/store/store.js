import { configureStore } from '@reduxjs/toolkit'
import DataRequestReducer from '../features/DataRequest/dataRequestSlice'
import InsertionConditionReducer from '../features/InsertionCondition/insertionConditionSlice'
import {requestApi} from '../features/requestApi'


 const store = configureStore({
    reducer: {
        dataRequest : DataRequestReducer,
        insertionCondition : InsertionConditionReducer,
        [requestApi.reducerPath] : requestApi.reducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(requestApi.middleware)
    
})
export default store