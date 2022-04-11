import { combineReducers } from "redux";

const guidesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_GUIDE":
      return [...state, { ...action.payload }];
    case "FETCH_GUIDES":
      return [...action.payload];
    default:
      return state;
  }
};

const bossesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_BOSSES":
      return [...action.payload];
    default:
      return state;
  }
};

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return action.payload;
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  guides: guidesReducer,
  bosses: bossesReducer,
  user: userReducer,
});

export default rootReducer;

// adds new things to old state, specifically add guide case
//  switch statement takes in action and if the type is "ADD_GUIDE" it will run that case (guide reducer function will always run)
