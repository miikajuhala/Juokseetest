import { LOGIN, LOGOUT, REGISTER, SEEN_WELCOME } from "./userActions";

const userActions = (state, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload
            }
        case LOGOUT:
            return {
                ...state,
                user: null
            }
        case REGISTER:
            return {
                ...state,
                user: action.payload
            }
        case SEEN_WELCOME:
            return {
                ...state,
                seenWelcome: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default userActions