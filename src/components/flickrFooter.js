import React from 'react'

import { StaticQuery, graphql, Link } from 'gatsby'

import {
  CardDeck,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardFooter,
} from 'reactstrap'

const FlickrFooter = ({ data }) => {
  const { allFlickrPhoto } = data
  const { edges } = allFlickrPhoto

  return (
    <div>
      <h3>
        <Link to="/flickr">Latest flickr images</Link>
      </h3>
      <CardDeck>
        {edges.map(edge => {
          const { node } = edge

          return (
            <Card key={`flickr_footer_img_${node.photo_id}`}>
              <CardHeader>
                <Link to={`/flickr/${node.photo_id}`}>{node.title}</Link>
              </CardHeader>
              <CardImg src={node.url_n} alt={node.title} />
              <CardBody>
                <small>{node.description}</small>
              </CardBody>
              <CardFooter>
                <small>
                  <a
                    className="text-muted"
                    href={`https://www.flickr.com/photos/${node.pathalias}`}
                  >
                    {node.ownername}
                  </a>
                </small>
              </CardFooter>
            </Card>
          )
        })}
      </CardDeck>
    </div>
  )
}

const WrappedFlickrFooter = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allFlickrPhoto(
            limit: 6
            sort: { order: DESC, fields: [dateupload_date] }
          ) {
            edges {
              node {
                photo_id
                title
                description
                url_n
                ownername
                pathalias
              }
            }
          }
        }
      `}
      render={data => <FlickrFooter data={data} />}
    />
  )
}
export default WrappedFlickrFooter
