// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  newArr = []
  newArr.push(drivers[0])
  newArr.push(drivers[1])
  return newArr
}

const returnLastTwoDrivers = function (drivers) {
  newArr = []
  newArr.push(drivers[drivers.length - 2])
  newArr.push(drivers[drivers.length - 1])
  return newArr
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {

  return function (num) {
    return num * multiplier
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function fetchSpecifiedDrivers(drivers, cb) {
  return cb(drivers)
}