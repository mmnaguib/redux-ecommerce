import {
    OPEN_SIDE_CART,
    CLOSE_SIDE_CART,
    TOGGLE_SIDE_CART,
    TOGGLE_SIDE_BAR,
    CLOSE_SIDEBAR,
} from './sidebar_types';

const initialState = {
    sideCartOpen: false,
    sidebarOpen: false,
};

const sidebarReducer = (state = initialState, action) => {
    switch(action.type){
        case OPEN_SIDE_CART:
            return{
            ...state,
            sideCartOpen: true
        };
        case CLOSE_SIDE_CART:
            return{
            ...state,
            sideCartOpen: false
        };
        case TOGGLE_SIDE_CART:
            return{
            ...state,
            sideCartOpen: !state.sideCartOpen,
        };
        case CLOSE_SIDEBAR:
            return{
            ...state,
            sidebarOpen: false,
        };
        case TOGGLE_SIDE_BAR:
            return{
            ...state,
            sidebarOpen: !state.sidebarOpen,
        };
        default:
            return state;
    }
}

export default sidebarReducer;