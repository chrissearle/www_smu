import React from 'react'

const LinkFlickr = ({ id, title }) => {
  return (
    <a href={`http://www.flickr.com/photos/chrissearle/${id}`}>
      {title} on Flickr
    </a>
  )
}

export default LinkFlickr
