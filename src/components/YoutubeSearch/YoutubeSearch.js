import React from 'react'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import SelectedVideo from './SelectedVideo'
import { searchVideos, onInputChange } from '../../redux/actions/youtube'
import './YoutubeSearch.css'

class YoutubeSearch extends React.PureComponent {
  componentDidMount() {
    const firstSearch = 'react conf'
    this.props.onInputChange(firstSearch)
    this.props.searchVideos(firstSearch)
  }

  render() {
    return (
      <React.Fragment>
        <SearchBar />
        <div className="videos-container">
          <SelectedVideo />
          <VideoList />
        </div>
      </React.Fragment>
    )
  }
}

export default connect(null, { searchVideos, onInputChange })(YoutubeSearch)
