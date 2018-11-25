import { GET_USER } from '../actions';

export default function reducer(state={}, action) {
    switch(action.type) {

        case GET_USER: 
            return action.data; //пока работаем только с одним юзером

        default:
            return state;
    };
};