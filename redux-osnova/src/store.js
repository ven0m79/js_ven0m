import {combineReducers, createStore} from "redux";
import {users} from "./redux/reducer";

const reducer = combineReducers({
    users
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store;