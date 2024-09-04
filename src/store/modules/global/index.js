import { TYPES } from "./types"

const INITIAL_STATE = {
    open:false
}
export default function global(state = INITIAL_STATE, action) {      
    //estou testando o !state.open
            switch (action.type) {
                case TYPES.SET_OPEN:
                    return { ...state, open: !state.open }
                default:
                    return { ...state }
            }
}