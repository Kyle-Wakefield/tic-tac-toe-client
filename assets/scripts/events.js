'use strict'

// Imports
const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('./../../lib/get-form-fields.js')

// Function to be called by the sign up event handler in app.js
const onSignUp = function (event) {
  // Prevent the page from refreshing when the form is submitted
  event.preventDefault()
  console.log('onSignUp')

  // Obtain the information entered by the user
  const formData = getFormFields(event.target)
  console.log(formData)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpError)
}

const onSignIn = function (event) {
  // Prevent the page from refreshing when the form is submitted
  event.preventDefault()
  console.log('onSignIn')

  // Obtain the information entered by the user
  const formData = getFormFields(event.target)
  console.log(formData)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInError)
}

const onSignOut = function (event) {
  // Prevent the page from refreshing when the button is clicked
  event.preventDefault()
  console.log('onSignOut')

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutError)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}
