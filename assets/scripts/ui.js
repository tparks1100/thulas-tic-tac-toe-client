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
  // console.log(store)
  store.user = response.user
  // console.log('store: ', store)
  // console.log('token: ', store.user.token)

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
  // console.log(response)
  store.game = response.game
  // console.log('store: ', store)
  // console.log('token: ', store.user.token)
}

const createGameFailure = function () {
  $('#player-message').text('New game was not started. Try again!')
}

let turn = true
// Player starts at X
store.player = 'X'
// store.game.over = false

const updateGameSuccess = function (response) {
  store.game = response.game
  // console.log('store: ', store)
  // console.log('token: ', store.user.token)
  $(store.clickedBox).text(store.player)
  const player = turn ? 'O' : 'X'
  // console.log(player)
  // store.clickedBox.innerText = player
  turn = !turn
  store.player = player
  $('#player-message').text('Player ' + store.player)

  let winner = wins()
  // Can't use triple equal signs on more than two things, can combine statements
}
const wins = function () {
  if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[1] && store.game.cells[0] === store.game.cells[2]) {
    ($('#player-message').text('Player ' + store.game.cells[0] + ' wins!'))
  } else if (store.game.cells[3] !== '' && store.game.cells[3] === store.game.cells[4] && store.game.cells[3] === store.game.cells[5]) {
    ($('#player-message').text('Player ' + store.game.cells[3] + ' wins!'))
  } else if (store.game.cells[6] !== '' && store.game.cells[6] === store.game.cells[7] && store.game.cells[6] === store.game.cells[8]) {
    ($('#player-message').text('Player ' + store.game.cells[6] + ' wins!'))
  } else if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[3] && store.game.cells[0] === store.game.cells[6]) {
    ($('#player-message').text('Player ' + store.game.cells[0] + ' wins!'))
  } else if (store.game.cells[1] !== '' && store.game.cells[1] === store.game.cells[4] && store.game.cells[1] === store.game.cells[7]) {
    ($('#player-message').text('Player ' + store.game.cells[1] + ' wins!'))
  } else if (store.game.cells[2] !== '' && store.game.cells[2] === store.game.cells[5] && store.game.cells[2] === store.game.cells[8]) {
    ($('#player-message').text('Player ' + store.game.cells[2] + ' wins!'))
  } else if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[4] && store.game.cells[0] === store.game.cells[8]) {
    ($('#player-message').text('Player ' + store.game.cells[0] + ' wins!'))
  } else if (store.game.cells[2] !== '' && store.game.cells[2] === store.game.cells[4] && store.game.cells[2] === store.game.cells[6]) {
    ($('#player-message').text('Player ' + store.game.cells[2] + ' wins!'))
  } else { if (store.game.cells.indexOf('') === -1) {
    $('#player-message').text('It\'s a tie!')
  }
  }
}
// tried to use this to start a new game, but it just refreshes the page forcing the user to sign out and sign in again
// else if (response.game.cells.every(store.clickedBox, '')) {
//   ($('#player-message').text('No winner!'))
// }
// $('#create-game').off('click', location.reload(false))

// const updateGameFailure = function (response) {
//   store.game = response.game
//   if (response.game.cells === 'X') {
//     $('#player-message').text('Please choose an empty space!')
//   } else if (response.game.cells === 'O') {
//     $('#player-message').text('Please choose an empty space!')
//   }
// }

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
  updateGameSuccess
  // updateGameFailure
}
