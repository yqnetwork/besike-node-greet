greet = require('greet')

describe 'greet', () -> 
    it 'is a dummy sucess case', () -> 
        expect(1).to.eql 1
    it 'should greet a person by name', () -> 
        expect(greet 'howard').to.be.eql 'hello, howard'
    it 'should greet a person flirtatiously if drunk', () -> 
        expect(greet 'howard', true).to.eql 'hello, howard, you look sexy today'
