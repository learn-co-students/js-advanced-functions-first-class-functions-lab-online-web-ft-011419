// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
return drivers.slice(-2)

}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
//this one is confusing 
const createFareMultiplier = function(integer) {
return function(multiply){  
  return integer*multiply }

}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const fetchSpecifiedDrivers = function (drivers,theDrivers){
return theDrivers(drivers)

}