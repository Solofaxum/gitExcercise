const assert = require('assert');
const myFuncs = require ('../src/myFuncs');



/**
 * Tester for adding two similar/different size array groups
 * @function sumOfTwoArrays
 */
describe('Test sumOfTwoArrays.js', function () {
    beforeEach(()=>{
        console.log('Array Sum Tetser')
    })
    it('First array bigger', function () {
        assert.deepEqual(myFuncs.sumOfTwoArrays([1, 2, 3, 4], [3, 4, 5]), [4, 6, 8, 4])
    })

    it('First array smaller', function () {
        assert.deepEqual(myFuncs.sumOfTwoArrays([1, 4], [3, 4, 5]), [4, 8, 5])
    })

    it('Same size array', function () {
        assert.deepEqual(myFuncs.sumOfTwoArrays([1, 2, 1], [2, 1, 2]), [3, 3, 3])
    })
    it('Arrays with negative numbers', function () {
        assert.deepEqual(myFuncs.sumOfTwoArrays([-1, 4], [3, -4, 5]), [2, 0, 5])
    })

})



/**
 * Tester for finding my substring with out using built in substring function
 * @function mySubstring
 */
describe('Test mySubstring.js', function () {
   afterEach(()=>{
        console.log('Substring Checker')
    })
    describe('Best Cases', function () {

        it('Best 1', function () {
            let str = 'Software';
            assert.equal(myFuncs.mySubstring(str, 2, 3), "ft");
        });
        it('Best 2', function () {
            let str = 'Software';
            assert.equal(myFuncs.mySubstring(str, 4), "ware");
        });
        it('Best 3', function () {
            let str = 'Software';
            assert.equal(myFuncs.mySubstring(str, 0), "Software");
        });
    })

    describe('Boundary Conditions', function () {
        it('Boundary 1', function () {
            assert.equal(myFuncs.mySubstring('Software', -2, -3), "ftwa");
        });
        it('Boundary 2', function () {
            assert.equal(myFuncs.mySubstring('Software', 0, 9), "ftw");
        });
        it('Boundary 3', function () {
            assert.equal(myFuncs.mySubstring('Software', -5), "ft");
        });
    });

    describe('Type Check', function () {
        it('Type 1', function () {
            assert.equal(myFuncs.mySubstring(134, 'a', 'c'), "12");
        });
        it('Type 2', function () {
            assert.equal(myFuncs.mySubstring('Software', 'a', 'b'), "soft");
        });
        it('Type 3', function () {
            assert.equal(myFuncs.mySubstring('Software', 0, 'b'), "ware");
        });
    })
});


