import React from 'react'

function Tool(props) {
  return (
    <div className='px-2 border-[1.5px] text-gray-500 border-gray-300 rounded-3xl mr-[4px]'>
        {props.name}
    </div>    
  )
}

export default Tool