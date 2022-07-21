"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCalculator = void 0;
class StringCalculator {
    add(str_values) {
        let sol = 0;
        const values = str_values.split(",");
        for (var value of values) {
            sol += +value;
        }
        return sol;
    }
}
exports.StringCalculator = StringCalculator;
//# sourceMappingURL=string-calculator.js.map