import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
 } from './constants';

const initialStateSearch = {
    searchField: ''
}

// searchRobots is the action thats taking place using searchfield
// state=initialState is the default state that we're changing
export const searchRobots = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            // returning a new state that sets the searchField to the payload of the action
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}

const initialStateRobots = {
    isPending: false,
    robos: [],
    error: ''
}

export const requestRobots = (state=initialStateRobots, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            // Object.assign(empty obj, current state, new state)
            return Object.assign({}, state, {isPending: true })
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robos: action.payload, isPending: false})
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false})
        default:
            return state;
    }
}