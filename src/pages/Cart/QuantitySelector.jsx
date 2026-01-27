import { useState } from "react"
const btnStyle = "bg-gray-200 text-gray-600 flex-1 flex justify-center items-center cursor-pointer text-2xl font-bold"

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1)

  const increment = () => {
    setQuantity(quantity + 1)}
  const decrement = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1)
  }
  return (
    <div className="flex border border-gray-500 h-7 justify-center rounded w-25 my-2">
      <button className={btnStyle} onClick={increment}>+</button>
      <div className=" px-3 text-center font-bold text-xl">{quantity}</div>
      <button className={btnStyle} onClick={decrement}>-</button>
    </div>
  )
}

export default QuantitySelector
