//takes in a number and returns the number + 1
const addOne = require('../src/addone');
const expect = require('chai').expect;

describe('tests for the addOne module', function() {
    //console.log('running a test?');
    //Is the input a number?
    it('should only accept number as input', function(){
        expect(addOne('hello')).to.be.false;
    });

    //Is the output correct, that is one more than the input?
    describe('tests for various inputs', function(){
        it('should add one to the number passed in', function(){
            expect(addOne(9)).to.equal(10);
            expect(addOne(1)).to.equal(2);
            expect(addOne(-2)).to.equal(-1);
        });    
    })
     //Is the output a number?
    describe('tests output', function(){
        it('should return a type of number', function(){
            expect(addOne(8)).to.be.a('number');
        });
    })
  
  
});
