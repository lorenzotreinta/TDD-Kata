export class StringCalculator {
    add(str_values: string): number {
        let sol = 0;
        let valuesObj = { str_values:str_values } // Save str_values as obj so we can remove delimiter setter
        const delim = this.getDelim(valuesObj);
        console.log(delim);
        const re = new RegExp((delim+"|\n")); // RegExp for delim or \n
        const values = valuesObj.str_values.split(re);
        let contains_neg = false;
        let neg_error_message = "Negatives not allowed: ";
        for (var value of values) {
            // Handles negative values
            if (value[0] === "-") {
                if (contains_neg) {
                    neg_error_message = neg_error_message + ",";
                } 
                neg_error_message = neg_error_message + value;
                contains_neg = true;
            } if (!contains_neg && +value <= 1000) { // Doesn't add value if greater than 1000
                sol += +value;
            }
        }
        // Throw error if negative detected with error message neg_error_message 
        if (contains_neg) {
            throw new Error(neg_error_message);
        }
        return sol;
    }

    private getDelim(valuesObj): Array {
        let delim = [","];
        if (valuesObj.str_values.length > 3) {
            if (valuesObj.str_values.slice(0,2) == "//") {
                console.log("here");
                let delim_end_index = valuesObj.str_values.indexOf("\n");
                delim = valuesObj.str_values.slice(2,delim_end_index);
                valuesObj.str_values = valuesObj.str_values.slice(delim_end_index+1);
            }
        }
        return delim;
    }
}