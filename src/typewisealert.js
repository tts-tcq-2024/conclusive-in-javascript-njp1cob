const { inferBreach, classifyTemperatureBreach } = require('./breachClassification');

const batteryTypeVal;
const temperaTureInc;
function checkAndAlert(alertTarget, batteryChar, temperatureInC) {
  batteryTypeVal = batteryChar['coolingType'];
 temperaTureInc = temperatureInC;
  const breachType = classifyTemperatureBreach(batteryChar['coolingType'], temperatureInC);
  if (alertTarget == 'TO_CONTROLLER') {
    sendToController(breachType);
  } else if (alertTarget == 'TO_EMAIL') {
    sendToEmail(breachType);
  }
}

function sendToController(breachType) {
  const header = 0xfeed;
  console.log(`${header}, ${breachType}`);
}

function sendToEmail(breachType) {
  const recepient = 'a.b@c.com';
  if (breachType == 'TOO_LOW') {
    console.log(`To: ${recepient}`);
    console.log('Hi, the temperature is too low');
  } else if (breachType == 'TOO_HIGH') {
    console.log(`To: ${recepient}`);
    console.log('Hi, the temperature is too high');
  }
}

module.exports =
    {inferBreach, classifyTemperatureBreach, checkAndAlert, sendToController, sendToEmail, batteryTypeVal, temperaTureInc};
