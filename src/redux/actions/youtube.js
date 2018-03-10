import { SEARCH_INPUT, SELECT_VIDEO, SET_VIDEOS } from '../constants'
import YSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyDlwbMmvLbImh4GaK8yYlaD-ozvTy4X00U'

export const onInputChange = input => ({
  type: SEARCH_INPUT,
  payload: input
})

export const searchVideos = input => dispatch => {
  YSearch({ key: API_KEY, term: input }, videos => {
    dispatch({ type: SET_VIDEOS, payload: videos })
    dispatch({ type: SELECT_VIDEO, payload: videos[0] })
  })
}

export const selectVideo = video => ({
  type: SELECT_VIDEO,
  payload: video
})
