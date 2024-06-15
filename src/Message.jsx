import React from 'react'

const Message = ({mess}) => {
  console.log(mess)
  return (
    <div className='text-green-400'>Message will be: {mess}</div>
  )
}

export default Message