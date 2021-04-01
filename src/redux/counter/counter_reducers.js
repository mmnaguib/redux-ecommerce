import {INCREASE_ITEM, DECREASE_ITEM} from './counter_types';

const initailState = {
    item:0
}
const counterReducers = (state = initailState, action) => {
    switch(action.type){
        case INCREASE_ITEM:
            return{
                ...state,
                item: action.payload
            };
            
        case DECREASE_ITEM:
            return{
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}
export default counterReducers;
