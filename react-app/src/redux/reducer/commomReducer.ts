import { CHARACHTER_LIST, FAVOURITE_LIST } from "../action/action-typers"
import { CharacterModal } from '../../interfaces/interface';

// let initialState: { favouriteList: CharacterModal[]; charList: CharacterModal[] } = {
let initialState = {
    favouriteList: [],
    charList: []
}




// export const mainReducer = (state = initialState, action: { type: string; payload: CharacterModal[] }) => {
export const mainReducer = (state = initialState, action: any) => {
    switch (action.type) {

        case CHARACHTER_LIST:

            return {
                ...state, charList: action.payload
            }

        case FAVOURITE_LIST:
            return {
                ...state,
                favouriteList: action.payload
            }

        default:
            return state
    }
}