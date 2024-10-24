import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    veiculos : JSON.parse(localStorage.getItem("veiculos")) || []
}

const localStorageSlice = createSlice({
    name: "localStorage",
    initialState,
    reducers: {
        uploadLS: (state, actions) =>{
            const ls = [
                ...state.veiculos,
                actions.payload
            ]

            state.veiculos = ls
            localStorage.setItem("veiculos",JSON.stringify(ls))
        }
    }
})

export const {uploadLS} = localStorageSlice.actions
export const getLS = (state)=> state.localStorage.veiculos
export default localStorageSlice.reducer
