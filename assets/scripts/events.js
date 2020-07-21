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

  api.createGame(formData)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

let turn = true

const onUpdateGame = function (clickedCellEvent) {
  // console.log(clickedCellEvent)
  const clickedCell = clickedCellEvent.target
  const index = $(clickedCell).data('cell-index')
  // store.clickedBox = clickedCellEvent.target
  console.log(index)

  const player = turn ? 'X' : 'O'
  if (clickedCellEvent.target.innerText === '') {
    clickedCellEvent.target.innerText = player
    api.updateGame(index, player, false)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)
    turn = !turn
  }
  store.player = onUpdateGame.player

  // const winCombos = [
  //   [0, 1, 2],
  //   [3, 4, 5],
  //   [6, 7, 8],
  //   [0, 3, 6],
  //   [1, 4, 7],
  //   [2, 5, 8],
  //   [0, 4, 8],
  //   [6, 4, 2]
  // ]
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateGame,
  onUpdateGame
}
