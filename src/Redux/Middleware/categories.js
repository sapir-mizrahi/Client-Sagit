import { actions } from '../action'

export const addNewCategory = ({ dispatch, getState }) => next => action => {
    if (action.type === 'ADD_NEW_CATEGORY') {
        let name = action.payload.name;
        let courseId = action.payload.courseId;
        return fetch(`http://localhost:8000/categories`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, courseId: courseId })
        }).then((res) => {
        })

    }
    return next(action)
}

export const getAllCategories = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_ALL_CATEGORIES') {
        return fetch(`http://localhost:8000/categories/`)
            .then((response) => response.json())
            .then((data) => {
                dispatch(actions.setAllCategories(data))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return next(action)
}
