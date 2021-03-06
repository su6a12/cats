import APIs from '../../APIs'

export const SET_IMAGES = 'SET_IMAGES'
export const DELETE_IMAGE = 'DELETE_IMAGE'

// call API to fetch cat pictures
// after that's complete then trigger API call to fetch cat facts
export function getCatImages() {
  return dispatch => {
    APIs.getPics()
    .then(response => response.text())
    .then(text => new DOMParser().parseFromString(text, "text/xml"))
    .then(xml => {
      const imagesCollection = [...xml.getElementsByTagName('image')]
      const images = imagesCollection.map(image => {
        let url = image.getElementsByTagName('url')[0].innerHTML
        let id = image.getElementsByTagName('id')[0].innerHTML
        return {url, id};
      })
      dispatch(getCatFacts(images))
    })
  }
}

// trigger action to set store with cat images and facts
export function getCatFacts(images) {
  return dispatch => {
    APIs.getFacts()
      .then(response => response.json())
      .then(data => {
        data.facts.forEach((fact, index) => {
          images[index].fact = fact
        })
        dispatch(setImages(images))
      })
  }
}

export function setImages(images) {
  return {
    type: SET_IMAGES,
    isFetching: true,
    images
  }
}

export function deleteImage(id) {
  return {
    type: DELETE_IMAGE,
    imageToRemove: id
  }
}
