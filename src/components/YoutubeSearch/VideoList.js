import React from 'react'
import { connect } from 'react-redux'
import Avatar from 'material-ui/Avatar'
import { List, ListItem } from 'material-ui/List'
import { selectVideo } from '../../redux/actions/youtube'

class VideoList extends React.Component {
  renderVideos = () => {
    const { videos, selectVideo } = this.props
    return videos.map(video => (
      <ListItem
        onClick={() => selectVideo(video)}
        leftAvatar={<Avatar src={video.snippet.thumbnails.medium.url} />}
        key={video.id.videoId}
      >
        {video.snippet.title}
      </ListItem>
    ))
  }

  render() {
    return <List>{this.renderVideos()}</List>
  }
}

export default connect(
  state => ({
    videos: state.youtube.videos
  }),
  { selectVideo }
)(VideoList)
