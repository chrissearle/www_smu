import React from 'react'

import { Card, CardHeader, CardImg } from 'reactstrap'

const Embed500px = ({ id, title, url }) => {
  return (
    <Card className="mb-4">
      <CardHeader tag="h6">
        <a
          href={`https://500px.com/photo/${id}`}
          title={`${title} on 500px.com`}
        >
          {title} on 500px.com
        </a>{' '}
        by <a href="https://500px.com/chrissearle">Chris Searle</a>
      </CardHeader>
      <CardImg src={url} />
    </Card>
  )
}

export default Embed500px
