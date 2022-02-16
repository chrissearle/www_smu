import React from 'react'

import Layout from '../components/layout'

import { Link } from 'gatsby'
import Img from 'gatsby-image'

import {
  Card,
  CardBody,
  CardText,
  CardHeader,
  CardTitle,
  CardFooter,
  CardImg,
} from 'reactstrap'

import TagsMap from '../components/tagsMap'
import Pagination from '../components/pagination'

import { displayDate, youtubeThumb } from '../functions'

const Index = ({ pageContext }) => {
  const { group, index, pageCount, pathPrefix, additionalContext } = pageContext

  return (
    <Layout>
      {additionalContext && additionalContext.title && (
        <h3 className="mb-4">{additionalContext.title}</h3>
      )}
      {group.map((edge) => {
        const post = edge.node

        const date = displayDate(post.frontmatter.date)

        const tags = post.frontmatter.tags && post.frontmatter.tags.split(/, */)

        return (
          <Card className="mb-4" key={`ex_${post.fields.path}`}>
            <CardHeader tag="h6">
              <div>Posted: {date}</div>
            </CardHeader>
            {post.frontmatter.image && (
              <Link to={post.fields.path}>
                <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
              </Link>
            )}
            {post.frontmatter.embedImage && (
              <Link to={post.fields.path}>
                <CardImg src={post.frontmatter.embedImage} />
              </Link>
            )}
            {post.frontmatter.embedYoutube && (
              <Link to={post.fields.path}>
                <CardImg src={youtubeThumb(post.frontmatter.embedYoutube)} />
              </Link>
            )}
            <CardBody>
              <CardTitle>
                <Link to={post.fields.path}>{post.frontmatter.title}</Link>
              </CardTitle>
              <CardText>{post.excerpt}</CardText>
            </CardBody>
            <CardFooter>
              <TagsMap
                tags={tags}
                series={post.frontmatter.series}
                keyPrefix={post.fields.path}
                innerClass="mx-2 mt-2"
              />
              <div className="mt-2">
                <Link to={post.fields.path}>Read full article</Link>
              </div>
            </CardFooter>
          </Card>
        )
      })}
      <Pagination index={index} pageCount={pageCount} prefix={pathPrefix} />
    </Layout>
  )
}

export default Index
