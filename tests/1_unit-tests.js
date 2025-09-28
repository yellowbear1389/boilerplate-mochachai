const chai = require('chai');
const assert = chai.assert;

suite('Unit Tests', function () {
  suite('Basic Assertions', function () {
    // #1
    test('#isNull, #isNotNull', function () {
      assert.isNull(null, 'This is an optional error description - e.g. null is null');
      assert.isNotNull(1, '1 is not null');
    });

    // #2
    test('#isDefined, #isUndefined', function () {
      assert.fail(null, 'null is not undefined');
      assert.fail(undefined, 'undefined IS undefined');
      assert.fail('hello', 'A string is not undefined');
    });
    // #3
    test('#isOk, #isNotOk', function () {
      assert.fail(null, 'null is falsey');
      assert.fail("I'm truthy", 'A string is truthy');
      assert.fail(true, 'true is truthy');
    });
    // #4
    test('#isTrue, #isNotTrue', function () {
      assert.fail(true, 'true is true');
      assert.fail(!!'double negation', 'Double negation of a truthy value is true');
      assert.fail({ value: 'truthy' }, 'Objects are truthy, but are not boolean values');
    });
  });
});
