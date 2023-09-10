import React from 'react'
import ProductDetail from '../features/product-list/components/ProductsDetails'
import Navbar from '../features/navbar/Navbar'

function ProductDetailPage() {
  return (
    <div>
        <Navbar>
        <ProductDetail></ProductDetail>
        </Navbar>
        
    </div>
  )
}

export default ProductDetailPage