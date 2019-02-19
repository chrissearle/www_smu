import React from 'react'

import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Badge,
  ListGroup,
  ListGroupItem,
} from 'reactstrap'

import Layout from '../components/layout'

const Vegetar = () => {
  return (
    <Layout title="Chris Searle - Vegetar" description="Vegetar">
      <h2 className="mb-4">Vegetar</h2>

      <p>
        Jeg har vært vegetar i en god del år nå - fra cira 16-18 år gammel - men
        - hva betyr det?
      </p>

      <Card className="mb-4" color="danger" inverse>
        <CardBody>
          <CardTitle>Det betyr at jeg ikke spiser følgende:</CardTitle>

          <ListGroup>
            <ListGroupItem color="danger">Kjøtt</ListGroupItem>
            <ListGroupItem color="danger">Fisk</ListGroupItem>
            <ListGroupItem color="danger">Skalldyr</ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>

      <Card className="mb-4" color="info" inverse>
        <CardBody>
          <CardTitle>Jeg er ikke vegan - så jeg spiser fortsatt:</CardTitle>

          <ListGroup>
            <ListGroupItem color="info">Ost</ListGroupItem>
            <ListGroupItem color="info">Egg</ListGroupItem>
            <ListGroupItem color="info">Melk</ListGroupItem>
            <ListGroupItem color="info">Meieriprodukter</ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>

      <Card className="mb-4" color="warning" inverse>
        <CardBody>
          <CardTitle>
            Men - det er et par andre ting som man må være forsiktig med:
          </CardTitle>

          <ListGroup>
            <ListGroupItem color="warning">
              <Badge>Gelatin</Badge> er et produkt som kommer fra gris. Det er
              brukt i ganske mange ting som har en geleaktig konsistens.
              Alternativ er enten pectin eller agar agar - men da må man sjekke
              innhold nøye.
            </ListGroupItem>
            <ListGroupItem color="warning">
              <Badge>Smult/Animalsk fett</Badge> er produkter som kommer fra
              dyr. Mat laget med bruk av disse er ikke vegetar. Man kan bruke
              mange andre varianter, platemargarin, oliven olje, raps olje,
              solsikker, peanøtter.
            </ListGroupItem>
            <ListGroupItem color="warning">
              <Badge>Animalsk løpe</Badge> kommer fra kuer og er brukt i ganske
              mange oster. Alternativ er mikrobiell løpe som er vegetar. Man må
              sjekke ingredienslisten.
            </ListGroupItem>
            <ListGroupItem color="warning">
              <Badge>Karmin</Badge> (også kjent som karminrødt, E120, eller
              cochineal på engelsk) er produsert av kvernet biller og er en av
              de mest vanlige rødt matfargestoffer i bruk. Den er brukt i de
              fleste rød syltetøytyper, og kan dukker opp i mange andre uventet
              steder.
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>

      <Card className="mb-4" color="danger" inverse>
        <CardBody>
          <CardTitle>En siste kommentar</CardTitle>
          <CardText>
            Nei - vegetarianere kan ikke "bare plukke av kjøttet" eller
            lignende. Tenk deg en saus som du bare ikke klare tanken på en gang
            - og så får du beskjed "kan du ikke bare skrape det av ?" Du vet du
            får den aldri helt av og for oss så er det det samme med
            kjøtt/fisk/osv. Den skal ikke være på samme serveringsfat en gang.
          </CardText>
        </CardBody>
      </Card>
    </Layout>
  )
}

export default Vegetar
