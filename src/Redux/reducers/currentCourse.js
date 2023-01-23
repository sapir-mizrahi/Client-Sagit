import produce from 'immer';
import createReducer from "./ReducerUtils";

const initialState = {
    _id: '',
    name: '',
    description: '',
    categoryName: ''
};

const currentCourseReducer = {
    setNewCourse(state, action) {
        state._id = action.payload._id;
        state.name = action.payload.name;
        state.description = action.payload.description;
        state.categoryName = action.payload.categoryName;
    }
}
export default produce((state, action) => createReducer(state, action, currentCourseReducer), initialState);