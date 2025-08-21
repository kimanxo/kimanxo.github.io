import React from 'react'

const Skill = ({img, alt}) => {
  return (
    <div className='w-24 flex flex-col items-center justfy-center gap-2'>
        <img src={img} alt={alt} className='w-20'/>
        <span>{alt}</span>
    </div>
  )
}

export default Skill