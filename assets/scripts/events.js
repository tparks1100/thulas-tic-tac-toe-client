'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const getFormFields = require('../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signOut(formData)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreateGame = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  store.player = 'X' || 'O'

  api.createGame(formData)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

let turn = true

const onUpdateGame = function (clickedCellEvent) {
  console.log(clickedCellEvent)
  const clickedCell = clickedCellEvent.target
  const index = $(clickedCell).data('cell-index')
  store.clickedBox = clickedCellEvent.target
  console.log(index)

  const player = turn ? 'X' : 'O'
  if (clickedCellEvent.target.innerText === '') {
    clickedCellEvent.target.innerText = player
    api.updateGame(index, player, false)
      .then()
      .catch()
    turn = !turn
  }
  const isOccupied = clickedCellEvent.target
  if (isOccupied === 'X') {
    return ($('#next-player-message').text('Choose an empty space!'))
  } else if (isOccupied === 'O') {
    return ($('#next-player-message').text('Choose an empty space!'))
  } else {
    return ($('#next-player-message').text('Next player move'))
  }
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateGame,
  onUpdateGame
}
