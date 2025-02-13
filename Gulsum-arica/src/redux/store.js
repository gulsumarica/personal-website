import {
  combineReducers,
  legacy_createStore as createStore,
} from "@reduxjs/toolkit";
import languageReducer from "./reducers/languageReducer";

const rootReducer = combineReducers({
  language: languageReducer,
});

const store = createStore(rootReducer);

export default store;
