import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom'


const ProductSingle = ({ productInfo, backoffice }) => {
    const isBackoffice = backoffice

    return (
        <>
            <Card className="h-100 product-card">
                {isBackoffice && <Link to={`/product-form/${ productInfo.id }`} ><Button variant="warning" className="w-100 edit-btn" >EDIT PRODUCT</Button></Link>}
                <Card.Img className="product-img" variant="top" src={productInfo.imageUrl} />
                <Card.Body>
                    <Card.Title>{productInfo.name}</Card.Title>
                    <p>by {productInfo.artist}</p>
                    <Card.Text>
                        {productInfo.description}
                    </Card.Text>
                </Card.Body>
                <div className="d-flex justify-content-between align-items-end mb-3 mx-4">
                    <Badge className="price-badge" variant="success">from ${productInfo.price}</Badge>
                    <Button className="details-btn" variant="primary">details</Button>
                </div>
                <Button className="make-pdf-btn" variant="secondary" onClick={() => window.open(`${ process.env.REACT_APP_URL }/products/${ productInfo.id }/downloadPDF`, "_blank")}>pdf</Button>
            </Card>
        </>
    )
}

export default ProductSingle