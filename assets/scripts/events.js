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

const onUpdateGame = function (clickedCellEvent) {
  // console.log(clickedCellEvent)
  const clickedCell = clickedCellEvent.target
  const index = $(clickedCell).data('cell-index')
  // creating a key on store object and storing event value as an object
  store.clickedBox = clickedCellEvent.target
  console.log(index)
  if (clickedCellEvent.target.innerText === '') {
    api.updateGame(index, store.player)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)
  }
//   const winner = function () {
// if (store.game.cells[0] === store.game.cells[1] && store.game.cells[2]) {
//       return ($('#player-message').text(store.game.cells._v + ' has won!'))
// } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[5]) {
//       return ($('#player-message').text(store.game.cells._v + ' has won!'))
// } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[8]) {
//       return ($('#player-message').text(store.game.cells._v + ' has won!'))
// } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[8]) {
//       return ($('#player-message').text(store.game.cells._v + ' has won!'))
// } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[6]) {
//       return ($('#player-message').text(store.game.cells._v + ' has won!'))
// } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[6]) {
//       return ($('#player-message').text(store.game.cells._v + ' has won!'))
// } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[7]) {
//       return ($('#player-message').text(store.game.cells._v + ' has won!'))
// } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[8]) {
//       return ($('#player-message').text(store.game.cells._v + ' has won!'))
//     }
//   }
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateGame,
  onUpdateGame
}
