import UserContext from "./userContext";
import { useReducer } from "react";
import { LOGIN, LOGOUT, REGISTER,SEEN_WELCOME, STRAVA } from "./userActions";
import userReducer from "./userReducer";


export default function UserState(props) {
    

    const initialState = {
        user: null,
        seenWelcome: false,
        strava: null
    }

    const [state, dispatch] = useReducer(userReducer, initialState)

    const login = (user) => {
        dispatch({
            type: LOGIN,
            payload: user
        })
    }

    const strava = (user) => {
        dispatch({
            type: STRAVA,
            payload: true
        })
    }
 

    const logout = () => {
        dispatch({
            type: LOGOUT,
        })
    }

    const register = (user) => {
        dispatch({
            type: REGISTER,
            payload: user
        })
    }

    const seenWelcome = () => {
        dispatch({
            type: SEEN_WELCOME,
            payload: true
        })
    }

    return (
        <UserContext.Provider value={{
            state, login, logout, register, seenWelcome, strava
        }}>
            {props.children}
        </UserContext.Provider>
    )
}