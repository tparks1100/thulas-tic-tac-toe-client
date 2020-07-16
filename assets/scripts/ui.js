'use strict'

const signUpSuccess = function () {
  $('#message').text('Successfully signed up!')
}

const signUpFailure = function () {
  $('#message').text('Sign up failed!')
}
module.exports = {
  signUpSuccess,
  signUpFailure
}
