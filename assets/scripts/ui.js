'use strict'

const store = require('./store.js')
const storage = store.storage

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

const updateBoard = function () {
  for (let i = 0; i < 9; i++) {
    $(`[data-space-number=${i}]`).html(storage.game.cells[i])
  }
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
  storage.user = response.user
  $('.signed-in-data').show()
  $('.signed-out-data').hide()
  $('#sign-in-form').trigger('reset')
  $('#signed-in-as').html('Signed in as: ' + storage.user.email)
  onSuccess('Signed in successfully!')
}

const onSignOutError = function (err) {
  onError(err, 'Sign out failed.')
}

const onSignOutSuccess = function () {
  storage.user = null
  storage.game = null
  $('.signed-out-data').show()
  $('.signed-in-data').hide()
  onSuccess('Signed out successfully!')
}

const onStartGameError = function (err) {
  onError(err, 'Start game failed.')
}

const onStartGameSuccess = function (response) {
  storage.game = response.game
  storage.whoseTurn = 'x'
  updateBoard()
  // console.log('id: ' + storage.game._id + ' token: ' + storage.user.token)
  onSuccess('Started game successfully!')
}

const onMakeMoveError = function (err) {
  onError(err, 'Make move failed.')
}

const onMakeMoveSuccess = function (response) {
  storage.game = response.game
  store.switchTurn()
  updateBoard()
  onSuccess('Made move successfully!')
}

module.exports = {
  onSignUpError,
  onSignUpSuccess,
  onSignInError,
  onSignInSuccess,
  onSignOutError,
  onSignOutSuccess,
  onStartGameError,
  onStartGameSuccess,
  onMakeMoveError,
  onMakeMoveSuccess
}
