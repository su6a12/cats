import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteImage} from '../reducer/images/actions'

import Image from './Image'

// use ES6 destructuring to pass in images array and deleteImage function
const ImageGrid  = ({images, deleteImage}) => 
  <div>
    {images.isFetching ? <div>Please Wait...</div> : null}
    <ul className='image-grid'>
      {images.images.map(image =>
        <Image
          key={image.id}
          onDeleteClick={deleteImage}
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

export default connect(mapStateToProps, mapDispatchtoProps)(ImageGrid)
