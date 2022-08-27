import React from 'react'
import HeaderTitle from '../components/HeaderTitle'
import { Link } from 'react-router-dom'

import { Grid, Card, Col, Text } from "@nextui-org/react";
import logo from '../assets/placeholder.png'

const Inicio = () => {
  return (
    <div>
      <HeaderTitle />
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} md={6}>
          <Link to="/series">
            <Card isPressable>
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                  <Text
                    h4
                    color="white"
                    style={{ textAlign: "center", margin: "120px" }}
                  >
                    Series
                  </Text>
                </Col>
              </Card.Header>
              <Card.Image
                src={logo}
                objectFit="cover"
                width="100%"
                height={300}
                alt="Card image background"
                style={{ backgroundColor: "black" }}
              />
            </Card></Link>
        </Grid>
        <Grid xs={12} md={6}>
          <Link to="/movies">
            <Card isPressable>
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                  <Text
                    h4
                    color="white"
                    style={{ textAlign: "center", margin: "120px" }}
                  >
                    Movies
                  </Text>
                </Col>
              </Card.Header>
              <Card.Image
                src={logo}
                objectFit="cover"
                width="100%"
                height={300}
                alt="Card image background"
                style={{ backgroundColor: "black" }}
              />
            </Card>
          </Link>
        </Grid>
      </Grid.Container>
    </div>
  )
}

export default Inicio

/*
      
*/