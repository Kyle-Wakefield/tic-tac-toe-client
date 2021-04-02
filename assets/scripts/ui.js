'use strict'

const store = require('./store.js')

const onSignUpError = function () {
  console.log('sign up error')
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
  console.log(1)
  console.log(err)
  console.log(2)
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
  $('#sign-in-form').trigger('reset')
  $('#signed-in-as').html('Signed in as: ' + store.user.email)
  $('#messages').html('Signed in successfully!')
  $('#messages').removeClass('error')
  $('#messages').addClass('success')
  $('#messages').show()
  setTimeout(() => $('#messages').hide(), 4000)
}

const onSignOutError = function () {
  console.log('sign out error')
  $('#messages').html('Sign out failed, are you signed in?')
  $('#messages').removeClass('success')
  $('#messages').addClass('error')
  $('#messages').show()
  setTimeout(() => $('#messages').hide(), 6000)
}

const onSignOutSuccess = function () {
  store.user = null
  $('#signed-in-as').html('Not currently signed in')
  $('#messages').html('Signed out successfully!')
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
  onSignOutSuccess
}
