const Employee = require('../lib/employee');

describe("Employee class", () => {
  describe("getRole method", () => {
    it("returns 'Employee'", () => {
      const employee = new Employee();
      employee.getRole();
      expect(employee.getRole()).toBe('Employee');
    })}
    )});