import { arrayToJSON } from "./x-To-y.js";

export function matchItThenDoSomething (res,body,doSomething) {

    /* This function matches the 'res' and 'body' object properties
    and after finding its similar values on both sides,
    the function literally just 'doSomething'.
    Remember that 'doSomething' is a function call back so it must be
    carrying the function you used when called 'matchItThenDoSomething'. */

    /* res and body must be an array object */
    
    const keysOfResponse = Object.entries(res); // Get all property names of this object.
    const keysOfBody = Object.entries(body); // Get all property names of this object.

    for (const [keyRes,valueRes] of keysOfResponse) {
        for (const [keyBody,valueBody] of keysOfBody) {
            console.log(valueBody);
            if (valueBody['all'] && typeof valueBody === 'object' && typeof valueRes === 'object') {
                // Count how many nested properties are below the 'all' property and discounts one because I don't want to count the first property 'all'
                const lengthNestedToObj = JSON.stringify(valueBody).match(/[^\\]":/g).length - 1;
                console.log(JSON.stringify(valueBody));
                if (lengthNestedToObj > 0) { // If the length is bigger than zero it means there are other properties besides all.

                }    
            }
            if (keyBody === keyRes) {
                if (typeof valueBody === 'object' && (typeof valueRes === 'string' || typeof valueRes === 'number')) {
                    /* If the value of respose 'valueRes' has reached its final nested 
                    property but the value in the body 'valueBody' still wants to catch 
                    more nested properties then we will just print the property name 
                    'keyBody' as the 'valyeRes'. */
                    doSomething(valueBody,valueRes);
                    /* doSomething function is a callback and it must accept two string parameters
                    as its first two parameters */ 
                }
                if (typeof valueBody === 'string' && typeof valueRes === 'object') {
                    /* If the value of response 'valueRes' still has more 
                    nested properties but the value in the body 'valueBody'
                    has reached its final nested property. */
                    const valueResJSON = arrayToJSON(valueRes);
                    doSomething(keyBody,valueResJSON);
                    /* doSomething function is a callback and it must accept two string parameters
                    as its first two parameters */ 
                }
                if (typeof valueBody === 'string' && (typeof valueRes === 'string' || typeof valueRes === 'number')) {
                    /* If both value of body and value of response are string
                    then we just print then. */
                    doSomething(keyBody,valueRes);
                    /* doSomething function is a callback and it must accept two string parameters
                    as its first two parameters */
                }
                if (typeof valueBody === 'object' && typeof valueRes === 'object') {
                    /* If both value of body and value of response are object
                    then we call the recursive function again untill it is done 
                    with one of the conditions above. */
                    matchItThenDoSomething(valueRes,valueBody,doSomething); 
                }
            }
        }
    }
}