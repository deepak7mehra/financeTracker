import React from 'react'

export default function Category({path,name}) {
  return (
    <div className='bg-[#ffff] flex gap-3 p-4 rounded-full text-sm lg:text-lg max-w-[180px] font1'>
        <div><img width="30" src={path} alt="this is an svg" /></div>
        <div>{name}</div>
      
    </div>
  )
}
