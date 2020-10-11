import {
    ADD_FOOD,
    DELETE_FOOD,
    LOAD_CATEGORYS
}from '../type';


const initailState = {
    OrderCount: 0,
    FoodCategorys: [],
    CurrentOrder:[]
}


export default function(state = initailState,action){
    const { type, payload} = action;
    switch (type) {
        case ADD_FOOD:
            return state;
        case DELETE_FOOD:
            return state;
        case LOAD_CATEGORYS:
            return {
                ...state,
                FoodCategorys: payload
            }
        default:
            return  state;
    }
}