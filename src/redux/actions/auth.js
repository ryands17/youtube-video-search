import firebase from 'firebase'
import { LOGIN, LOGOUT } from '../constants'
import { openSnackbar } from './ui'

export const firebaseLogin = () => async dispatch => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider()
    const result = await firebase.auth().signInWithPopup(provider)
    localStorage.setItem('token', result.credential.accessToken)
    dispatch(openSnackbar('you have logged in successfully!'))
    return dispatch(login(result.user.displayName))
  } catch (e) {
    console.log(e)
  }
}

export const firebaseLogout = () => async dispatch => {
  try {
    await firebase.auth().signOut()
    localStorage.removeItem('token')
    dispatch(openSnackbar('logged out successfully!'))
    return dispatch(logout())
  } catch (e) {
    console.log(e)
  }
}

export const login = displayName => ({
  type: LOGIN,
  payload: displayName
})

export const logout = () => ({
  type: LOGOUT
})
