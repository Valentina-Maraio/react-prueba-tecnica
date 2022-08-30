import React from "react";
import { Modal, Button, Text, Card, Col, Row, } from "@nextui-org/react";

export default function ModalDetails(props) {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
    };
    if (props.visible) { return null }
    return (
        <div>
            <Modal blur noPadding open={visible} onClose={closeHandler}>
                <Modal.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                    <Col>
                        <Text
                            isBlurred
                            h4
                            size={20}
                            css={{
                                textGradient: "45deg, $yellow600 -20%, $red600 100%",
                            }}
                            weight="bold">
                            {props.year}
                        </Text>
                    </Col>
                </Modal.Header>
                <Modal.Body>
                    <Card.Image
                        src={props.photo}
                        width="100%"
                        height="100%"
                        objectFit="fit"
                        alt="Card example background"
                    />
                    <Card.Footer
                        isBlurred
                        css={{
                            position: "absolute",
                            bgBlur: "#ffffff66",
                            borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                            bottom: 0,
                            zIndex: 1,
                        }}
                    >
                        <Row>
                            <Col>
                                <Text color="#000" size={30}>{props.title}</Text>
                                <Text color="#000" size={12}>
                                    {props.info}
                                </Text>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Modal.Body>
            </Modal>
            <Button size="xs" auto flat color="gray" onClick={handler}>
                Info
            </Button>
        </div>
    );
}

