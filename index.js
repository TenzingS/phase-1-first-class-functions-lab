// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

const returnFirstTwoDrivers = function(){
    return (drivers.slice(0,2));
}

const returnLastTwoDrivers = function(){
    return (drivers.slice(2));
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (num) => {
    return function(fare){
        return (num * fare);
    };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, selectingDrivers) => {
    if (selectingDrivers === returnFirstTwoDrivers){
        return returnFirstTwoDrivers();
    } else {
        return returnLastTwoDrivers();
    }
}