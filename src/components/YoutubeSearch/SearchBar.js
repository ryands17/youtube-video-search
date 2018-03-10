import React from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { onInputChange, searchVideos } from '../../redux/actions/youtube'
import './SearchBar.css'

class SearchBar extends React.PureComponent {
  styles = {
    buttonStyles: {
      marginLeft: 20
    }
  }

  handleChange = e => {
    this.props.onInputChange(e.target.value)
  }

  render() {
    const { buttonStyles } = this.styles
    const { input, searchVideos } = this.props
    return (
      <React.Fragment>
        <TextField
          onChange={this.handleChange}
          className="text-input"
          value={input}
          hintText="Dan Abramov"
          floatingLabelText="Search For Videos"
        />
        <RaisedButton
          onClick={() => searchVideos(input)}
          label="Search"
          secondary={true}
          style={buttonStyles}
        />
      </React.Fragment>
    )
  }
}

export default connect(
  state => ({
    input: state.youtube.input
  }),
  { onInputChange, searchVideos }
)(SearchBar)
