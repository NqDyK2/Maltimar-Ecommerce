import React from 'react'
import "./footer.css"

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const Footer = () => {

  const year = new Date().getFullYear()

  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='4' className='mb-4' md='6'>
          <div className="logo">
            <div>
              <h1 className='text-white'>Multimart</h1>
              {/* <p>Since 1995</p> */}
            </div>
          </div>
          <p className="footer__text mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas quibusdam soluta, repudiandae itaque explicabo accusantium ex nam eum magni impedit tenetur corrupti mollitia facere atque consequatur, laborum sequi porro quaerat!
          </p>
        </Col>
        <Col lg='3' md='3' className='mb-4'>
          <div className="footer__quick-links">
            <h4 className="quick__links-title">
              Top Categories
            </h4>
            <ListGroup className='footer__contact'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <Link to="#">
                  Mobile Phones
                </Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <Link to="#">
                  Modern Sofa
                </Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="#">
                  Arm Chair
                </Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="#">
                  Smart Watches
                </Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg='2'md='3' className='mb-4'>
          <div className="footer__quick-links">
            <h4 className="quick__links-title">
              Top Categories
            </h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="#">
                  Useful Links
                </Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="#">
                  Shop
                </Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="#">
                  Login
                </Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="#">
                  Privacy Policy
                </Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg='3' md='4'>
          <div className="footer__quick-links">
            <h4 className="quick__links-title">
              Contact
            </h4>
            <ListGroup className='footer__contact'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i className="ri-map-pin-line"></i></span>
                <p>25 Văn Trì, Minh Khai, Bắc Từ Liêm, Hà Nội</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i className="ri-phone-line"></i></span>
                <p>+0373997970</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i className="ri-mail-line"></i></span>
                <p>nqdy0110@gmail.com</p>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg='12'>
          <p className="footer__copyright">
            Copyright {year} developed by NqDy^^. All rights reserved.
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer