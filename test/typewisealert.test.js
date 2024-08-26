const alerts = require('../src/typewisealert');
const {expect} = require('chai');

it('infers a value lower than the minimum as TOO_LOW', () => {
  expect(alerts.inferBreach(20, 50, 100)).equals('TOO_LOW');
});

it('infers a value lower than the minimum as TOO_LOW', () => {
  expect(alerts.classifyTemperatureBreach('HI_ACTIVE_COOLING', 50)).equals('TOO_HIGH');
});
