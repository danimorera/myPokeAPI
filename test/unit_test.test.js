const assert = require('chai').assert;



function addV(num1, num2) {
    return num1 + num2;
}


describe('Suite de prueba para el curso', () => {
    it('Should return 4', () => {
        let value = addV(2,2);
        assert.equal(value, 4);
    })
})