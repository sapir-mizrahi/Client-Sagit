import produce from 'immer';
import createReducer from "./ReducerUtils";

const initialState = {
    arrLessons: [],
    currentVideoLesson: ''
};

const lessonsReducer = {
    setArrLessons(state, action) {
        
        state.arrLessons.push(action.payload);
    },
    resetArrLessons(state, action) {
        state.arrLessons = [];
    },
    setCurrentVideoLesson(state, action) {
        
        state.currentVideoLesson = action.payload;
    }
}
export default produce((state, action) => createReducer(state, action, lessonsReducer), initialState);