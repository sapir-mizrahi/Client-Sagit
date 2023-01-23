import produce from 'immer';
import createReducer from "./ReducerUtils";

const initialState = {
    packagesByUser: [],
    allPackagesByUser: []
};

const packagesByUserReducer = {
    async setPackagesByCurrentUser(state, action) {
        await (state.packagesByUser = action.payload);
        localStorage.setItem('coursesByUser', JSON.stringify(action.payload));

    },
    setAllPackagesByUser(state, action) {
        state.allPackagesByUser = action.payload;
    },
}

export default produce((state, action) => createReducer(state, action, packagesByUserReducer), initialState);