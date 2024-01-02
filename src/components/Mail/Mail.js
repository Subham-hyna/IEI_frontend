import React from 'react'
import './Mail.css'

const Mail = () => {
  return (
    <div className='mail'>
    <div>
    <div>
       <label>Title</label>
       <input type='text' placeholder='Title' />
   </div>
    <div>
       <label>CSS Style</label>
       <textarea placeholder='CSS' ></textarea>
   </div>
    <div>
       <label>HTML</label>
       <textarea placeholder='HTML' ></textarea>
   </div>
   <div>
    <button>Send</button>
   </div>
    </div>
</div>
  )
}

export default Mail