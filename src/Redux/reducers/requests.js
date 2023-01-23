import produce from 'immer'
import createReducer from './ReducerUtils'

const initialState = {
    requests: []
};

const requestsReducer = {
    setAllRequests(state, action) {
        state.requests = action.payload;
    }
}

export default produce((state, action) => createReducer(state, action, requestsReducer), initialState);