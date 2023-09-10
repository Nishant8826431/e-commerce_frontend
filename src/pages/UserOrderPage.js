import React from 'react'
import Navbar from '../features/navbar/Navbar'
import UserOrder from '../features/user/Components/UserOrder'

function UserOrderPage() {
  return (
    <div>
        <Navbar>
            <h1 className='mx-auto text-2xl'>My Orders</h1>
            <UserOrder></UserOrder>
        </Navbar>
    </div>
  )
}

export default UserOrderPage;