import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../actions/productActions.js' 
import Product from '../components/Product'
import { Row, Col } from 'react-bootstrap'

const HomeScreen = () => {
    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList) 
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])


    return (
        <>
            <h1>Latest products</h1>

            {loading ? (
             <h2>Loading...</h2> ) :
             error ? 
             (<h3>{error}</h3>) :
            ( <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row> )
            }
            
        </>
    )
}

export default HomeScreen
