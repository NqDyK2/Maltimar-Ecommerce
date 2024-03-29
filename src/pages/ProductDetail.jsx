import React, { useState, useRef, useEffect } from 'react'

import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import CommoSection from '../components/UI/CommoSection'
import "../styles/product-details.css"
import { motion } from 'framer-motion'
import ProductsList from '../components/UI/ProductsList'
import { useDispatch } from 'react-redux'
import { cartAction } from '../redux/slices/cartSlices'
import { toast } from "react-toastify"

import {db} from "../firebase.config"
import { doc, getDoc } from 'firebase/firestore'
import useGetData from '../custom-hooks/useGetData'

const ProductDetail = () => {

  const [product,setProduct] = useState({})
  const [tab, setTabs] = useState('desc');
  const reviewUser = useRef('')
  const reviewMsg = useRef('')
  const dispatch = useDispatch()

  const [rating, setRating] = useState(null);
  const { id } = useParams()

  const {data: products } = useGetData('products')

  const docRef = doc(db, 'products', id)

  useEffect(() => {
    const getProduct = async () => {
      const docSnap = await getDoc(docRef)

      if(docSnap.exists()){
        setProduct(docSnap.data())
      } else {
        console.log("No product!!!!!!");
      }
    }
    getProduct()
  },[])

  const { imgUrl, productName, price, description, shortDesc, category } = product

  const relatedProducts = products.filter(item => item.category === category)

  const sumbitHandler = (e) => {
    e.preventDefault()

    const reviewUserName = reviewUser.current.value
    const reviewUserMsg = reviewMsg.current.value

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };

    console.log(reviewObj);
    toast.success("Review submitted")
  }

  const addToCart = () => {
    dispatch(cartAction.addItem({
      id,
      image: imgUrl,
      productName,
      price,
    }));

    toast.success("Product added success")
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [product])

  return <Helmet title={productName}>
    <CommoSection title={productName} />

    <section className='pt-0'>
      <Container>
        <Row className='mt-5'>
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
                  <span><i className="ri-star-s-fill"></i></span>
                  <span><i className="ri-star-s-fill"></i></span>
                  <span><i className="ri-star-s-fill"></i></span>
                  <span><i className="ri-star-s-fill"></i></span>
                  <span><i className="ri-star-half-s-line"></i></span>
                </div>
                {/* <p>(<span>{avgRating}</span>ratings)</p> */}
              </div>
              <div className='d-flex align-items-center gap-5'>
                <span className='product__price'>${price}</span>
                <span>Category: {category}</span>
              </div>
              <p className='mt-3'>{shortDesc}</p>

              <motion.button whileTap={{ scale: 1.2 }} className="buy__btn" onClick={addToCart}>Add to Cart</motion.button>
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
                {/* Reviews ({reviews.length}) */}
              </h6>
            </div>
            {
              tab === 'desc' ? <div className="tab__content mt-5">
                <p>{description}</p>
              </div> : (
                <div className='product__review mt-5'>
                  <div className="review__wrapper">
                    {/* <ul>
                      {
                        reviews?.map((item, index) => (
                          <li key={index} className="mb-4">
                            <h6>Jhon Doe</h6>
                            <span>{item.rating} (rating)</span>
                            <p>{item.text}</p>
                          </li>
                        ))
                      }
                    </ul> */}

                    <div className="review__form">
                      <h4>Leave your experience</h4>
                      <form action='' onSubmit={sumbitHandler}>
                        <div className="form__group">
                          <input type="text" placeholder='Enter name' ref={reviewUser} required/>
                        </div>
                        <div className="form__group d-flex align-items-center gap-5 rating__group">
                          <motion.span whileTap={{ scale: 1.2}} onClick={() => setRating(1)}>1 <i className="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{ scale: 1.2}} onClick={() => setRating(2)}>2 <i className="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{ scale: 1.2}} onClick={() => setRating(3)}>3 <i className="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{ scale: 1.2}} onClick={() => setRating(4)}>4 <i className="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{ scale: 1.2}} onClick={() => setRating(5)}>5 <i className="ri-star-s-fill"></i></motion.span>
                        </div>
                        <div className="form__group">
                          <textarea type="text" placeholder='Review Message...' rows={4} ref={reviewMsg} required/>
                        </div>

                        <button type='submit' className="buy__btn">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              )
            }
          </Col>

          <Col lg='12' className='mt-5'>
            <h2 className="related__title">You might also like</h2>
          </Col>
          <ProductsList data={relatedProducts} />
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default ProductDetail