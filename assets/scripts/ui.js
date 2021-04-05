'use strict'

const store = require('./store.js')

const onError = function (err, errorMessage) {
  console.log(err)
  $('#messages').html(errorMessage)
  $('#messages').removeClass('success')
  $('#messages').addClass('error')
  $('#messages').show()
  setTimeout(() => $('#messages').hide(), 6000)
}

const onSuccess = function (successMessage) {
  $('#messages').html(successMessage)
  $('#messages').removeClass('error')
  $('#messages').addClass('success')
  $('#messages').show()
  setTimeout(() => $('#messages').hide(), 4000)
}

const onSignUpError = function (err) {
  onError(err, 'Sign up failed, make sure your Email is unique and your passwords match.')
}

const onSignUpSuccess = function () {
  console.log('sign up success')
  $('#sign-up-form').trigger('reset')
  onSuccess('Signed up succesfully!')
}

const onSignInError = function (err) {
  onError(err, 'Sign in failed, make sure you spelled your Email and password correctly.')
}

const onSignInSuccess = function (response) {
  console.log('sign in success')
  store.user = response.user
  $('.signed-in-data').show()
  $('.signed-out-data').hide()
  $('#sign-in-form').trigger('reset')
  $('#signed-in-as').html('Signed in as: ' + store.user.email)
  onSuccess('Signed in successfully!')
}

const onSignOutError = function (err) {
  onError(err, 'Sign out failed.')
}

const onSignOutSuccess = function () {
  store.user = null
  store.game = null
  $('.signed-out-data').show()
  $('.signed-in-data').hide()
  onSuccess('Signed out successfully!')
}

const onStartGameError = function (err) {
  onError(err, 'Start game failed.')
}

const onStartGameSuccess = function (response) {
  store.game = response.game
  onSuccess('Started game successfully!')
}

module.exports = {
  onSignUpError,
  onSignUpSuccess,
  onSignInError,
  onSignInSuccess,
  onSignOutError,
  onSignOutSuccess,
  onStartGameError,
  onStartGameSuccess
}
