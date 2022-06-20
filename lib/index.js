var seeds = require('../seeds')
var utils = require('./utils')

function getUser(options, projections) {
  if (!options) options = {}
  if (!projections) projections = {}
  projections.include = projections.include || []
  projections.exclude = projections.exclude || []
  options.gender = options.gender || 'm'
  options.nat = options.nat || 'in'
  options.results = Number(options.results) || 1
  var result = []

  maleFirstNames = seeds[options.nat].names.firstName.male
  femaleFirstNames = seeds[options.nat].names.firstName.female
  lastNames = seeds[options.nat].names.lastName
  var users = options.gender === 'm' ? maleFirstNames : femaleFirstNames

  if (options.results === 1) {
    return utils.createUser(users, lastNames, projections)
  } else {
    for (var index = 0; index < options.results; index++) {
      result.push(utils.createUser(users, lastNames, projections))
    }
    return result
  }
}

module.exports = getUser