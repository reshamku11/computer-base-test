import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import authReducer from "./reducers/authReducer";
import languageReducer from "./reducers/languageReducer";
import examReducer from "./reducers/examReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  language: languageReducer,
  exam: examReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
