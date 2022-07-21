import { configureStore } from '@reduxjs/toolkit'
import { CharacterModal } from '../../interfaces/interface';
import { mainReducer } from '../reducer/commomReducer'
// ...


interface StoreInterface {
    favouriteList: string;
    charList: CharacterModal[]
}

export const store = configureStore<any>({
    reducer: {
        mainReducer,
    },
});

// export const store = configureStore({
//     reducer: {
//         mainReducer,
//     },
//   })

export type RootState = ReturnType<typeof store.getState>;
// export type RootState= ReturnType<typeof store>