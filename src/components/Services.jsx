import React from 'react'
import logo from '../images/logo.jpg'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const Services = () => {
  return (
    <div>
            <Row className="g-4 d-flex justify-content-center">
              <Col lg={3} >
                <Card className='h-100'>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title>CCTV Systems</Card.Title>
                    <Card.Text>
                      Including IP based and video
                      analytics systems
                    </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className='h-100'>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title>Solar Street Lights Supplies and Installation</Card.Title>
                    <Card.Text>

                    </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className='h-100'>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title>Solar Power System Installation </Card.Title>
                    <Card.Text>

                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className='h-100'>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title>Fiber Optics Cabling </Card.Title>
                    <Card.Text>

                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row className="g-4 my-3 d-flex justify-content-center">
              <Col lg={3} >
                <Card className='h-100'>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title>Wireless Networks </Card.Title>
                    <Card.Text>

                    </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className='h-100'>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title>Structural Cabling </Card.Title>
                    <Card.Text>

                    </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className='h-100'>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title>Public Address System  </Card.Title>
                    <Card.Text>

                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className='h-100'>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title>Access Control Systems </Card.Title>
                    <Card.Text>

                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row className="g-4 my-3 d-flex justify-content-center">
              <Col lg={3} >
                <Card className='h-100'>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title>Biometrics Systems </Card.Title>
                    <Card.Text>

                    </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className='h-100'>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title>Electric Fence</Card.Title>
                    <Card.Text>

                    </Card.Text>

                  </Card.Body>
                </Card>
              </Col>

            </Row>
          </div>
  )
}

export default Services