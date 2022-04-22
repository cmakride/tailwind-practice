import React from 'react'
import Button1 from '../button/Button1'

const First = () => {
  return (
    <div className='container p-4'>
      <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4'>
        <div>
          <div className='text-xl font-medium text-primary'>
            ChitChat
          </div>
          <div className='text-blue-450'>
            you have a new message!
          </div>
          <Button1>
            Hello
          </Button1>
        </div>
      </div>
    </div>
  )
}

export default First