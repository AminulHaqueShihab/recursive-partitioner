import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query';
import mainApi from './services/mainApi';

// import Api's

export const store = configureStore({
	reducer: {
		[mainApi.reducerPath]: mainApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(mainApi.middleware).concat(),
	devTools: true,
});

// infer the `RootState` and `AppDispatch` types fro m the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {});

setupListeners(store.dispatch);
