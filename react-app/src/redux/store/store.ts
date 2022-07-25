import { createStore } from "redux";
import rootReducers from "../reducer/rootReducers";
// import { configureStore } from '@reduxjs/toolkit'
// import { CharacterAction, CharacterModal, DispatchType } from '../../interfaces/interface';




export const store = createStore(rootReducers);

export type RootState = ReturnType<typeof store.getState>;

// export const store : Store<CharacterModal, CharacterAction> & {
//     dispatch: DispatchType }= createStore(
//        mainReducer,

// )

// export const store = configureStore({
//     reducer: {
//         mainReducer,
//     },
//   })

// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

// export type RootState= ReturnType<typeof store>