import { configureStore } from '@reduxjs/toolkit'
import { mainReducer } from '../reducer/commomReducer'
// ...

export const store = configureStore<any>({
    reducer: {
        mainReducer,
    },
});

// export type RootState= ReturnType<typeof store>