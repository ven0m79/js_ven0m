import {ADD_USER, DEL_USER} from "./types";

export const users = (state = [], action) => {
    switch (action.type) {
        case ADD_USER:
            return [...state, action.payload]
            case DEL_USER:
                return action.payload
    }
    return state;
}