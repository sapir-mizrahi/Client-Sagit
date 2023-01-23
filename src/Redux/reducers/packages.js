import produce from 'immer'
import createReducer from './ReducerUtils'

const initialState = {
    packages: [],
    currentPackageForBuy: {}
};

const packagesReducer = {
    setAllPackages(state, action) {
        state.packages = action.payload;
    },
    setCurrentPackageToBuy(state, action) {
        state.currentPackageForBuy = action.payload;
    }
}

export default produce((state, action) => createReducer(state, action, packagesReducer), initialState);