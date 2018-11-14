import React from 'react'

const FlickrLink = ({ id, title }) => {
  return (
    <a href={`http://www.flickr.com/photos/chrissearle/${id}`}>
      {title} on Flickr
    </a>
  )
}

export default FlickrLink
