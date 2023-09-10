import React from 'react'
import Navbar from '../features/navbar/Navbar'
import AdminProductList from '../features/Admin/components/AdminProductList';

function AdminHome() {
  return (
    <div>
        <Navbar>
            <AdminProductList></AdminProductList>
        </Navbar>
    </div>
  )
}

export default AdminHome;
