import React from 'react'
import entries from '../../data/sample.json'
import { Card, Grid, Row, Text } from "@nextui-org/react";
//import Button from 'react-bootstrap/Button';
//import Modal from 'react-bootstrap/Modal';
import ModalNew from './Modal';

/*function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}*/

const Serie = () => {
  const modalData = { entries };
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  function openFromParent() { setModalIsOpen(true) };
  function handleCloseModal(event, data) {
    console.log(event, data);
    setModalIsOpen(false);
  }
  function handleAfterOpen(event, data) {
    console.log(event, data);
  };


  //const [modalShow, setModalShow] = React.useState(false);
  const size = 20;

  return (
    <Grid.Container gap={2} justify="flex-start">
      {entries?.entries.sort((a, b) => a.title.localeCompare(b.title)).filter(serie => serie.programType === 'series' && serie.releaseYear >= '2010').slice(0, size).map(entry =>
        <Grid xs={6} sm={3}>
          <Card
            onClick={openFromParent}
            key={entry.id}
            isPressable>
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
            </Card.Footer>
          </Card>
          <ModalNew
            dynData={modalData}
            IsModalOpened={modalIsOpen}
            onCloseModal={handleCloseModal}
            onAfterOpen={handleAfterOpen}
          />
        </Grid>
      )}
    </Grid.Container>
  )
}

export default Serie
