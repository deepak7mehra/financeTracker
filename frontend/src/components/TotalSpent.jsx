import React from 'react'

export default function TotalSpent({amount=568}) {
  return (
    <div className='bg-rose-500 p-4 rounded-2xl text-center text-white text-xl'>
        <button>Total Spent ₹ {amount}</button>
    </div>
  )
}
