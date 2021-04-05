'use strict'

const store = require('./store.js')

const onSignUpError = function (err) {
  console.log(err)
  $('#messages').html('Sign up failed, make sure your Email is unique and your passwords match.')
  $('#messages').removeClass('success')
  $('#messages').addClass('error')
  $('#messages').show()
  setTimeout(() => $('#messages').hide(), 6000)
}

const onSignUpSuccess = function () {
  console.log('sign up success')
  $('#sign-up-form').trigger('reset')
  $('#messages').html('Signed up successfully!')
  $('#messages').removeClass('error')
  $('#messages').addClass('success')
  $('#messages').show()
  setTimeout(() => $('#messages').hide(), 4000)
}

const onSignInError = function (err) {
  console.log(err)
  $('#messages').html('Sign in failed, make sure you spelled your Email and password correctly.')
  $('#messages').removeClass('success')
  $('#messages').addClass('error')
  $('#messages').show()
  setTimeout(() => $('#messages').hide(), 6000)
}

const onSignInSuccess = function (response) {
  console.log(store)
  store.user = response.user
  console.log(store.user)
  $('.signed-in-data').show()
  $('.signed-out-data').hide()
  $('#sign-in-form').trigger('reset')
  $('#signed-in-as').html('Signed in as: ' + store.user.email)
  $('#messages').html('Signed in successfully!')
  $('#messages').removeClass('error')
  $('#messages').addClass('success')
  $('#messages').show()
  setTimeout(() => $('#messages').hide(), 4000)
}

const onSignOutError = function (err) {
  console.log(err)
  $('#messages').html('Sign out failed, are you signed in?')
  $('#messages').removeClass('success')
  $('#messages').addClass('error')
  $('#messages').show()
  setTimeout(() => $('#messages').hide(), 6000)
}

const onSignOutSuccess = function () {
  store.user = null
  store.game = null
  $('.signed-out-data').show()
  $('.signed-in-data').hide()
  $('#signed-in-as').html('Not currently signed in')
  $('#messages').html('Signed out successfully!')
  $('#messages').removeClass('error')
  $('#messages').addClass('success')
  $('#messages').show()
  setTimeout(() => $('#messages').hide(), 4000)
}

const onStartGameError = function (err) {
  console.log(err)
  $('#messages').html('Start game failed.')
  $('#messages').removeClass('success')
  $('#messages').addClass('error')
  $('#messages').show()
  setTimeout(() => $('#messages').hide(), 6000)
}

const onStartGameSuccess = function (response) {
  store.game = response.game
  $('#messages').html('Started game successfully!')
  $('#messages').removeClass('error')
  $('#messages').addClass('success')
  $('#messages').show()
  setTimeout(() => $('#messages').hide(), 4000)
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
