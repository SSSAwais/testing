import { createStore ,applyMiddleware,compose} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import combinedReducer from "../redux/reducers";
import {persistReducer,persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persitConfig ={
    key:"persist-store",
    storage
}
const persistedReducer= persistReducer(persitConfig,combinedReducer);

const initialState={};
const middleware=[thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default createStore(persistedReducer,initialState,composeEnhancers(applyMiddleware(...middleware)))
const store= createStore(persistedReducer,initialState,composeEnhancers(applyMiddleware(...middleware)))

export const persistor =persistStore(store)
export default store;
