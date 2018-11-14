import React from 'react'

import { Card, CardHeader, CardImg } from 'reactstrap'

const EmbedFlickr = ({ id, title, url }) => {
  return (
    <Card className="mb-4">
      <CardHeader tag="h6">
        <a
          href={`https://www.flickr.com/photos/chrissearle/${id}`}
          title={`${title} on Flickr`}
        >
          {title} on Flickr
        </a>{' '}
        by <a href="https://www.flickr.com/photos/chrissearle/">Chris Searle</a>
      </CardHeader>
      <CardImg src={url} />
    </Card>
  )
}

export default EmbedFlickr
