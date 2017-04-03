import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteImage} from '../reducer/images/actions'

import Image from './Image'

// use ES6 destructuring to pass in images array and deleteImage function
const PhotoGrid  = ({images, deleteImage}) => 
  <div>
    {images.isFetching ? <div>Loading...</div> : null}
    <ul className='image-grid'>
      {images.images.map(image =>
        <Image
          key={image.id}
          onDelete={deleteImage}
          {...image}/>
      )}
    </ul>
  </div>

const mapStateToProps = ({images}) => ({
  images
})

const mapDispatchtoProps = dispatch => ({
  deleteImage(id) {
    return () => {
      dispatch(deleteImage(id))
    }
  }
})

export default connect(mapStateToProps, mapDispatchtoProps)(PhotoGrid)
