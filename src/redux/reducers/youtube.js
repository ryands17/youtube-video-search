import { SEARCH_INPUT, SET_VIDEOS, SELECT_VIDEO } from '../constants'

export default function youtubeAPI(
  state = { input: '', videos: [], selectedVideo: null },
  action
) {
  switch (action.type) {
    case SEARCH_INPUT:
      return { ...state, input: action.payload }
    case SET_VIDEOS:
      return { ...state, videos: action.payload }
    case SELECT_VIDEO:
      return { ...state, selectedVideo: action.payload }
    default:
      return state
  }
}
