const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(drivers.length - 2, drivers.length + 1)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multi) {
    return function(fare) {
        return fare * multi
    }
}

const twoFare = createFareMultiplier(2)

function fareDoubler(fare) {
    return twoFare(fare)
}

const tripleFare = createFareMultiplier(3)

function fareTripler(fare) {
    return tripleFare(fare)
}

function fetchSpecifiedDrivers(array, driverFunction) {
    return driverFunction(array)
}