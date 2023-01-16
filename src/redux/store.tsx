import {configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {articlesApi} from "./reducers/arcticles";

export const store = configureStore({
    reducer: {
        [articlesApi.reducerPath]: articlesApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(articlesApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useRootDispatch: () => AppDispatch = useDispatch
export const useRootSelector: TypedUseSelectorHook<RootState> = useSelector