import isPromise from 'ember-changeset/utils/is-promise';
import { Promise, resolve } from 'rsvp';
import { module, test } from 'qunit';

module('Unit | Utility | is promise');

let testData = [
  {
    value: resolve('foo'),
    expected: true
  },
  {
    value: new Promise((resolve) => resolve('blah')),
    expected: true
  },
  {
    value: { then() {}, catch() {}, finally() {} },
    expected: true
  },
  {
    value: { then() {} },
    expected: false
  },
  {
    value: 'blah',
    expected: false
  },
  {
    value: 42,
    expected: false
  },
  {
    value: ['meow'],
    expected: false
  },
  {
    value: null,
    expected: false
  }
];

testData.forEach(({ value, expected }) => {
  test('it checks if an object is an instance of an RSVP.Promise', function(assert) {
    let result = isPromise(value);

    assert.equal(result, expected, `should be ${expected}`);
  });
});
