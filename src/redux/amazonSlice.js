import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   products:[],
   userInfo:[],
}

export const amazonSlice = createSlice({
    name:"amazon",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            // state.products = action.payload
            
            //to increase quatity
            const item = state.products.find((item)=>item.id === action.payload.id)
            if(item)
             {
                item.quantity += action.payload.quantity;
             }
             else
             {
                 state.products.push(action.payload);
             }            
        },
        deleteItem:(state,action)=>{
            state.products = state.products.filter((item)=>item.id!==action.payload)
        },
        resetCart:(state)=>{
            state.products=[]
        },
        increment:(state,action)=>{
            const it = state.products.find((item)=>item.id === action.payload.id)
            if(it)
            {
                it.quantity = action.payload.quantity+1;
            }
            
        },
        decrement:(state,action)=>{
            const it = state.products.find((item)=>item.id === action.payload.id)
            if(it)
            {
                if (action.payload.quantity>1)
                {
                    it.quantity = action.payload.quantity - 1;
                }
                else 
                {
                    state.products = state.products.filter((item)=>item.id !== action.payload.id)
                }                
            }
        }
    }
})

export const {addToCart,deleteItem,resetCart,increment,decrement} = amazonSlice.actions
export default amazonSlice.reducer