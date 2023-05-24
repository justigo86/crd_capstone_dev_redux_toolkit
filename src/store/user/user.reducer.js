import { createSlice } from "@reduxjs/toolkit";
// import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

// no longer required after implementing Redux Toolkit syntax below
// export const userReducer = (state = INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return { ...state, currentUser: payload };
//     default:
//       return state;
//   }
// };

//using Toolkit allows us to condense .action.js, .reducer.js, and .types.js files into one reducer:
export const userReducerSlice = createSlice({
  //generates slice (as an object) to replace reducer and types
  name: "users",
  initialState: INITIAL_STATE,
  reducers: {
    //define name of reducer function that represents the action that updates user reducer state slice
    // setCurrentUser: () => {}   //same function written with different syntax above
    setCurrentUser(state, action) {
      //action = every action that passes through the store
      state.currentUser = action.payload; //same as switch/case below - generates new object
    },
  },
});

export const { setCurrentUser } = userReducerSlice.actions;
//actions is property of object - contains all ACTIONS from within slice reducer

export const userReducer = userReducerSlice.reducer;
//reducer from slice
