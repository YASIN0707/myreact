import  {GM,GE} from "./message.action"

let initialState = {
    msg:"Hello"
}

let messageReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'GM':
            return {msg:"Good Morning"}
        case 'GE':
            return {msg:"Good Evening"}
        default:
            return state
    }
}
export {messageReducer}