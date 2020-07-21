'use strict'

const store = require('./store')

const signUpSuccess = function () {
  $('#message').text('Successfully signed up!')
}

const signUpFailure = function () {
  $('#message').text('Sign up failed!')
}

const signInSuccess = function (response) {
  $('#message').text('Successfully signed in!')
  console.log(store)
  store.user = response.user
  console.log('store: ', store)
  console.log('token: ', store.user.token)

  $('.authenticated').show()
  $('.unauthenticated').hide()
}

const signInFailure = function () {
  $('#message').text('Sign in failed!')
}

const changePasswordSuccess = function () {
  $('#message').text('You successfully changed your password!')
}

const changePasswordFailure = function () {
  $('#message').text('Password was unable to be changed.')
}

const signOutSuccess = function () {
  $('#message').text('Signed you out!')
  $('.unauthenticated').show()
  $('.authenticated').hide()
}

const signOutFailure = function () {
  $('#message').text('Sign out failed.')
}

const createGameSuccess = function (response) {
  $('#player-message').text('New game has started! Choose your first space!')
  console.log(response)
  store.game = response.game
  console.log('store: ', store)
  console.log('token: ', store.user.token)
}

const createGameFailure = function () {
  $('#player-message').text('New game was not started. Try again!')
}

let turn = true
store.player = 'X'

const updateGameSuccess = function (response) {
  store.game = response.game
  console.log('store: ', store)
  console.log('token: ', store.user.token)
  $(store.clickedBox).text(store.player)
  const player = turn ? 'O' : 'X'
  console.log(player)
  // store.clickedBox.innerText = player
  turn = !turn
  store.player = player
  $('#player-message').text('Player ' + store.player)
  // Can't use triple equal signs on more than two things, can combine statements
  const chooseWinner = function () {
    if (response.game.cells[0] !== '' && response.game.cells[0] === response.game.cells[1] && response.game.cells[0] === response.game.cells[2]) {
      ($('#player-message').text('Player ' + response.game.cells[0] + ' wins!'))
    } else if (response.game.cells[3] !== '' && response.game.cells[3] === response.game.cells[4] && response.game.cells[3] === response.game.cells[5]) {
      ($('#player-message').text('Player ' + response.game.cells[3] + ' wins!'))
    } else if (response.game.cells[6] !== '' && response.game.cells[6] === response.game.cells[7] && response.game.cells[6] === response.game.cells[8]) {
      ($('#player-message').text('Player ' + response.game.cells[6] + ' wins!'))
    } else if (response.game.cells[0] !== '' && response.game.cells[0] === response.game.cells[3] && response.game.cells[0] === response.game.cells[6]) {
      ($('#player-message').text('Player ' + response.game.cells[0] + ' wins!'))
    } else if (response.game.cells[1] !== '' && response.game.cells[1] === response.game.cells[4] && response.game.cells[1] === response.game.cells[7]) {
      ($('#player-message').text('Player ' + response.game.cells[1] + ' wins!'))
    } else if (response.game.cells[2] !== '' && response.game.cells[2] === response.game.cells[5] && response.game.cells[2] === response.game.cells[8]) {
      ($('#player-message').text('Player ' + response.game.cells[2] + ' wins!'))
    } else if (response.game.cells[0] !== '' && response.game.cells[0] === response.game.cells[4] && response.game.cells[0] === response.game.cells[8]) {
      ($('#player-message').text('Player ' + response.game.cells[0] + ' wins!'))
    } else if (response.game.cells[2] !== '' && response.game.cells[2] === response.game.cells[4] && response.game.cells[2] === response.game.cells[6]) {
      ($('#player-message').text('Player ' + response.game.cells[2] + ' wins!'))
    }
  }
  if (chooseWinner !== 'true') {
    ($('#player-message').text('No one wins, it is a draw!'))
  }
}
const updateGameFailure = function () {
  $('#player-message').text('Please choose an empty space!')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure
}
