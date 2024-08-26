const alerts = require('../src/typewisealert');
const checkBreach = require('../src/breachClassification');
const {expect} = require('chai');
const sinon = require('sinon');

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

it('infers a value lower than the minimum as TOO_LOW', () => {
  expect(alerts.inferBreach(20, 0, 35)).equals('NORMAL');
});
it('infers a boundary value with low value', () => {
  expect(alerts.inferBreach(0, 0, 100)).equals('NORMAL');
});
it('infers a boundary value with high value', () => {
  expect(alerts.inferBreach(50, 0, 50)).equals('NORMAL');
});

  it('should send TOO_HIGH breach alert via email', () => {
      const emailSpy = sinon.spy(console, 'log');
      const batteryChar = { coolingType: 'HI_ACTIVE_COOLING' };
      alerts.checkAndAlert('TO_EMAIL', batteryChar, 50);
      expect(emailSpy.calledWith('To: a.b@c.com')).to.be.true;
      expect(emailSpy.calledWith('Hi, the temperature is too high')).to.be.true;
    });
