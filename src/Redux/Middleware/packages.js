import { actions } from '../action'

export const createNewPackage = ({ dispatch, getState }) => next => action => {
    if (action.type === 'CREATE_NEW_PACKAGE') {
        let name = action.payload.name;
        let description = action.payload.description;
        let imgSrc = action.payload.imgSrc;
        let price = action.payload.price;
        let arrCourses = action.payload.arrCourses;
        return fetch(`http://localhost:8000/packages/`, {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                description: description,
                imgSrc: imgSrc,
                price: price,
                arrCourses: arrCourses
            })
        }).then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err)
            })

    }
    return next(action)
}

export const getAllPackages = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_ALL_PACKAGES') {
        return fetch(`http://localhost:8000/packages/`)
            .then((response) => response.json())
            .then((data) => {
                dispatch(actions.setAllPackages(data.packages))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return next(action)
}
export const deletePackage = ({ dispatch, getState }) => next => action => {
    if (action.type === 'DELETE_PACKAGE') {
        let packageId = action.payload;
        return fetch(`http://localhost:8000/packages/${packageId}`, {
            mode: 'cors',
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
            .then((data) => {
            })
            .catch((err) => {
                console.log(err)
            })

    }
    return next(action)
}