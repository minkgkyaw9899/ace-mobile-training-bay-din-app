import {configureStore} from '@reduxjs/toolkit';
import bayDingReducer from '../../../features/bay-din/bayDingSlice';
import countSice from '../../../features/count/countSice';

export const store = configureStore({
  reducer: {
    bayDin: bayDingReducer,
    count: countSice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
