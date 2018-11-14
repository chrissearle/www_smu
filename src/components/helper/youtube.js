import React from 'react'

import YouTube from 'react-youtube'

const EmbedYoutube = ({ id }) => {
  return (
    <div className="flex-video widescreen">
      <YouTube videoId={id} />
    </div>
  )
}

export default EmbedYoutube
