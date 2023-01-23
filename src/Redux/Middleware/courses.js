import { actions } from '../action'

export const craeteNewCourse = ({ dispatch, getState }) => next => action => {
    if (action.type === 'CREATE_NEW_COURSE') {
        let name = action.payload.name;
        let description = action.payload.description;
        let categoryName = action.payload.categoryName;
        return fetch(`http://localhost:8000/courses/`, {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, description: description, categoryName: categoryName })
        }).then((response) => response.json())
            .then((data) => {
                dispatch(actions.setNewCourse(data.data))
            })
            .catch((err) => {
                console.log(err)
            })

    }
    return next(action)
}

export const setCourseDetails = ({ dispatch, getState }) => next => action => {
    if (action.type === 'SET_COURSE_DETAILS') {
        let currentCourseID = action.payload.currentCourseID;
        let arrStagesByCourse = action.payload.arrStagesByCourse;
        return fetch(`http://localhost:8000/courses/details`, {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ arrStagesByCourse: arrStagesByCourse, currentCourseID: currentCourseID })
        }).then((response) => response.json())
            .then((data) => {
            })
            .catch((err) => {
                console.log(err)
            })

    }
    return next(action)
};
export const getAllCourses = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_ALL_COURSES') {
        return fetch(`http://localhost:8000/courses/`)
            .then((response) => response.json())
            .then((data) => {
                dispatch(actions.setAllCourses(data.courses))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return next(action)
}
export const getCourseDetailsByCourseId = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_COURSE_DETAILS_BY_COURSE_ID') {
        
        const courseId = action.payload;
        return fetch(`http://localhost:8000/courses/getDetailsByCourseID/${courseId}`)
            .then((response) => response.json())
            .then((data) => {
                dispatch(actions.setDetailsByCourseId(data))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return next(action)
}
