const {Employee} = require('../lib/employee')


describe('Employee Class Tests', () => {
    it('Has getName() as entered name.', () => {
        const roman = new Employee('Roman', 'roman@email.com', '1', 'Employee');
        expect(roman.getName()).toBe('Roman')
    })
    it('Has getEmail() as entered email.', () => {
        const roman = new Employee('Roman', 'roman@email.com', '1', 'Employee');
        expect(roman.getEmail()).toBe('roman@email.com')
    })
    it('Has getId() as entered Employee ID.', () => {
        const roman = new Employee('Roman', 'roman@email.com', '1', 'Employee');
        expect(roman.getId()).toBe('1')
    })
    it('Has a getRole() as Employee.', () => {
        const roman = new Employee('Roman', 'roman@email.com', '1', 'Employee');
        expect(roman.getRole()).toBe('Employee')
    })

})




