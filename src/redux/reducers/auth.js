import { LOGIN, LOGOUT } from '../constants'

export default function auth(state = { loggedIn: false, user: null }, action) {
  switch (action.type) {
    case LOGIN:
      return { loggedIn: true, user: action.payload }
    case LOGOUT:
      return { loggedIn: false, user: null }
    default:
      return state
  }
}
