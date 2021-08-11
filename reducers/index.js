import user from "./Auth";
import { createStore,combineReducers } from "redux";
import { applyMiddleware } from "redux";
import  thunkMiddleware  from "redux-thunk";

const rootReducer = combineReducers({
    user,
})

const middleware = applyMiddleware(thunkMiddleware);

const Store = createStore(rootReducer,middleware);

export default Store;