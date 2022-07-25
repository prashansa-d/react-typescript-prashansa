import { CharacterModal } from "../../interfaces/interface";
import { CHARACHTER_LIST, FAVOURITE_LIST } from "./action-typers";

export const FavouriteListAction = (data: number[]) => ({
    type: FAVOURITE_LIST,
    payload: data,
})


export const CharaListAction = (data: CharacterModal[]) => ({
    type: CHARACHTER_LIST,
    payload: data
})