import produce from 'immer';
import createReducer from "./ReducerUtils";

const initialState = {
    arrStages: []
};

const stagesReducer = {
    setArrStages(state, action) {
        state.arrStages.push(action.payload);
    }
}

export default produce((state, action) => createReducer(state, action, stagesReducer), initialState);