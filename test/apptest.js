// Unit Testing with Mocha and Chai

const assert = require('chai').assert;
const app = require('../app');

describe('App', () => {
    it('app should return hello', () => {
        assert.equal(app(), 'hello');
    });

    it('app should return type string', () => {
        assert.typeOf(result, 'string');
    })
});