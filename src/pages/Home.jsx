import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion' 
import { Col, Container, Row } from 'reactstrap'
import "../styles/home.css"
import Helmet from '../components/Helmet/Helmet'
import heroImg from "../assets/images/hero-img.png"

import Services from '../services/Services'

import ProductsList from '../components/UI/ProductsList'

import products from '../assets/data/products'
const Home = () => {  
  
  const [data, setData] = useState(products)
  const year = new Date().getFullYear()

  useEffect(() => {
    const filteredProducts = products.filter(
      (item) => item.category === "chair"
      );
      setData(filteredProducts)
  },[]);

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

              <motion.button whileTap={{ scale:1.2 }} className="buy__btn"><Link to="/shop">SHOP NOW</Link></motion.button>
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
    <Services />
    <section className="trending__products">
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section__title'>Trending Products</h2>
          </Col>
          <ProductsList data={data}/>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home