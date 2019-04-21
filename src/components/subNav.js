import React from 'react'

import { Link } from 'gatsby'

import { Card, CardHeader, ListGroup, ListGroupItem } from 'reactstrap'

const SubNav = () => {
  return (
    <Card className="mb-4">
      <CardHeader>Browse</CardHeader>
      <ListGroup>
        <ListGroupItem>
          <Link to="/tags/">All Tags</Link>
        </ListGroupItem>
        <ListGroupItem>
          <Link to="/articles/">All Articles</Link>
        </ListGroupItem>
        <ListGroupItem>
          <Link to="/years/">By Year</Link>
        </ListGroupItem>
        <ListGroupItem>
          <Link to="/series/">By Series</Link>
        </ListGroupItem>
      </ListGroup>
    </Card>
  )
}

export default SubNav
