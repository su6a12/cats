import {SET_IMAGES, DELETE_IMAGE} from './actions'


const initialState = {
  images: [],
  isFetching: true
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGES:
      return {
        'images': action.images,
        isFetching: false
      }
    case DELETE_IMAGE:
      const removedImage = state.images.filter(image => {
        return image.id !== action.imageToRemove
      });
      return {
        'images': removedImage
      }
      default:
        return state
  }
}

export default reducer
