import React from 'react'
import entries from '../../data/sample.json'
import { Card, Grid, Row, Text } from "@nextui-org/react";

const Movie = () => {

  return (
    <Grid.Container gap={2} justify="flex-start">
      {entries?.entries.map(entry =>
        <Grid xs={6} sm={3}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={entry.images["Poster Art"].url && 'programType' === 'movie'}
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
            </Card.Footer>
          </Card>
        </Grid>
      )}
    </Grid.Container>
  )
}

export default Movie