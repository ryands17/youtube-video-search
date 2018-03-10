import { OPEN_DRAWER, CLOSE_DRAWER } from '../constants'

export default function toggleDrawer(state = { isOpen: false }, action) {
  switch (action.type) {
    case OPEN_DRAWER:
      return { isOpen: true }
    case CLOSE_DRAWER:
      return { isOpen: false }
    default:
      return state
  }
}
