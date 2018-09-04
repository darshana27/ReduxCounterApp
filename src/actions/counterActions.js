import {SET_COUNTER,INCREMENT, DECREMENT,CLEAR} from './types'
export const counterIncrement = () =>{
    return{
        type : INCREMENT
    }
}

export const counterDecrement=()=>{
    return{
        type : DECREMENT
    }
}

export const counterClear=()=>{
    return{
        type : CLEAR
    }
}

export const counterSet = (receivednumber) => {
    return{
        type:SET_COUNTER,
        payload:receivednumber
    }
}