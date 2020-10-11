import axios from 'axios';
import {
    LOAD_CATEGORYS,
    ADD_FOOD,
    DELETE_FOOD

}from '../type';


export const loadCategorys = () => async dispatch => {
    axios.get('http://localhost:3000/categorys')
    .then((res) => {
        dispatch({
            type: LOAD_CATEGORYS,
            payload: res.data
        })
    })
    .catch((err) => {
        console.log(err);
    })
}

