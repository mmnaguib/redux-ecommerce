import { INCREASE_ITEM, DECREASE_ITEM } from './counter_types';

export const increase = (item) => {
    return{
        type: INCREASE_ITEM,
        payload: item+1
    }
}
export const decrease = (item) => {
    return{
        type: DECREASE_ITEM,
        payload: item-1
    }
}