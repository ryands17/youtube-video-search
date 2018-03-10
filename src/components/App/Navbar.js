import React from 'react'
import { withRouter } from 'react-router-dom'
import firebase from 'firebase'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import Snackbar from 'material-ui/Snackbar'
import { connect } from 'react-redux'
import LeftDrawer from './Drawer'
import * as authActions from '../../redux/actions/auth'
import * as drawerActions from '../../redux/actions/drawer'
import * as uiActions from '../../redux/actions/ui'

const Logged = ({ logout }) => (
  <RaisedButton
    style={{ marginTop: 5 }}
    secondary={true}
    onClick={logout}
    label="Logout"
  />
)

const Login = ({ login }) => (
  <RaisedButton style={{ marginTop: 5 }} secondary={true} onClick={login} label="Login" />
)

class NavBar extends React.PureComponent {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.login(user.displayName)
        this.props.history.push('/youtube')
      } else {
        this.props.logout()
      }
    })
  }

  toggleNavbar = () => {
    const { isOpen, openDrawer, closeDrawer } = this.props
    if (isOpen) {
      closeDrawer()
    } else {
      openDrawer()
    }
  }

  render() {
    const {
      user,
      loggedIn,
      firebaseLogin,
      firebaseLogout,
      snackbar,
      message,
      closeSnackbar
    } = this.props
    return (
      <React.Fragment>
        <LeftDrawer />
        <AppBar
          title={user ? `Welcome ${user}` : 'My App'}
          onLeftIconButtonClick={this.toggleNavbar}
          iconElementRight={
            loggedIn ? (
              <Logged logout={firebaseLogout} />
            ) : (
              <Login login={firebaseLogin} />
            )
          }
        />
        <Snackbar
          open={snackbar}
          message={message || ''}
          autoHideDuration={4000}
          onRequestClose={closeSnackbar}
        />
      </React.Fragment>
    )
  }
}

export default withRouter(
  connect(
    state => ({
      loggedIn: state.auth.loggedIn,
      snackbar: state.ui.snackbar,
      message: state.ui.snackbarMessage,
      user: state.auth.user,
      isOpen: state.drawer.isOpen
    }),
    { ...authActions, ...drawerActions, ...uiActions }
  )(NavBar)
)
