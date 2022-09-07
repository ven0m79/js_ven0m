import {ADD_USER, DEL_USER} from "./types";


export const addUser = ( user ) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

export const delUsers = () => {
    return {
        type: DEL_USER,
        payload: []
    }
}