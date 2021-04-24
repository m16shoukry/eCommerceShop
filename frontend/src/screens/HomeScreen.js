import React, { useEffect, useState} from 'react'
import Product from '../components/Product'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'

const HomeScreen = () => {
    const [products, setProduct] = useState([])
    
    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products')
            
            setProduct(data)
        } 
        
        fetchProducts()

    }, [])


    return (
        <>
            <h1>Latest products</h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
