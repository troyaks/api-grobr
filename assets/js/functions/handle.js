import { findOnString } from "./find.js";

export function handleUnwantedQuoteMarks (string) {
    /* This function is created to handle unwated commas that 
    appears when parsing an array into a JSON. */

    /* This finds the indexes of all double quotes that appears before after an
    bracket.
    Example: string = "[ '[bracket]' ]"
    indexLeftUnwantedDoubleQuote === 0
    indexLeftUnwantedSimpleQuote === 3 */
    const indexLeftUnwantedDoubleQuote = findOnString(string,`"[[]`,'index');
    const indexLeftUnwantedSimpleQuote = findOnString(string,`'[[]`,'index');
    // *------------------------------------------------------------

    /* This finds the indexes of all double quotes that appears before after an
    bracket.
    Example: string = "[ '[bracket]' ]"
    indexLeftUnwantedDoubleQuote === 16
    indexLeftUnwantedSimpleQuote === 13 */
    const indexRightUnwantedDoubleQuote = findOnString(string,`]"`,'index');
    const indexRightUnwantedSimpleQuote = findOnString(string,`]'`,'index');
    // *------------------------------------------------------------


    for (const [key,index] of indexLeftUnwantedDoubleQuote) { //Loop over all indexes.
        string = string.slice(0,index) + string.slice(index+1); // Cut out the unwanted left double quote.
    }
    for (const [key,index] of indexLeftUnwantedSimpleQuote) { //Loop over all indexes.
        string = string.slice(0,index) + string.slice(index+1); // Cut out the unwanted left single quote
    }
    for (const [key,index] of indexRightUnwantedDoubleQuote) { //Loop over all indexes.
        string = string.slice(0,index) + string.slice(index+1); // Cut out the unwanted right double quote
    }
    for (const [key,index] of indexRightUnwantedSimpleQuote) { //Loop over all indexes.
        string = string.slice(0,index) + string.slice(index+1); // Cut out the unwanted right simgle quote
    }


    return string;
}

export function handleNestedRequests (resOBJ,bodyJSON) {
    return resOBJ;
}