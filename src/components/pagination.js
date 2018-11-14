import React from 'react'

import _ from 'lodash'

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const PaginationButtons = ({ index, pageCount, prefix }) => {
  const pathPrefix = prefix ? `/${prefix}/` : '/'
  const previousUrl = index - 1 === 1 ? pathPrefix : (index - 1).toString()
  const nextUrl = (index + 1).toString()
  const pages = _.range(2, pageCount + 1)

  return (
    <Pagination listClassName="justify-content-center">
      <PaginationItem disabled={index <= 1}>
        <PaginationLink href={`${previousUrl}`}>&lt;</PaginationLink>
      </PaginationItem>
      <PaginationItem active={1 === index}>
        <PaginationLink href={pathPrefix}>1</PaginationLink>
      </PaginationItem>
      {pages.map(page => {
        return (
          <PaginationItem active={page === index} key={`page_${page}`}>
            <PaginationLink href={`${pathPrefix}${page}/`}>
              {page}
            </PaginationLink>
          </PaginationItem>
        )
      })}
      <PaginationItem disabled={index >= pageCount}>
        <PaginationLink href={`${pathPrefix}${nextUrl}/`}>&gt;</PaginationLink>
      </PaginationItem>
    </Pagination>
  )
}

export default PaginationButtons
