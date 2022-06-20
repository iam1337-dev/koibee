var utils = {}

var randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

utils.createUser = function (users, lastNames, projections) {
  var firstNameIndex = randomBetween(0, users.length - 1)
  var lastNameIndex = randomBetween(0, lastNames.length - 1)

  var tempUsername = randomBetween(0, 2)
  var tempUsernameNum = randomBetween(0, 2)
  var username = ''
  var usernameNum = ''

  if (tempUsernameNum === 0) {
    username = Math.floor(100 + Math.random() * 900)
  } else if (tempUsernameNum === 1) {
    usernameNum = Math.floor(10 + Math.random() * 90)
  }

  if (tempUsername === 0) {
    username = users[firstNameIndex]
  } else if (tempUsername === 1) {
    username = lastNames[lastNameIndex]
  } else {
    username = `${users[firstNameIndex]}${lastNames[lastNameIndex]}`
  }
  username += usernameNum

  var user = {
    fullName: `${users[firstNameIndex]} ${lastNames[lastNameIndex]}`,
    firstName: users[firstNameIndex],
    lastName: lastNames[lastNameIndex],
    username: username.toLocaleLowerCase(),
    email: `${username}@example.com`.toLocaleLowerCase()
  }

  if (projections.include.length) Object.keys(user).filter(x => !projections.include.includes(x)).map(key => delete user[key])
  if (projections.exclude.length) projections.exclude.map(key => delete user[key])
  return user
}

module.exports = utils
