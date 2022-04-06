import React from 'react'
import {
  Container,
  Nav,
  NavDropdown,
  Carousel,
  Card,
  Button,
  Col,
  Row
} from "react-bootstrap";

export default function CarouselComponents() {
  return (
    <>
        <Carousel>
        <Carousel.Item className='carousel-item' interval={1000}>
          <Container className='bg-webcolor'>
            <Row className='carousel-row'>
              <Col lg={4}>
                <Card className='bg-webcolor' style={{ width: '18rem' }}>
                  <Card.Img className='card-img' variant="top" src="../images/final-home--1st.webp" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Maecenas finibus nec
                      the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={8}>
                <Card className='bg-webcolor'>
                  <Card.Body>
                  <Card.Title as="h5">Android App Development</Card.Title>
                  <Card.Title as="h5">via Upwork - Mar 4, 2015 - Aug 30, 2021</Card.Title>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                      Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris .
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </Col>
            </Row>

          </Container>
        </Carousel.Item>
        <Carousel.Item className='carousel-item' interval={500}>
          <Container className='bg-webcolor'>
            <Row className='carousel-row'>
              <Col lg={4}>
                <Card className='bg-webcolor' style={{ width: '18rem' }}>
                  <Card.Img className='card-img' variant="top" src="../images/final-home--2nd.webp" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Maecenas finibus nec
                      the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={8}>
                <Card className='bg-webcolor'>
                  <Card.Body>
                  <Card.Title as="h5">Android App Development</Card.Title>
                  <Card.Title as="h5">via Upwork - Mar 4, 2015 - Aug 30, 2021</Card.Title>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                      Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris .
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </Col>
            </Row>

          </Container>
        </Carousel.Item>
        <Carousel.Item className='carousel-item'>
          <Container className='bg-webcolor'>
            <Row className='carousel-row'>
              <Col lg={4}>
                <Card className='bg-webcolor' style={{ width: '18rem' }}>
                  <Card.Img className='card-img' variant="top" src="../images/final-home--3rd.webp" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Maecenas finibus nec
                      the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={8}>
                <Card className='bg-webcolor'>
                  <Card.Body>
                  <Card.Title as="h5">Android App Development</Card.Title>
                  <Card.Title as="h5">via Upwork - Mar 4, 2015 - Aug 30, 2021</Card.Title>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                      Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris .
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </>
  )
}
