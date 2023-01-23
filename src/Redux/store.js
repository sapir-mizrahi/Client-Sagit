import { createStore, combineReducers, applyMiddleware } from 'redux';
import coursesReducer from './reducers/courses'
import categoriesReducer from './reducers/categories'
import lessonsReducer from './reducers/lessons'
import stagesReducer from './reducers/stages'
import usersReducer from './reducers/users'
import currentCourseReducer from './reducers/currentCourse'
import requestsReducer from './reducers/requests'
import packagesReducer from './reducers/packages'
import packagesByUserReducer from './reducers/packageseByUser'
import { addNewCategory, getAllCategories } from './Middleware/categories'
import { craeteNewCourse, setCourseDetails, getAllCourses, getCourseDetailsByCourseId } from './Middleware/courses'
import { createNewPackage, getAllPackages, deletePackage } from './Middleware/packages'
import { createNewUser, loginUser, getAllUsers } from './Middleware/users'
import { createNewRequest, getAllRequests } from './Middleware/requestsFromUsers'
import { createNewPackageForUser, getPackagesByCurrentUser, getAllPackagesByUsers } from './Middleware/packagesByUsers'

const reducer = combineReducers({
    coursesReducer, categoriesReducer, lessonsReducer, stagesReducer,
    currentCourseReducer, packagesReducer, usersReducer, requestsReducer, packagesByUserReducer
})
const Store = createStore(reducer, applyMiddleware(addNewCategory, getAllCategories,
    craeteNewCourse, setCourseDetails, getAllCourses, createNewPackage, getAllPackages,
    createNewUser, createNewRequest, loginUser, createNewPackageForUser, getAllRequests,
    getPackagesByCurrentUser, getCourseDetailsByCourseId, getAllUsers, getAllPackagesByUsers,
    deletePackage));
window.store = Store;
export default Store;
