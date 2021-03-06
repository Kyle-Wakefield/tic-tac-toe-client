const config = require('./config')
const store = require('./store.js')
const storage = store.storage

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

// This function throws an error if called while the user is already signed out,
//  but that won't happen as long as the sign out button is hidden while the user is logged out
const signOut = function () {
  console.log('signOut')
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + storage.user.token
    }
  })
}

const startGame = function () {
  console.log('startGame')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + storage.user.token
    }
  })
}

const makeMove = function (square) {
  console.log('making move at square ' + square + ' with piece ' + storage.whoseTurn)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + storage.game._id,
    headers: {
      Authorization: 'Bearer ' + storage.user.token
    },
    data: {
      game: {
        cell: {
          index: square,
          value: storage.whoseTurn
        },
        over: storage.game.over
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  startGame,
  makeMove
}
