import React from 'react'
import { blogCategories } from '../assets/assets'

const Bloglist = () => {
  return (
    <div>
      <div className='flex justify-center gap-4 sm-gap-8 my-10 relative'>
     {/* categories link */}
     {blogCategories.map((items)=>(
        <div key={items} className='relative'></div>
     ))}
      </div>
      <div>
        {/* blog card */}
      </div>
    </div>
  )
}

export default Bloglist
