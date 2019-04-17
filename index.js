// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
  firstTwoDrivers = []
  firstTwoDrivers.push(drivers[0])
  firstTwoDrivers.push(drivers[1])
  return firstTwoDrivers
}
const returnLastTwoDrivers = function(drivers) {
  lastTwoDrivers = []
  lastTwoDrivers.push(drivers[2])
  lastTwoDrivers.push(drivers[3])
  return lastTwoDrivers
}
selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
  return function(fare) {
    return fare * num
  }
}
const fareDoubler = function(fare) {
  return fare * 2
}
const fareTripler = function(fare) {
  return fare * 3
}
function fetchSpecifiedDrivers(drivers, func) {
  return func(drivers)
}
