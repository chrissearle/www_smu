const path = require('path')
const moment = require('moment')
const createPaginatedPages = require('gatsby-paginate')
const _ = require('lodash')
const slugify = require('slugify')

const pathFromFile = file => {
  return file.replace(
    /.*\/src\/blog\/(\d{4})\/(\d{2})\/(\d{2})-(.*).md/,
    '/$1/$2/$3/$4/'.toLowerCase()
  )
}

const createYearPages = (createPage, posts) => {
  const allYearsTemplate = path.resolve('src/templates/allYearsIndex.js')
  const singleYearTemplate = path.resolve('src/templates/singleYearIndex.js')

  const postsByYear = {}

  posts.forEach(({ node }) => {
    if (node.frontmatter.date) {
      const year = moment(node.frontmatter.date, 'YYYY-MM-DD HH:mm Z').year()

      if (!postsByYear[year]) {
        postsByYear[year] = []
      }

      postsByYear[year].push(node)
    }
  })

  const years = Object.keys(postsByYear)

  const yearsWithCounts = {}

  years.forEach(year => {
    const posts = postsByYear[year]

    yearsWithCounts[year] = posts.length

    createPage({
      path: `/years/${year}`,
      component: singleYearTemplate,
      context: {
        posts,
        year,
      },
    })
  })

  createPage({
    path: '/years',
    component: allYearsTemplate,
    context: {
      years: yearsWithCounts,
    },
  })
}

const createTagPages = (createPage, posts) => {
  const allTagsTemplate = path.resolve('src/templates/allTagsIndex.js')
  const singleTagTemplate = path.resolve('src/templates/singleTagIndex.js')

  const postsByTag = {}

  posts.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      const tags = node.frontmatter.tags.split(/, */)

      tags.forEach(tag => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = []
        }

        postsByTag[tag].push(node)
      })
    }
  })

  const tags = Object.keys(postsByTag)

  const tagsWithCounts = {}

  tags.forEach(tagName => {
    const posts = postsByTag[tagName]

    tagsWithCounts[tagName] = posts.length

    createPage({
      path: `/tags/${tagName}`,
      component: singleTagTemplate,
      context: {
        posts,
        tagName,
      },
    })
  })

  createPage({
    path: '/tags',
    component: allTagsTemplate,
    context: {
      tags: tagsWithCounts,
    },
  })
}

const createSeriesPage = (createPage, posts, series) => {
  const allSeriesTemplate = path.resolve('src/templates/allSeriesIndex.js')

  const postsBySeries = {}

  posts.forEach(({ node }) => {
    if (node.frontmatter.series) {
      const seriesName = node.frontmatter.series

      if (!postsBySeries[seriesName]) {
        postsBySeries[seriesName] = []
      }

      postsBySeries[seriesName].push(node)
    }
  })

  const seriesWithCounts = {}

  series.forEach(seriesInfo => {
    const posts = postsBySeries[seriesInfo.title]

    seriesWithCounts[seriesInfo.title] = posts.length
  })

  createPage({
    path: '/series',
    component: allSeriesTemplate,
    context: {
      seriesWithCounts: seriesWithCounts,
      seriesInfo: series,
    },
  })
}

const createFlickrIndex = (createPage, flickrPosts) => {
  const template = path.resolve('src/templates/allFlickrIndex.js')

  createPage({
    path: '/flickr',
    component: template,
    context: {
      photos: flickrPosts,
    },
  })
}

const addPaginatedPages = (createPage, posts, prefix, title) => {
  const opts = {
    edges: posts,
    createPage: createPage,
    pageTemplate: 'src/templates/index.js',
    pageLength: 20,
  }

  if (prefix) {
    opts.pathPrefix = prefix
  }

  if (title) {
    opts.context = { title: title }
  }

  createPaginatedPages(opts)
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const parent = getNode(node.parent)

    createNodeField({
      node,
      name: 'collection',
      value: parent.sourceInstanceName,
    })

    createNodeField({
      node,
      name: 'path',
      value: pathFromFile(node.fileAbsolutePath),
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogTemplate = path.resolve('src/templates/blogPost.js')
    const flickrTemplate = path.resolve('src/templates/flickrPost.js')

    // GatsbyImageSharpFluid is defined in gatsby-transformer-sharp - but when ...GatsbyImageSharpFluid
    // is used on fluid it breaks the query. Copied in the contents directly

    resolve(
      graphql(
        `
          query {
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
              filter: { fields: { collection: { eq: "blog" } } }
            ) {
              edges {
                node {
                  fields {
                    path
                  }
                  frontmatter {
                    title
                    tags
                    date
                    embedImage
                    embedYoutube
                    category
                    series
                    image {
                      childImageSharp {
                        fluid(maxWidth: 1000) {
                          base64
                          aspectRatio
                          src
                          srcSet
                          sizes
                        }
                      }
                    }
                  }
                  excerpt(pruneLength: 200)
                }
              }
            }
            allFlickrPhoto(sort: { order: DESC, fields: [dateupload_date] }) {
              edges {
                node {
                  dateupload
                  datetaken
                  tags
                  latitude
                  longitude
                  photo_id
                  title
                  description
                  url_n
                  url_c
                  width_c
                  height_c
                  ownername
                  owner
                }
              }
            }
          }
        `
      ).then(result => {
        const posts = result.data.allMarkdownRemark.edges

        const photoPosts = _.filter(posts, {
          node: { frontmatter: { category: 'photo' } },
        })
        const rcPosts = _.filter(posts, {
          node: { frontmatter: { category: 'RC' } },
        })
        const printPosts = _.filter(posts, {
          node: { frontmatter: { category: '3DP' } },
        })

        addPaginatedPages(createPage, posts)
        addPaginatedPages(
          createPage,
          photoPosts,
          'categories/photo',
          'Category: Photography'
        )
        addPaginatedPages(
          createPage,
          rcPosts,
          'categories/rc',
          'Category: Radio Control'
        )
        addPaginatedPages(
          createPage,
          printPosts,
          'categories/3dp',
          'Category: 3D Printing'
        )

        const seriesInfo = _.uniqBy(posts, 'node.frontmatter.series')
          .map(({ node }) => node.frontmatter.series)
          .filter(series => !_.isNil(series))
          .map(series => {
            return {
              title: series,
              path: `series/${slugify(series)}`.toLowerCase(),
            }
          })

        seriesInfo.forEach(series => {
          const seriesPosts = _.filter(posts, {
            node: { frontmatter: { series: series.title } },
          })

          addPaginatedPages(
            createPage,
            seriesPosts,
            series.path,
            `Series: ${series.title}`
          )
        })

        createSeriesPage(createPage, posts, seriesInfo)
        createTagPages(createPage, posts)
        createYearPages(createPage, posts)

        posts.forEach(({ node }, index) => {
          const path = node.fields.path

          createPage({
            path,
            component: blogTemplate,
            context: {
              pathSlug: path,
              next: index === 0 ? null : posts[index - 1].node,
              prev: index === posts.length - 1 ? null : posts[index + 1].node,
            },
          })

          resolve()
        })

        const flickrPosts = result.data.allFlickrPhoto.edges

        createFlickrIndex(createPage, flickrPosts)

        flickrPosts.forEach(({ node }, index) => {
          const path = `flickr/${node.photo_id}`

          createPage({
            path,
            component: flickrTemplate,
            context: {
              pathSlug: path,
              photo: node,
              next: index === 0 ? null : flickrPosts[index - 1].node,
              prev:
                index === flickrPosts.length - 1
                  ? null
                  : flickrPosts[index + 1].node,
            },
          })

          resolve()
        })
      })
    )
  })
}
