'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events.js')
const store = require('./store.js')
const storage = store.storage

$(() => {
  storage.user = null
  storage.game = null
  $('.signed-in-data').hide()
  $('#game-board').hide()
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#sign-out-button').on('click', events.onSignOut)
  $('#start-game-button').on('click', events.onStartGame)
  $('.board-space').on('click', events.onClickSpace)
})
