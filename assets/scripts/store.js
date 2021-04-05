'use strict'

const storage = {}

const switchTurn = function () {
  if (storage.whoseTurn === 'x') {
    storage.whoseTurn = 'o'
  } else {
    storage.whoseTurn = 'x'
  }
}

module.exports = {
  storage,
  switchTurn
}
