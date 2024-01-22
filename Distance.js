const feetToMeters = (value) => value * 0.3048;
const metersToFeet = (value) => value * 3.28084;
const milesToKm = (value) => value * 1.60934;
const kmToMiles = (value) => value * 0.621371;

exports.calculate = function (unit, value) {
    let result;

    if (unit === 'feet') {
        result = feetToMeters(value);
    } else if (unit === 'meters') {
        result = metersToFeet(value);
    } else if (unit === 'miles') {
        result = milesToKm(value);
    } else if (unit === 'kilometers') {
        result = kmToMiles(value);
    } else {
        console.log('Invalid unit provided.');
        result = null;
    }

    return result;
};
