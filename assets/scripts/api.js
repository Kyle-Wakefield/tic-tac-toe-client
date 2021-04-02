const config = require('./config')

const signUp = function (formData) {
  console.log('signUp')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

const signIn = function (formData) {
  console.log('signIn')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData
  })
}

module.exports = {
  signUp,
  signIn
}
