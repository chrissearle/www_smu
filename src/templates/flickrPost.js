import React from 'react'

import { Pagination, PaginationItem, PaginationLink, Button } from 'reactstrap'

import Layout from '../components/layout'

import { flickrDate } from '../functions'

import '../stylesheets/flickrImage.css'

const PageLink = ({ path, title }) => {
  return (
    <PaginationItem>
      <PaginationLink href={path}>{title}</PaginationLink>
    </PaginationItem>
  )
}

const PageLinks = ({ prev, next }) => {
  return (
    <Pagination listClassName="justify-content-center">
      {prev && (
        <PageLink path={`/flickr/${prev.photo_id}`} title={`< ${prev.title}`} />
      )}
      {next && (
        <PageLink path={`/flickr/${next.photo_id}`} title={`${next.title} >`} />
      )}
    </Pagination>
  )
}

const FlickrTagList = ({ tags }) => {
  if (tags) {
    const tagsList = tags.split(' ')

    const tagCloud = (
      <React.Fragment>
        {tagsList.map((tag) => {
          return (
            <Button
              key={`flickr_tag_${tag}`}
              outline
              color="info"
              size="sm"
              className="mx-2"
            >
              <a href={`https://www.flickr.com/photos/tags/${tag}`}>{tag}</a>
            </Button>
          )
        })}
      </React.Fragment>
    )

    return tagCloud
  }

  return null
}

const FlickrTemplate = ({ pageContext }) => {
  const { photo, next, prev } = pageContext

  const title = photo.title

  const ownerLink = `https://www.flickr.com/photos/${photo.pathalias}`
  const imageLink = `https://www.flickr.com/photos/${photo.pathalias}/${photo.photo_id}`

  return (
    <Layout title={title} description={photo.description}>
      <h1 style={{ fontFamily: 'avenir' }}>{photo.title}</h1>

      <a href={imageLink}>
        <img
          src={photo.url_c}
          height={photo.height_c}
          width={photo.width_c}
          alt={photo.title}
        />
      </a>

      <p>{photo.description}</p>

      <p>
        <a href={imageLink}>View on Flickr</a> - taken by{' '}
        <a href={ownerLink}>{photo.ownername}</a> on{' '}
        {flickrDate(photo.datetaken)}
      </p>

      <p>
        <FlickrTagList tags={photo.tags} />
      </p>
      <PageLinks prev={prev} next={next} />
    </Layout>
  )
}

export default FlickrTemplate
