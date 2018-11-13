import React from 'react'

import { Card, CardBody, CardHeader, CardTitle, Table, Alert } from 'reactstrap'

import Layout from '../components/layout'

const Gaming = () => {
  return (
    <Layout
      title="Chris Searle - Gaming"
      description="Gaming Accounts"
    >
      <h2 className="mb-4">Gaming</h2>
      <Card className="mb-4" outline color="primary">
        <CardHeader>Gaming Accounts</CardHeader>
        <CardBody>
          <CardTitle>Gaming networks you can find me on.</CardTitle>
          <Table striped>
            <thead>
              <tr>
                <th>Network</th>
                <th>Account</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PSN</td>
                <td>chrissearle</td>
              </tr>
              <tr>
                <td>Nintendo Network ID</td>
                <td>chrissearle</td>
              </tr>
              <tr>
                <td>Blizzard Battletag</td>
                <td>Kneet#2548</td>
              </tr>
              <tr>
                <td>Blizzard Real ID</td>
                <td>My normal e-mail - use it if you have it - I prefer real ID to battletag</td>
              </tr>
            </tbody>
          </Table>
          <Alert color="warning">
            If your account does not contain your name and gives me no clue as to who you are then I most likely won't add you until you email me and tell me that it's you - since I don't add unknown people :)
          </Alert>
        </CardBody>
      </Card>
    </Layout>
  )
}

export default Gaming
