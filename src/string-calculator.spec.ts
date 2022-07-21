import { StringCalculator } from "./string-calculator";

const stringCalculator = new StringCalculator();

describe("First Tests", () => {
    it("should be 0", () => {
        expect(stringCalculator.add("")).toBe(0);
    });
    it("should be 1", () => {
        expect(stringCalculator.add("1")).toBe(1);
    });
    it("should be 10", () => {
        expect(stringCalculator.add("1,2,3,4")).toBe(10);
    });
    it("should be 6", () => {
        expect(stringCalculator.add("1\n,2,3")).toBe(6);
    });
    it("should be 3", () => {
        expect(stringCalculator.add("//;\n1;2")).toBe(3);
    });
    test('should throw "Negatives not allowed: -1,-2" error', () => {
        expect(() => {
            stringCalculator.add("-1,-2");
        }).toThrowError("Negatives not allowed: -1,-2");
    });
    it("should be 3", () => {
        expect(stringCalculator.add("3,1002")).toBe(3);
    });
    it("should be 6", () => {
        expect(stringCalculator.add("//[***]\n1***2***3")).toBe(6);
    });
    it("should be 6", () => {
        expect(stringCalculator.add("//[*][%]\n1*2%3")).toBe(6);
    });
    
});