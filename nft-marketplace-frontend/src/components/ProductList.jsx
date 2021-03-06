import { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductSingle from './ProductSingle'


const ProductList = ({ backoffice }) => {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            const response = await fetch(`${ process.env.REACT_APP_URL }/products`)
            if (response.ok) {
                const loadedProducts = await response.json()
                setProducts(loadedProducts)
            } else {
                throw new Error("Failed to fetch!!!!")
            }
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    useEffect(() => fetchProducts(), [])

    return (
        <Row>
            {
                products.map(products => (
                    <Col xs={6} md={4} lg={3} className="my-3">
                        <ProductSingle key={products.id} productInfo={products} backoffice={backoffice} />
                    </Col>
                ))
            }
        </Row>
    )
}

export default ProductList