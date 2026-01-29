import { useCart } from "./CartContext"

const RemoveItemButton = ({id}) => {
  const { removeItem } = useCart();
  return (

    <button onClick={() => {removeItem(id)}} className='hover:text-gray-600 lg:text-xl cursor-pointer text-red-600'>
      Remove
    </button>
  )
}

export default RemoveItemButton
