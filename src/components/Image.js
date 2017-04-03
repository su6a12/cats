import React from 'react'

const Image = (image) =>
  <li className='image'>
    <img src={image.url} alt='cute cat' className='per-image'/>
    <div className='image-fact'>{image.fact}</div>
    <button className='delete-img' onClick={image.onDelete(image.id)}>Remove</button>
  </li>

  export default Image
