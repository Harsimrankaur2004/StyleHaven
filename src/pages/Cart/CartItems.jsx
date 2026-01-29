import { useState } from 'react'
import CartItem from './CartItem'
import EmptyCartMessage from './EmptyCartMessage'
import { useCart } from './CartContext'

const CartItems = () => {
  const {cartEmpty} = useCart()
  return (
    <div className='p-4 border flex-1 border-gray-500 rounded'>
      {cartEmpty ? <EmptyCartMessage /> : <CartItem />}
      
       
    </div>
  )
}

export default CartItems
