//no longer needed with Toolkit
// import { CATEGORIES_ACTION_TYPES } from './category.types';

import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
};

//similar structure to User Toolkit reducer
export const categoriesReducerSlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

//no longer needed with Toolkit
// export const categoriesReducer = (
//   state = CATEGORIES_INITIAL_STATE,
//   action = {}
// ) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
//       return { ...state, categories: payload };
//     default:
//       return state;
//   }
// };

export const { setCategories } = categoriesReducerSlice.actions;
//actions is property of object - contains all ACTIONS from within slice reducer

export const categoriesReducer = categoriesReducerSlice.reducer;
