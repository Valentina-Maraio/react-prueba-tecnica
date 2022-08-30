import React from 'react'
import entries from '../../data/sample.json'
import { Card, Grid, Row, Text } from "@nextui-org/react";
import ModalDetails from './ModalDetails';

const Movie = () => {
  const size = 20;
  const [visible, setVisible] = React.useState(false);

  return (
    <Grid.Container gap={2} justify="flex-start">
      {entries?.entries
        .sort((a, b) => a.title.localeCompare(b.title))
        .filter(movie => movie.programType === 'movie' && movie.releaseYear >= '2010')
        .slice(0, size)
        .map((entry, title) =>
          <Grid xs={6} sm={3}>
            <Card
              key={entry.id}
            >
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={entry.images["Poster Art"].url}
                  objectFit="cover"
                  width="100%"
                  height={'auto'}
                  alt={entry.title}
                />
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text b>{entry.title}</Text>
                  <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                    {entry.releaseYear}
                  </Text>
                </Row>
                <Row wrap="wrap" justify="flex-end" align="center">
                  <ModalDetails
                    onClose={() => setVisible(false)}
                    show={visible === title}
                    title={entry.title}
                    year={entry.releaseYear}
                    type={entry.programType}
                    info={entry.description}
                    photo={entry.images["Poster Art"].url}
                  >
                    {entry.description}
                  </ModalDetails>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        )}
    </Grid.Container>
  )
}

export default Movie
