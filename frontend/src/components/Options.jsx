import React from 'react'

export default function Options() {
  return (
    <div className=' bg-[#ffff] sm:w-[60%] lg:w-[40%] xl:mx-auto flex font2 xl:gap-5 rounded-lg p-1 mx-auto justify-between'>
      <div className=' col-span-1 p-2   hover:bg-slate-500 hover:rounded hover:cursor-pointer hover:transition-all hover:delay-100'>Expenses</div>
      <div className='w-[2px] border-r-2 border-black'></div>
      
      <div className=' p-2    hover:bg-slate-500 hover:rounded hover:cursor-pointer hover:transition-all hover:delay-100'>Pie Chart</div>
      <div className=' col-span-1 w-[2px] border-r-2 border-black'></div>
      <div  className=' col-span-1 p-2  hover:bg-slate-500 hover:rounded hover:cursor-pointer hover:transition-all hover:delay-100' >Add</div>
    </div>
  )
}
