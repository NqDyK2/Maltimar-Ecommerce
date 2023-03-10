import React, { useState } from 'react'

import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import CommoSection from '../components/UI/CommoSection'
import "../styles/product-details.css"
import { motion } from 'framer-motion'

const ProductDetail = () => {

  const [tab, setTabs] = useState('desc')
  const { id } = useParams()
  const product = products.find(item => item.id === id)
  const { imgUrl, productName, price, avgRating, reviews, description, shortDesc } = product

  return <Helmet title={productName}>
    <CommoSection title={productName} />

    <section className='pt-0'>
      <Container>
        <Row>
          <Col lg='6'>
            <img src={imgUrl} alt="" />
          </Col>
          <Col lg='6'>
            <div className="product__details">
              <h2>
                {productName}
              </h2>
              <div className="product__rating d-flex align-items-center gap-5 mb-3">
                <div>
                  <span><i class="ri-star-s-fill"></i></span>
                  <span><i class="ri-star-s-fill"></i></span>
                  <span><i class="ri-star-s-fill"></i></span>
                  <span><i class="ri-star-s-fill"></i></span>
                  <span><i class="ri-star-half-s-line"></i></span>
                </div>
                <p>(<span>{avgRating}</span>ratings)</p>
              </div>
              <span className='product__price'>${price}</span>
              <p className='mt-3'>{shortDesc}</p>

              <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">Add to Cart</motion.button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <div className="tab__wrapper d-flex align-items-center gap-5">
              <h6 className={`${tab === 'desc' ? 'active__tab' : ''}`} onClick={() => setTabs('desc')}>
                Description
              </h6>
              <h6 className={`${tab === 'rev' ? 'active__tab' : ''}`} onClick={() => setTabs('rev')}>
                Reviews ({reviews.length})
              </h6>
            </div>
            {
              tab === 'desc' ? <div className="tab__content mt-5">
                <p>{description}</p>
              </div> : (
                <div className='product__review mt-5'>
                  <div className="review__wrapper">
                    <ul>
                      {
                        reviews?.map((item,index) => (
                          <li key={index} className="mb-4">
                            <h6>Jhon Doe</h6>
                            <span>{item.rating} ( rating)</span>
                            <p>{item.text}</p>
                          </li>
                        ))
                      }
                    </ul>

                    <div className="review__form">
                      <h4>Leave your experience</h4>
                      <form action=''>
                        <div className="form__group">
                          <input type="text" placeholder='Enter name' />
                        </div>
                        <div className="form__group">
                          <span>1 <i class="ri-star-s-fill"></i></span>
                          <span>2 <i class="ri-star-s-fill"></i></span>
                          <span>3 <i class="ri-star-s-fill"></i></span>
                          <span>4 <i class="ri-star-s-fill"></i></span>
                          <span>5 <i class="ri-star-s-fill"></i></span>
                        </div>
                        <div className="form__group">
                            <textarea type="text" placeholder='Review Message...' rows={4}/>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )
            }
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default ProductDetail