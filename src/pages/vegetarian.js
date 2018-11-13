import React from 'react'

import { Card, CardBody, CardText, CardTitle, Badge, ListGroup, ListGroupItem } from 'reactstrap'

import Layout from '../components/layout'

const Vegetarian = () => {
  return (
    <Layout
      title="Chris Searle - Vegetarian"
      description="Vegetarian"
    >
      <h2 className="mb-4">Vegetarian</h2>

      <p>I've been vegetarian for many years now - since somewhere between 16 and 18 years old - but what does that mean?</p>

      <Card className="mb-4" color="danger" inverse>
        <CardBody>
          <CardTitle>It means I do not eat the following:</CardTitle>

          <ListGroup>
            <ListGroupItem color="danger">Meat</ListGroupItem>
            <ListGroupItem color="danger">Fish</ListGroupItem>
            <ListGroupItem color="danger">Shellfish</ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>

      <Card className="mb-4" color="info" inverse>
        <CardBody>
          <CardTitle>I am not vegan - so I do eat:</CardTitle>

          <ListGroup>
            <ListGroupItem color="info">Cheese</ListGroupItem>
            <ListGroupItem color="info">Egg</ListGroupItem>
            <ListGroupItem color="info">Milk</ListGroupItem>
            <ListGroupItem color="info">Dairy</ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>

      <Card className="mb-4" color="warning" inverse>
        <CardBody>
          <CardTitle>But there are a couple of things to be careful about:</CardTitle>

          <ListGroup>
            <ListGroupItem color="warning">
              <Badge>Gelatine</Badge> is a product that comes from pigs. It is used in many products with a jelly like consistency. Alternatives include pectin and agar agar - but you have to check the ingredients to know.
            </ListGroupItem>
            <ListGroupItem color="warning">
              <Badge>Lard/Animal fat</Badge> are products that come from aniamls. Food prepared using these are not vegetarian. There are many other
          options - e.g. margerine, olive oil, sunflower seed oil, peanut oil etc etc.
        </ListGroupItem>
            <ListGroupItem color="warning">
              <Badge>Rennet</Badge> comes from cows and is used in lots of cheeses to harden them. There is a vegetarian form called microbial rennet. Sadly,
              Tine use cow rennet in nearly all their yellow cheeses and therefore almost all Tine yellow cheese is not vegetarian. Synnøve Finden and
          some other companies are often OK - again - you have to check the ingredients to know.
        </ListGroupItem>
            <ListGroupItem color="warning">
              <Badge>Cochineal</Badge> (also known as carmine red, E120) comes from crushed beetles and is one of the most common red food colouring
          agents in use. It is used in most red jams, and can appear in many other prepared foods.
        </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>

      <Card className="mb-4" color="danger" inverse>
        <CardBody>
          <CardTitle>One last comment</CardTitle>
          <CardText>
            No - vegetarians can't just "pick the meat off" or anything similar.
            Imagine a sauce that you simply can't stand - that's soaked into the dish - and you get told "can't you just scrape it off ?"
            You know that you'll never get it completely off, well, for us it's the same with meat/fish/etc. It shouldn't even be on the same serving dish.
          </CardText>
        </CardBody>
      </Card>
    </Layout>
  )
}

export default Vegetarian
