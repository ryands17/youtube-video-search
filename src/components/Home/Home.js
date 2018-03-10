import React from 'react'
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card'

export default class Home extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader title="My App" />
        <CardTitle title="Search Youtube Videos" />
        <CardText>
          <p style={{ fontSize: 16 }}>
            This is the Home page which is public. You can sign in with google
            to access the youtube search area.
          </p>
        </CardText>
      </Card>
    )
  }
}
