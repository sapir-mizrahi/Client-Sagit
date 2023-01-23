import produce from 'immer';
import createReducer from "./ReducerUtils";

const initialState = {
    courses: [],
    courseDetails:{}
};

const coursesReducer = {
    setAllCourses(state, action) {
        
        state.courses = action.payload;
    },
    setDetailsByCourseId(state, action) {
        state.courseDetails = action.payload;
    },
}

export default produce((state, action) => createReducer(state, action, coursesReducer), initialState);