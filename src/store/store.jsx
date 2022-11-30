import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger/src";
import { rootReducer } from "./root-reducer";

export const store = createStore(rootReducer, applyMiddleware(logger));
