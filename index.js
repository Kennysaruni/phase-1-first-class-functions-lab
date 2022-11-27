// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2,4)
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
function createFareMultiplier(fare){
    return function(fare){return fare*fare}
}
function fareDoubler(fare){
    return fare = fare*2
}
function fareTripler(fare){
    return fare = fare*3
}
function selectDifferentDrivers(drivers,selectingDrivers){
    if(selectingDrivers==returnFirstTwoDrivers){
        return drivers.slice(0,2)
    }
    else if(selectingDrivers == returnLastTwoDrivers){
        return drivers.slice(2,4)
    }
    else{}

}