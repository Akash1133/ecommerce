import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:'cart',
    initialstate:{
        product:[],
        quantity:0
    }
    
})