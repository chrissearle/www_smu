import React from 'react'

const Link500px = ({ id, title }) => {
  return <a href={`http://500px.com/photo/${id}`}>{title} on 500px.com</a>
}

export default Link500px
