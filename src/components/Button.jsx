import React from 'react'

const Button = ( {btnMame}) => {
  return (
    <div>
        <button className='px-5 m-5 bg-gray-200 border rounded-md cursor-pointer'>{btnMame}</button>
    </div>
  )
}

export default Button