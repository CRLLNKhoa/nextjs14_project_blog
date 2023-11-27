import React from 'react'

export default function layout({children}) {
  return (
    <div className='w-full h-full flex pt-10 items-center justify-center'>{children}</div>
  )
}
