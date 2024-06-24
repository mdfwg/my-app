
import React from 'react'

const Card = ({product}: any) => {
    console.log(product)
  return (
    <div>
        <div key={product.sku} className="bg-white p-6 rounded-lg shadow-lg">
            <img src={product.url} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-700">SKU: {product.sku}</p>
            <p className="text-gray-700">Price: ${product.selling_price}</p>
        </div>
    </div>
  )
}

export default Card