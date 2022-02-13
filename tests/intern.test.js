const {Intern, promptForManager} = require('../lib/intern')


describe('Intern Class Tests', () => {
    it('Has a getRole() as Intern.', () => {
        const roman = new Intern('Roman', 'roman@email.com', '1', 'Intern', 'University of sydney');
        expect(roman.getRole()).toBe('Intern')
    })
    it('Has getSchool() as entered school.', () => {
        const roman = new Intern('Roman', 'roman@email.com', '1', 'Intern', 'University of sydney');
        expect(roman.getSchool()).toBe('University of sydney')
    })
})