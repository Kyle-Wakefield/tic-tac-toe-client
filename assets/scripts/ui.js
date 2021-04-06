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

const onGameEnd = function (result) {
  storage.game.over = true
  $('#messages').html(result)
  $('#messages').removeClass('error')
  $('#messages').removeClass('success')
  $('#messages').show()
}

const updateBoard = function () {
  for (let i = 0; i < 9; i++) {
    $(`[data-space-number=${i}]`).html(storage.game.cells[i])
  }
}

const checkGameState = function () {
  const cells = storage.game.cells
  // All the lines of 3 that can be formed
  const lines = [
    // Rows
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    // Columns
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    // Diagonals
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]]
  ]
  // 'not over' is the default value
  let status = 'not over'
  lines.forEach(function (line) {
    if (line[0] === 'x' && line[1] === 'x' && line[2] === 'x') {
      status = 'X wins!'
    } else if (line[0] === 'o' && line[1] === 'o' && line[2] === 'o') {
      status = 'O wins!'
    }
  })
  // if nobody has won and 9 moves have been made, it's a tie
  if (status === 'not over' && storage.game.__v === 9) {
    status = 'It\'s a Tie!'
  }
  return status
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
  $('#messages').hide()
  // onSuccess('Signed in successfully!')
}

const onSignOutError = function (err) {
  onError(err, 'Sign out failed.')
}

const onSignOutSuccess = function () {
  storage.user = null
  storage.game = null
  $('.signed-out-data').show()
  $('.signed-in-data').hide()
  $('#game-board').hide()
  $('#messages').hide()
  // onSuccess('Signed out successfully!')
}

const onStartGameError = function (err) {
  onError(err, 'Start game failed.')
}

const onStartGameSuccess = function (response) {
  storage.game = response.game
  storage.whoseTurn = 'x'
  updateBoard()
  $('#game-board').show()
  $('#messages').hide()
  // onSuccess('Started game successfully!')
}

const onMakeMoveError = function (err) {
  onError(err, 'Make move failed.')
}

const onMakeMoveSuccess = function (response) {
  storage.game = response.game
  store.switchTurn()
  updateBoard()
  const status = (checkGameState())
  if (status !== 'not over') {
    onGameEnd(status)
  }
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
