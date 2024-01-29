// // const Distance = require('./Distance.js');

// // const feetValue = 40;
// // const metersValue = 60;
// // const milesValue = 4;
// // const kilometersValue = 7;

// // console.log(`${feetValue} feet is ${Distance.calculate('feet', feetValue)} meters.`);
// // console.log(`${metersValue} meters is ${Distance.calculate('meters', metersValue)} feet.`);
// // console.log(`${milesValue} miles is ${Distance.calculate('miles', milesValue)} kilometers.`);
// // console.log(`${kilometersValue} kilometers is ${Distance.calculate('kilometers', kilometersValue)} miles.`);

// // const Distance = require('./Distance.js');

// // const feetValue = 40;
// // const metersValue = 60;
// // const milesValue = 4;
// // const kilometersValue = 7;

// const Distance = require('./Distance.js');

// exports.MF = (req,res) => {
//     let feetValue = req.query.feetValue;
//     console.log(`input feetValue`);
//     // console.log(`${feetValue} meters is ${Distance.calculate('meters', feetValue)} feet.`);
//     res.status(200).send(`${feetValue} meters is ${Distance.calculate('meters', feetValue)} feet.`);
// }
// exports.FM = (req,res) => {
//     let metersValue = req.query.metersValue;
//     console.log(`input metersValue`);
//     // console.log(`${metersValue} feet is ${Distance.calculate('feet', metersValue)} meters.`);
//     res.status(200).send(`${metersValue} feet is ${Distance.calculate('feet', metersValue)} meters.`);
// }
// exports.MK = (req,res) => {
//     let milesValue = req.query.milesValue;
//     console.log(`input milesValue`);
//     // console.log(`${milesValue} miles is ${Distance.calculate('miles', milesValue)} kilometers.`);
//     res.status(200).send(`${milesValue} miles is ${Distance.calculate('miles', milesValue)} kilometers.`);
// }
// exports.KM = (req,res) => {
//     let kilometersValue = req.query.kilometersValue;
//     console.log(`input kilometersValue`);
//     // console.log(`${kilometersValue} kilometers is ${Distance.calculate('kilometers', kilometersValue)} miles.`);
//     res.status(200).send(`${kilometersValue} kilometers is ${Distance.calculate('kilometers', kilometersValue)} miles.`);
// }

const Distance = require('./Distance.js');

exports.convertDistance = (req, res) => {
    let { unit, value } = req.query;

    if (!unit || !value) {
        res.status(400).send('Both unit and value are required.');
        return;
    }

    let result;

    switch (unit.toLowerCase()) {
        case 'feet':
            result = Distance.calculate('feet', value);
            break;
        case 'meters':
            result = Distance.calculate('meters', value);
            break;
        case 'miles':
            result = Distance.calculate('miles', value);
            break;
        case 'kilometers':
            result = Distance.calculate('kilometers', value);
            break;
        default:
            res.status(400).send('Invalid unit provided.');
            return;
    }

    res.status(200).send(result.toString());
};
