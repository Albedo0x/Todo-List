import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import taskReduxReducer from "./taskreducer";

const rootReducer = combineReducers({
  task: taskReduxReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
