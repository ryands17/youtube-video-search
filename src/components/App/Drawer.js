import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import './Drawer.css'

const LeftDrawer = ({ isOpen }) => (
  <Drawer className="drawer" open={isOpen}>
    <MenuItem>
      <Link to="/">Home</Link>
    </MenuItem>
    <MenuItem>
      <Link to="/youtube">Youtube Search</Link>
    </MenuItem>
  </Drawer>
)

export default connect(state => ({
  isOpen: state.drawer.isOpen
}))(LeftDrawer)
