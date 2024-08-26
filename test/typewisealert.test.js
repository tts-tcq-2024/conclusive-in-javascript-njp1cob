const alerts = require('../src/typewisealert');
const {expect} = require('chai');

it('infers a value lower than the minimum as TOO_LOW', () => {
  expect(alerts.inferBreach(20, 50, 100)).equals('TOO_LOW');
});

it('infers a higher value as TOO_HIGH', () => {
  expect(alerts.classifyTemperatureBreach('HI_ACTIVE_COOLING', 50)).equals('TOO_HIGH');
});

it('infers a higher value in PASSIVE_COOLING as TOO_HIGH', () => {
  expect(alerts.classifyTemperatureBreach('PASSIVE_COOLING', 50)).equals('TOO_HIGH');
});

it('infers a normal value as NORMAL', () => {
  expect(alerts.classifyTemperatureBreach('MED_ACTIVE_COOLING', 20)).equals('NORMAL');
});
