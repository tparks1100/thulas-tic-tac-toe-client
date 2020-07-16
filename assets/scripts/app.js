'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const scriptsEvents = require('./events')

$(() => {
  $('#sign-up').on('submit', scriptsEvents.onSignUp)

  $('#sign-in').on('submit', scriptsEvents.onSignIn)

  $('#change-password').on('submit', scriptsEvents.onChangePassword)
})
