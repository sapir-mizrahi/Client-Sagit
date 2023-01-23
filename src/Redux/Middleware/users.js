import { actions } from '../action'

export const createNewUser = ({ dispatch, getState }) => next => action => {
    if (action.type === 'CREATE_NEW_USER') {
        let user = action.payload;
        return fetch('http://localhost:8000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.message === 'Add new user') {
                    localStorage.setItem('user-info', JSON.stringify(data.data));
                    localStorage.setItem('user-need-signin', JSON.stringify(false));
                    if (data.data.email === 'manager@gmail.com' && data.data.password === 'manager123') {
                        dispatch(actions.setIsUserManager(true))
                    }
                }
                else {
                    if (data.message === 'user already exist') {
                        localStorage.setItem('user-need-signin', JSON.stringify(true));
                        dispatch(actions.setIsUserNeedSignIn(true))
                    }
                }
            })
            .catch((err) => {
                console.log(err)
            })

    }
    return next(action)
}


export const loginUser = ({ dispatch, getState }) => next => action => {
    if (action.type === 'LOGIN_USER') {
        let email = action.payload.userNameEmail
        let password = action.payload.password
        return fetch(`http://localhost:8000/user/${email}/${password}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.data === null) {
                    localStorage.setItem('user-need-signup', JSON.stringify(true));
                    dispatch(actions.setIsUserNeedSignUp(true))
                    dispatch(actions.setIsUserNeedSignIn(false))
                }
                else {
                    if (data.data.email === 'manager@gmail.com' && data.data.password === 'manager123') {
                        dispatch(actions.setIsUserManager(true))
                        localStorage.setItem('kind-of-user', JSON.stringify('manager'));

                    }
                    else {
                        localStorage.setItem('kind-of-user', JSON.stringify(''));
                    }
                    localStorage.setItem('user-info', JSON.stringify(data.data));
                    localStorage.setItem('user-need-signup', JSON.stringify(false));
                    dispatch(actions.setIsUserNeedSignUp(false))
                    dispatch(actions.setCurrentUserDetails(data.data))

                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return next(action)

}

export const getAllUsers = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_ALL_USERS') {
        return fetch('http://localhost:8000/user')
            .then((response) => response.json())
            .then((data) => {
                console.log("data", data);
                dispatch(actions.setAllUsers(data))
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return next(action)
}