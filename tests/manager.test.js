const {Manager, promptForManager} = require('../lib/manager')



describe('Manager Class Tests', () => {
    it('Has a getRole() as Manager.', () => {
    const roman = new Manager('Roman', 'roman@email.com', '1', 'Manager', 1);
    expect(roman.getRole()).toBe('Manager')
    })
    it('Has getOfficeNum() as entered office number.', () => {
        const roman = new Manager('Roman', 'roman@email.com', '1', 'Manager', 1);
        expect(roman.getOfficeNum()).toBe(1)
    })
})