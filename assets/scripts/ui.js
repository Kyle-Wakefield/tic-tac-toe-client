'use strict'

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

const onSignInError = function () {
  console.log('sign in error')
  $('#messages').html('Sign in failed, make sure you spelled your Email and password correctly.')
  $('#messages').removeClass('success')
  $('#messages').addClass('error')
  $('#messages').show()
  setTimeout(() => $('#messages').hide(), 6000)
}

const onSignInSuccess = function () {
  console.log('sign in success')
  $('#sign-in-form').trigger('reset')
  $('#messages').html('Signed in successfully!')
  $('#messages').removeClass('error')
  $('#messages').addClass('success')
  $('#messages').show()
  setTimeout(() => $('#messages').hide(), 4000)
}

module.exports = {
  onSignUpError,
  onSignUpSuccess,
  onSignInError,
  onSignInSuccess
}
