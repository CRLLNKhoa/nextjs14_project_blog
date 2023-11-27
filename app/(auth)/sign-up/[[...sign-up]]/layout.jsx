import React from 'react'

export default function layout({children}) {
  return (
    <div className='w-full h-full flex pt-5 items-center justify-center 
    linear-gradient(to right, rgb(254, 202, 202), rgb(252, 165, 165), rgb(254, 240, 138))'>
    {children}
    </div>
  )
}
