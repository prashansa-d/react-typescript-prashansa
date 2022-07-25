import { CHARACHTER_LIST, FAVOURITE_LIST } from "../action/action-typers"
import { CharacterAction, CharacterModal } from '../../interfaces/interface';
import { PayloadAction } from "@reduxjs/toolkit";


let initialState: { favouriteList: number[]; charList: CharacterModal[] } = {
    // let initialState = {
        favouriteList: [],
        charList: []
    }
// type CharacterAction = {
//     type: string 
//     payload: CharacterModal
// }



// export const mainReducer = (state = initialState, action: { type: string; payload: CharacterModal[] }) => {
export const mainReducer = (state = initialState, action: CharacterAction) => {
    switch (action.type) {

        case CHARACHTER_LIST:

            return {
                ...state, 
                charList: action.payload
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