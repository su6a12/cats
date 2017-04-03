const CAT_PICS = 'http://mapd-cats.azurewebsites.net/catpics'
const CAT_FACTS = 'http://mapd-cats.azurewebsites.net/catfacts'

const APIs = {
    getPics: function() {
    return fetch(CAT_PICS)
  },
  getFacts: function() {
    return fetch(CAT_FACTS)
  }
}

module.exports = APIs
