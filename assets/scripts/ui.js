'use strict'

const store = require('./store')
const scriptsEvents = require('./events')

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
  $('#message').text('New game has started! Choose your first space!')
  console.log(response)
  store.game = response.game
  console.log('store: ', store)
  console.log('token: ', store.user.token)
}

const createGameFailure = function () {
  $('#message').text('New game was not started. Try again!')
}

const updateGameSuccess = function (response) {
  $('#next-player-message').text('Choose a space')
  console.log(response)
  store.player = response.player
  console.log('store: ', store)
  console.log('token: ', store.user.token)
}

const updateGameFailure = function () {
  $('#next-player-message').text('Please choose an empty space!')
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
