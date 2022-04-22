import React from 'react'

// ! if want this to be an a tag just change the button to <a> and within the opening a tag do <a href={props.href}>

// ? px and py refer to padding right/left and padding top/bottom, just a p-4 would give padding in every direction

const Button1 = (props) => {
  return (
    <button className='bg-blue-500 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-600'>{props.children}</button>
  )
}

export default Button1