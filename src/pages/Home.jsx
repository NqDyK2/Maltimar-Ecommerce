import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import "../styles/home.css"
import Helmet from '../components/Helmet/Helmet'
import heroImg from "../assets/images/hero-img.png"

const Home = () => {
  const year = new Date() . getFullYear()
  return <Helmet title={"Home"}>
    <section className='hero__section'>
      <Container>
        <Row>
          <Col lg='6'  md='6'>
            <div className="hero__cotent">
              <p className="hero__subtitle">
                Trending product in {year}
              </p>
              <h2>Make Your Interior More Minimalistic & Modern </h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>

              <button className="buy_btn">SHOP NOW</button>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={heroImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home