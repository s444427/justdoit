// General react imports
import {createStore, compose} from "redux";
import {combineReducers} from "redux";

// Project specific files
import {
    yachts_content,
    current_yacht,
} from "./States/States";

// CSS files


let storeReducer = combineReducers(
    {
        yachts_content,
        current_yacht,
    }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose();

export const store = createStore(storeReducer, composeEnhancers());
