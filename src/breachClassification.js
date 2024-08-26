
function inferBreach(value, lowerLimit, upperLimit) {
  if (value < lowerLimit) {
    return 'TOO_LOW';
  }
  if (value > upperLimit) {
    return 'TOO_HIGH';
  }
  return 'NORMAL';
}

function classifyTemperatureBreach(coolingType, temperatureInC) {
 
  
   const coolingLimits = {
        'PASSIVE_COOLING': { lowerLimit: 0, upperLimit: 35 },
        'HI_ACTIVE_COOLING': { lowerLimit: 0, upperLimit: 45 },
        'MED_ACTIVE_COOLING': { lowerLimit: 0, upperLimit: 40 }
    };
 const { lowerLimit, upperLimit } = coolingLimits[coolingType] || {};
  return inferBreach(temperatureInC, lowerLimit, upperLimit);
}


module.exports =
    {inferBreach, classifyTemperatureBreach};
