import { createSlice } from "@reduxjs/toolkit";

export const FacebookReducer = createSlice({
    name:'facebook',
    initialState:{
       Posts:[

       ],
       events:[

       ],
       GoogleUser:{

       }
    },
    reducers:{
        AddPost:(state,action)=>{
            return{
                ...state,
                Posts:[...state.Posts,action.payload]
            }
        },
        Createevent:(state,action)=>{
            return{
                ...state,
                events:[...state.events,action.payload]
            }
        },
        AddGoogleDetails:(state,action)=>{
            return{
                ...state,
                GoogleUser:action.payload
            }
        }
    }
})

export const {AddPost,Createevent,AddGoogleDetails} = FacebookReducer.actions
export default FacebookReducer.reducer