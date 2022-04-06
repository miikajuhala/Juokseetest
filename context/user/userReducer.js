import { LOGIN, LOGOUT, REGISTER, SEEN_WELCOME, STRAVA } from "./userActions";

const userActions = (state, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload
            }
            case STRAVA:
                return {
                    ...state,
                    strava: action.payload
                }
        case LOGOUT:
            return {
                user: null,
                seenWelcome: false,
                strava: null
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