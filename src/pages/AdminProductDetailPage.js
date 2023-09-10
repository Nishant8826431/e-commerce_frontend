import React from 'react'
import ProductDetail from '../features/product-list/components/ProductsDetails'
import Navbar from '../features/navbar/Navbar'
import AdminProductsDetails from '../features/Admin/components/AdminProductsDetails'

function AdminProductDetailPage() {
  return (
    <div>
        <Navbar>
        <AdminProductsDetails></AdminProductsDetails>
        </Navbar>
        
    </div>
  )
}

export default AdminProductDetailPage