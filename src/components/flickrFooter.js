import React from 'react'

import { StaticQuery, graphql } from 'gatsby'

import {
  CardDeck,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardImg,
  CardFooter,
} from 'reactstrap'

const FlickrFooter = ({ data }) => {
  const { allFlickrPhoto } = data
  const { edges } = allFlickrPhoto

  return (
    <div>
      <h3>Latest flickr images</h3>
      <CardDeck>
        {edges.map(edge => {
          const { node } = edge

          return (
            <Card>
              <CardHeader>
                <a
                  href={`https://www.flickr.com/photos/${node.owner}/${
                    node.photo_id
                  }`}
                >
                  {node.title}
                </a>
              </CardHeader>
              <CardImg src={node.url_n} alt={node.title} />
              <CardBody>
                <small>{node.description}</small>
              </CardBody>
              <CardFooter>
                <small>
                  <a
                    className="text-muted"
                    href={`https://www.flickr.com/photos/${node.owner}`}
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
                owner
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
