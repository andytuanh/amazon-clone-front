import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from './constants/productConstants' 

export const initialState = {
    basket: [],
    user: null
}

function reducer(state, action) {
    switch (action.type) {
        case ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case REMOVE_FROM_BASKET:
            break
        case 'REMOVE_ALL':
            return {
                basket: []
            }
        default:
            return state
    }


}

export default reducer