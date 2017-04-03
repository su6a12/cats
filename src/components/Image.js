import React from 'react'

const Image = (image) =>
  <li className='image-container'>
    <img src={image.url} alt='cute cat' className='per-image'/>
    <div className='image-fact'>{image.fact}</div>
    <button className='delete-img' onClick={image.onDeleteClick(image.id)}>Delete</button>
  </li>

export default Image
