import React from 'react'
import { connect } from 'react-redux'
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card'

const SelectedVideo = ({ video }) =>
  video && (
    <Card style={{ flexBasis: '70%' }}>
      <CardMedia style={{ position: 'relative' }}>
        <iframe
          allowFullScreen
          style={{ height: 500 }}
          title={video.snippet.title}
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
        />
      </CardMedia>
      <CardTitle title={video.snippet.title} />
      <CardText>{video.snippet.description}</CardText>
    </Card>
  )

export default connect(
  state => ({
    video: state.youtube.selectedVideo
  }),
  null
)(SelectedVideo)
