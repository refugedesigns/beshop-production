import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    shippingFees: 22.99,
    discount: 0,
    totalPrice: 0,
    totalItems: 0,
    items: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingCartItem= state.items.find((item) => item.id === action.payload.id)
            if(existingCartItem) {
                existingCartItem.amount = existingCartItem.amount + action.payload.amount
                const calculateSubtotal = existingCartItem.amount * existingCartItem.price * ((100 - state.discount)/100)
                existingCartItem.subtotal = Number(calculateSubtotal).toFixed(2)
                const subtotals = state.items.map(item => item.subtotal).reduce((sum, item) => sum + item, 0)
                const calculateTotalPrice = subtotals + state.shippingFees    
                state.totalPrice = Number(calculateTotalPrice).toFixed(2)
                state.totalItems = state.items.map(item => item.amount).reduce((sum, item) => sum + item, 0)        
            }else {
                const subtotal = action.payload.price * ((100 - state.discount)/100)
                state.items.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    image: action.payload.image,
                    amount: action.payload.amount,
                    price: action.payload.price,
                    colors: action.payload.colors,
                    subtotal: subtotal,
                })
                state.totalItems += 1
            }
        },
        removeFromCart: (state, action) => {
            const existingCartItem = state.items.find(item => item.id === action.payload.id)
            state.totalItems--;
            if(existingCartItem.amount === 1) {
                state.items = state.items.filter(item => item.id !== action.payload.id)
                const subtotals = Number(state.items.map((item) => item.subtotal).reduce((sum, item) => sum + item, 0));
                state.totalPrice = subtotals !== 0 ? (subtotals + state.shippingFees).toFixed(2) : 0; 
            }else {
                existingCartItem.amount--
                existingCartItem.subtotal = Number(existingCartItem.amount * existingCartItem.price * ((100 - state.discount)/100)).toFixed(2)
                const subtotals = Number(state.items.map((item) => item.subtotal).reduce((sum, item) => sum + item, 0));
                state.totalPrice = Number(subtotals + state.shippingFees).toFixed(2); 
            }
        },
        clearCartItems: (state) => {
            state.items = []
            state.totalPrice = 0
            state.totalItems = 0
        },
        deleteFromCart: (state, action) => {
            const existingCartItem = state.items.find((item) => item.id === action.payload.id)
            state.items = state.items.filter((item) => item.id !== action.payload.id)
            const subtotals = state.items.map((item) => item.subtotal).reduce((sum, item) => sum + item, 0);
            state.totalPrice = subtotals + state.shippingFees; 
            state.totalItems = state.totalItems - existingCartItem.amount 
        },
        addDiscount: (state, action) => {
            state.discount = action.payload.discount
        },
        resetDiscount: (state) => {
            state.discount = 0
        }
    }
})


export const { addToCart, removeFromCart, clearCartItems, deleteFromCart, addDiscount, resetDiscount } = cartSlice.actions 

export const selectTotalItems = state => state.persistedReducers.cartReducer.totalItems

export const selectTotalPrice = state => state.persistedReducers.cartReducer.totalPrice

export const selectShippingFees = state => state.persistedReducers.cartReducer.shippingFees

export const selectCartItems = state => state.persistedReducers.cartReducer.items

export default cartSlice.reducer