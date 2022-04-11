import { combineReducers } from "redux";

const guidesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_GUIDE":
      return [...state, { text: action.payload.text, id: action.payload.id }];
    case "SHOW_GUIDE":
      return state.find((guide) => (guide.id = action.payload.id));

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  guides: guidesReducer,
});

export default rootReducer;

// adds new things to old state, specifically add guide case
//  switch statement takes in action and if the type is "ADD_GUIDE" it will run that case (guide reducer function will always run)
