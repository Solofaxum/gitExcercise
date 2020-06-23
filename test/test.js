const assert = require('assert');
const myFuncs = require ('../src/funcs');

/**
 * Tester for adding two similar/different size array groups
 * @function sumOfTwoArrays
 */
describe('Test sumOfTwoArrays.js', function () {
    it('This should pass the test', function () {
        assert.deepEqual(myFuncs.sumOfTwoArrays([1, 2, 3, 4], [3, 4, 5]), [4, 6, 8, 4])
    })

    it('This should pass the test', function () {
        assert.deepEqual(myFuncs.sumOfTwoArrays([1, 4], [3, 4, 5]), [4, 8, 5])
    })

    it('This should pass the test', function () {
        assert.deepEqual(myFuncs.sumOfTwoArrays([1, 2, 1], [2, 1, 2]), [3, 3, 3])
    })
    it('This should pass the test', function () {
        assert.deepEqual(myFuncs.sumOfTwoArrays([1, 4], [3, 4, 5]), [4, 8, 5])
    })

})



