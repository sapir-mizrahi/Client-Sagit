import produce from 'immer';
import createReducer from "./ReducerUtils";

const initialState = {
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthDate: "01/01/2000",
    isUserManager: false,
    isUserNeedSignIn: false,
    isUserNeedSignUp: false,
    allUsers: [],
    filterCoursesForShow:[],
    filterCategoryForShow:[],
    allCoursesByCurrentUser:[]
};

const usersReducer = {
    setFilterCoursesForShow(state, action) {
        state.filterCoursesForShow = action.payload;
    },
    setFilterCategoryForShow(state, action) {
        state.filterCategoryForShow = action.payload;
    },
    setAllCoursesByCurrentUser(state, action) {
        state.allCoursesByCurrentUser = action.payload;
    },
    setCurrentUserDetails(state, action) {
        state._id = action.payload._id;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.birthDate = action.payload.birthDate;
    },
    setIsUserNeedSignIn(state, action) {
        state.isUserNeedSignIn = action.payload;
    },
    setIsUserNeedSignUp(state, action) {
        state.isUserNeedSignUp = action.payload;
    },
    setIsUserManager(state, action) {
        state.isUserManager = action.payload;
    },
    setAllUsers(state, action) {
        state.allUsers = action.payload;
        localStorage.setItem('allUsers', JSON.stringify(action.payload));
    }
}

export default produce((state, action) => createReducer(state, action, usersReducer), initialState);