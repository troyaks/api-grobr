// find.js

import { arrayToIterable, urlToIterable } from "./x-To-y.js";

export function findButtonPressed(elID) {
    console.log(`Trying to find which button was pressed...`);
    let tempIndex = 0; let checkID = `buttonDelete${tempIndex}`;
    while (elID != checkID) { // Search for the exact ID.
        tempIndex++;
        checkID = `buttonDelete${tempIndex}`;
    }
    console.log(`Found the button with ID ${checkID} and Index ${tempIndex}`);
    return [checkID, tempIndex]; // Return the right ID and Index.
}

export function findResourceFromURL () {
    
    console.log(`-> Resolving ROOT, PATCH and QueryOptions from URL`);

    for (const [urlParameter, value] of urlToIterable(location.search)) { window[urlParameter] = value; } // Create global variables in "find.js" based on the entries in the URL.
    
    const parameterID = `${id}`;
    const serviceRootURL = `https://api.movidesk.com/`;
    const resourcePatch = `public/v1/${url}`;
    const queryOptions = `token=39cbc1bb-ffa6-491e-84f4-eb9687902e5e&id=${parameterID}`;
    
    const ticketResourcePath = `${serviceRootURL}${resourcePatch}?${queryOptions}`;

    console.log('The request will point to:\n',ticketResourcePath);
    
    return ticketResourcePath;
}

export function findOnString(string,toBeFound,option) {

    let result; let regex; let i=0; let indexIterableOBJ = {}; let valueIterableOBJ = {}; // Creating variables
    if (toBeFound === '.') {regex = new RegExp(`\\${toBeFound}`,'gi');} // 'if condition' to catch the search of '.' (point);
    else {regex = new RegExp(`${toBeFound}`,'gi');} 

    if (option === 'index') { // Return the iterable object containing the indexes
        while ((result = regex.exec(string)) !== null) { // While loop to catch all items to be found.
            if (result.index === regex.lastIndex) { // This is necessary to avoid infinite loops with zero-width matches
                regex.lastIndex++;
            }
            result.forEach(() => { // Finding the resultant 'index' for each 'true' result.
                indexIterableOBJ[i] = result.index; // Iterable object to store all indexes.
                i++;
            });
        }

        indexIterableOBJ = arrayToIterable(indexIterableOBJ);
        return indexIterableOBJ;
    }
    if (option === 'value') { // Return the iterable object containing the values
        while ((result = regex.exec(string)) !== null) { // While loop to catch all items to be found.
            if (result.index === regex.lastIndex) { // This is necessary to avoid infinite loops with zero-width matches
                regex.lastIndex++;
            }
            result.forEach(() => { // Finding the resultant 'value' for each 'true' result.
                valueIterableOBJ[i] = result[0]; // Iterable object to store all values.
                i++;
            });
        }
        valueIterableOBJ = arrayToIterable(valueIterableOBJ);
        return valueIterableOBJ;
    }
}

export function findSizeOfObject(obj) {
    /* While some JS objects (arguments, for example)
    support length property, those created with object literal notation do not.
    Therefore, this function is to find size of objects that do not support lenght property */
    return Object.keys(obj).length;
}

export function findLastObject(object) {
    if (typeof object !== 'object') {
        return object;
    }
    for (property in object) {
        return findLastObject(object[property]);
    }
}


