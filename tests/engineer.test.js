const {Engineer, promptForEngineer} = require('../lib/engineer')


describe('Engineer Class Tests', () => {
    it('Has a getRole() as Engineer.', () => {
        const roman = new Engineer('Roman', 'roman@email.com', '1', 'Engineer', 'roman006');
        expect(roman.getRole()).toBe('Engineer')
    })
    it('Has getGithub() as entered github.', () => {
        const roman = new Engineer('Roman', 'roman@email.com', '1', 'Engineer', 'roman006');
        expect(roman.getGithub()).toBe('roman006')
    })
})
