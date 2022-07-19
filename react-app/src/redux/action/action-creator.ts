import { CHARACHTER_LIST, FAVOURITE_LIST } from "./action-typers";

export const FavouriteListAction = (data: any) => ({
    type: FAVOURITE_LIST,
    payload: data,
})


export const CharaListAction = (data: any) => ({
    type: CHARACHTER_LIST,
    payload: data
})