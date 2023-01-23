import { actions } from '../action'

export const createNewPackageForUser = ({ dispatch, getState }) => next => action => {
    if (action.type === 'CREATE_NEW_PACKAGE_FOR_USER') {
        let userId = action.payload.userId;
        let packageForBuy = action.payload.packageForBuy;

        return fetch(`http://localhost:8000/packagesByUsers/`, {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: userId,
                packageForBuy: packageForBuy
            })
        }).then((response) => response.json())
            .then((data) => {
            })
            .catch((err) => {
                console.log(err)
            })

    }
    return next(action)
}


export const getPackagesByCurrentUser = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_PACKAGES_BY_CURRENT_USER') {
        return fetch(`http://localhost:8000/packagesByUsers/${action.payload}`)
            .then((response) => response.json())
            .then(async(data) => {
               await dispatch(actions.setPackagesByCurrentUser(data))
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return next(action)

}

export const getAllPackagesByUsers = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_ALL_PACKAGES_BY_USERS') {
        return fetch('http://localhost:8000/packagesByUsers/')
            .then((response) => response.json())
            .then((data) => {
                dispatch(actions.setAllPackagesByUser(data))
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return next(action)
}