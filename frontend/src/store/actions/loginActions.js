import Axios from "../../axios";
import {SET_LOGGED_IN_USER, USER_LOGIN} from "../actionTypes";
import {getLoggedInUserAction} from "./userActions";
import {resetError, setError} from "./errorActions";


export const sendLogin = (token) => {
    return {
        type: USER_LOGIN,
        payload: token,
    };
};


export const setLoggedInUser = (userObj) => {
    localStorage.setItem("profile", JSON.stringify(userObj));
    return {
        type: SET_LOGGED_IN_USER,
        payload: userObj,
    };
};


export const sendLoginAction = data => async (dispatch) => {
    try {
        const response = await Axios.post('/auth/token/', data);
        const {data: {access: token},} = response

        dispatch(getLoggedInUserAction())
        dispatch(sendLogin(token));
        dispatch(resetError())
        localStorage.setItem("token", token);
        return response
    } catch (error) {
        if(error.response.data.detail)dispatch(setError(error.response.data.detail))
        return error
    }
}


