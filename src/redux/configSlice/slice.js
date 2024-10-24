import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    options : [
        {
            name:"veiculo",
            value:null,
            optionsArray: [
                {
                    nome:"carros",
                    codigo: "carros",
                },
                {
                    nome:"motos",
                    codigo: "motos",
                },
                {
                    nome:"caminhões",
                    codigo: "caminhoes",
                },
            ]
        },
        {
            name:"marcas",
            value:null,
            
        },
        {
            name:"modelos",
            value:null
        },
        {
            name:"anos",
            value:null
        },
        {
            name:"valor",
            value:null
        }
    ],
    url : {
        baseURL:"https://parallelum.com.br/fipe/api/v1",
        veiculo: null,
        marcas:null,
        modelos:null,
        anos:null,
    }
}

const configSlice = createSlice({
    name: "config",
    initialState,
    reducers:{
        uploadValue: (state, action)=>{
            let optionObj = state.options[action.payload.index]
            optionObj.value = action.payload.value

            for (let i = action.payload.index +1; i< state.options.length; i++) {
                const element = state.options[i];
                element.value = null
                element.optionsArray = null
            }
        },
        uploadUrl : (state, action) => {
            const {key, value} = action.payload
            state.url[key] = value
        },
        uploadOptions: (state, action)=>{
            let optionObj = state.options[action.payload.index]

            optionObj.optionsArray = action.payload.value
        },
        
    }
})

export default configSlice.reducer

export const getState = (state) => state.config.options
export const getUrl = (state) => state.config.url

export const {uploadValue, uploadUrl, uploadOptions} = configSlice.actions