import { combineReducers, createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  doctorsReducer,
  specializationsReducer,
  governoratesReducer,
  citiesReducer,
  joinRequestReducer,
  verifyRegisterationReducer,
  checkVerificationReducer,doctorInfoReducer,
  adminVerifyReducer,
} from "./reducer";

const rootReducer = combineReducers({
  doctorsReducer,
  governoratesReducer,
  specializationsReducer,
  citiesReducer,
  joinRequestReducer,
  verifyRegisterationReducer,
  checkVerificationReducer,
  adminVerifyReducer,doctorInfoReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
