import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as productsReducer } from "./products/reducer";

const rootElement = combineReducers({
  productsReducer,
});

export const store = legacy_createStore(rootElement, applyMiddleware(thunk));
