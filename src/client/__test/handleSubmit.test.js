/**
 * @jest-environment jsdom
 */


const { handleSubmit } = require("../js/formHandler")

describe('handleSubmit is successful', ()=> {
    test('returns something', () => {
        expect(handleSubmit).toBeDefined();
    })
})