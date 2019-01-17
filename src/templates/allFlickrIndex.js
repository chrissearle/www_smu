import React from 'react'

import { Link } from 'gatsby'

import _ from 'lodash'

import {
  Card,
  CardImg,
  CardGroup,
  CardBody,
  CardHeader,
  CardFooter,
} from 'reactstrap'

import Layout from '../components/layout'

const AllFlickrTemplate = ({ pageContext }) => {
  const { photos } = pageContext

  const photoGroups = _.chunk(photos, 3)

  return (
    <Layout>
      <h2>Flickr Photos</h2>
      {photoGroups.map((group, groupIndex) => {
        return (
          <CardGroup key={`group_${groupIndex}`}>
            {group.map(({ node }, index) => {
              return (
                <Card key={index}>
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
                        href={`https://www.flickr.com/photos/${node.owner}`}
                      >
                        {node.ownername}
                      </a>
                    </small>
                  </CardFooter>
                </Card>
              )
            })}
          </CardGroup>
        )
      })}
    </Layout>
  )
}

export default AllFlickrTemplate
