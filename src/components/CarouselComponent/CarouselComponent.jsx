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
      <header className='header-text text-center'>
        <h4>WHAT CLIENTS SAY</h4>
        <h1>Testimonial</h1>
      </header>
      <Carousel>
        <Carousel.Item className='carousel-item' interval={1000}>
          <Container >
            <Row className='carousel-row'>
              <Col lg={4}>
                <Card className='bg-webcolor' style={{ width: '18rem' }}>
                  <Card.Img className='card-img' variant="top" src="../images/final-home--1st.webp" />
                  <Card.Body>
                    <Card.Title as="h4" >Rainbow-Themes</Card.Title>
                    <Card.Title as="h1" >Nevine Acotanza</Card.Title>
                    <Card.Text>
                      Chief Operating Officer
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={8}>
                <Card className='bg-webcolor'>
                  <Card.Body>
                    <Card.Title as="h1" className='Carousel-heading'>Android App Development</Card.Title>
                    <Card.Title as="h5" className='Carousel-sub-heading'>via Upwork - Mar 4, 2015 - Aug 30, 2021</Card.Title>
                    {/* <Card.Title>Special title treatment</Card.Title> */}
                    <hr />
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
          <Container>
            <Row className='carousel-row'>
              <Col lg={4}>
                <Card className='' style={{ width: '18rem' }}>
                  <Card.Img className='card-img' variant="top" src="../images/final-home--2nd.webp" />
                  <Card.Body>
                    <Card.Title as="h4" >Rainbow-Themes</Card.Title>
                    <Card.Title as="h1" >Nevine Acotanza</Card.Title>
                    <Card.Text>
                      Chief Operating Officer
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={8}>
                <Card className='bg-webcolor'>
                  <Card.Body>
                    <Card.Title as="h1">Android App Development</Card.Title>
                    <Card.Title as="h5">via Upwork - Mar 4, 2015 - Aug 30, 2021</Card.Title>
                    <Card.Title>Special title treatment</Card.Title>
                    <hr />
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
          <Container>
            <Row className='carousel-row'>
              <Col lg={4}>
                <Card className='bg-webcolor' style={{ width: '18rem' }}>
                  <Card.Img className='card-img' variant="top" src="../images/final-home--3rd.webp" />
                  <Card.Body>
                    <Card.Title as="h4" >Rainbow-Themes</Card.Title>
                    <Card.Title as="h1" >Nevine Acotanza</Card.Title>
                    <Card.Text>
                      Chief Operating Officer
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={8}>
                <Card className='bg-webcolor'>
                  <Card.Body>
                    <Card.Title as="h1">Android App Development</Card.Title>
                    <Card.Title as="h5">via Upwork - Mar 4, 2015 - Aug 30, 2021</Card.Title>
                    <Card.Title>Special title treatment</Card.Title>
                    <hr />
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
