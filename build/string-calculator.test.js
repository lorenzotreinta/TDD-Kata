"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_calculator_1 = require("./string-calculator");
describe("First Tests", () => {
    const stringCalculator = new string_calculator_1.StringCalculator();
    it("should be 0", () => {
        expect(stringCalculator.add("")).toBe(0);
    });
    it("should be 1", () => {
        expect(stringCalculator.add("1")).toBe(1);
    });
    it("should be 3", () => {
        expect(stringCalculator.add("1,2")).toBe(3);
    });
});
//# sourceMappingURL=string-calculator.test.js.map