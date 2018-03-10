import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from '../constants'

export default function uiState(
  state = { snackbar: false, snackbarMessage: null },
  action
) {
  switch (action.type) {
    case OPEN_SNACKBAR:
      return { snackbar: true, snackbarMessage: action.payload }
    case CLOSE_SNACKBAR:
      return { snackbar: false, snackbarMessage: null }
    default:
      return state
  }
}
