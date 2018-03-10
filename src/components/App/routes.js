import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../Home/Home'
import YoutubeSearch from '../YoutubeSearch/YoutubeSearch'
import PrivateRoute from './PrivateRoute'
import NavBar from './Navbar'

const Routes = () => (
  <React.Fragment>
    <Router>
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/youtube" component={YoutubeSearch} />
        </Switch>
      </React.Fragment>
    </Router>
  </React.Fragment>
)

export default Routes
