import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const requestApi = createApi({
    reducerPath:"requestApi",
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:4000'}),
    endpoints : (builder) => (
        {
            addRequest : builder.mutation({
                query : (user) =>({
                    url : "/",
                    method : 'POST',
                    body : user
                })
            })
        }
    )
})
export const {useAddRequestMutation} = requestApi