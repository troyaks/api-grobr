// x-To-y.js

import { createIterableFromString } from "./create.js";
import { findOnString, findSizeOfObject } from "./find.js";
import { handleUnwantedQuoteMarks } from "./handle.js";


export function urlToJSON (urlValue, item) { // Turn the URL parameters into JSON
    console.log(`-> Reading the URL`);
    const iterable = urlToIterable(urlValue); // Create iterable object from URL
    const ArrayObj = iterableObjToArrayObj(iterable, item); // Turn iterable object into an array object containing the URL parameters
    let stringJSON = arrayToJSON(ArrayObj); // Turn array object into JSON string.
    stringJSON = handleUnwantedQuoteMarks(stringJSON); // Handle unwanted quote marks.
    return stringJSON;
}

export function arrayToJSON(array) {
    let json = JSON.stringify(array);
    json = handleUnwantedQuoteMarks(json);
    return json;
}

export function arrayToIterable(array) {
    const iterable = Object.entries(array);
    return iterable;
}

export function urlToIterable (urlValue) { // Take the parameters from URL and resolve them into Iterable object.
    const urlIterable = new URLSearchParams(urlValue); // Take the parameters from URL and resolve them into constructor body request.
    const entries = urlIterable.entries(); // Turn the constructor result into a Iterable object.
    return entries;
}

export function JsonToArrayObj(JsonString) {
    const ArrayObj = JSON.parse(JsonString);
    return ArrayObj;
}

export function iterableObjToArrayObj(iterableObj, returnableItem) {

    /* This function take the iterable object and turn it into an 
    array object containing its own pair of parameters. */

    if (returnableItem === 'nonEmptyValues') { // 'nonEmptyValues' means parameters in URL that has values; Example: method=PATCH&a=2&b=3
        let resultNonEmpty = {};
        for (const [key,value] of iterableObj) { // Each 'entry' in the URL is a [key, value] tupple, so we will loop over all of them.
            if (value !== "" && key !== 'id' && key !== 'url' && key !== 'method') {
                if (findSizeOfObject(createIterableFromString(key,'.')) > 1) { // Check if the 'key' element points to other object properties, meaning it is a nested object.

                    /*The sequence below adds a nested property into a object taking a string as base.
                    Here we suppose the string is somehow written like 'frstProperty.a.b.c'. Therefore, the points '.a.b.c'
                    serves to us as a way to show that the string can turn out to be a nested object.
                    */

                    const indexPointsOnText = iterableObjToArrayObj(findOnString(key,'.','index')); // Return an array containing all indexes of '.' (points) on the string 'key'.
                    const firstPoint = indexPointsOnText[0]; // Take the first point.
                    const firstProperty = key.slice(0,firstPoint); // Cuts the string and returns the rest of the text existing before the index 'first point'
                    const nextProperties = key.slice(firstPoint); // Cuts the string and returns the rest of the text existing after the index 'first point'
                    const nestedObject = stringToNestedObj(nextProperties,value); // Take the 'key' and create the nested object exactly as 'key' is implying.
                    resultNonEmpty[firstProperty] = {...nestedObject}; // Return the value as the fixed nested object.

                }
                else {
                    resultNonEmpty[key] = value;
                }

            }
        }
        console.log('Array object to serve as parameters to be written:\n',resultNonEmpty);
        return resultNonEmpty;
    }
    if (returnableItem === 'emptyValues') { // 'nonEmptyValues' means parameters in URL that has NO values; Example: method=GET&a&b&c&d&e
        let resultEmpty = {};
        for (const [key,value] of iterableObj) { // Each 'entry' in the URL is a [key, value] tupple, so we will loop over all of them.
            if (value === "") {
                if (findSizeOfObject(createIterableFromString(key,'.')) > 1) { // Check if the 'key' element points to other object properties, meaning it is a nested object.

                    /*The sequence below adds a nested property into a object taking a string as base.
                    Here we suppose the string is somehow written like 'frstProperty.a.b.c'. Therefore, the points '.a.b.c'
                    serves to us as a way to show that the string can turn out to be a nested object.
                    */

                    const indexPointsOnText = iterableObjToArrayObj(findOnString(key,'.','index')); // Return an array containing all indexes of '.' (points) on the string 'key'.
                    const firstPoint = indexPointsOnText[0]; // Take the first point.
                    const firstProperty = key.slice(0,firstPoint); // Cuts the string and returns the rest of the text existing before the index 'first point'
                    const nextProperties = key.slice(firstPoint); // Cuts the string and returns the rest of the text existing after the index 'first point'
                    const nestedObject = stringToNestedObj(nextProperties,value); // Take the 'key' and create the nested object exactly as 'key' is implying.
                    resultEmpty[firstProperty] = {...nestedObject}; // Return the value as the fixed nested object.

                }
                else {
                    resultEmpty[key] = value;
                }
            }
        }
        resultEmpty['id'] = "";
        console.log('Array object to serve as parameters to be read: \n', resultEmpty);
        return resultEmpty;
    }
    if (!returnableItem) {
        let result = {};
        for (const [key,value] of iterableObj) { // Each 'entry' in the URL is a [key, value] tupple, so we will loop over all of them.
            if (key !== 'id' && key !== 'url' && key !== 'method') {
                result[key] = value;
            }
        return result;   
        }
    }
}

export function stringToNestedObj (path,obj) { 

    /* This is a function that can create an object and nest its properties based on a string containing '.' (points).
    Example: in case path = subject.a.b.c.d and obj = 'testing'
    the function turns the path into {"subject": {"a": {"b": {"c": {"d": 'testing'}}}}} */

    const reversedPath = path.split('.').reverse(); // Create a path reverse, to start from the end.
    return iter(reversedPath,obj); // Calls a local function to iterate over all items of reversedPath.

    function iter([head, ...tail],obj2,tempHead,tempObj) {
        /* Takes one array argument, and automatically splits it into the variable `head`, containing the first element 
        of the array, and `tail`, a new array containing the rest of the argument array left. */
        if(typeof obj2 === 'string' && !tempHead && !tempObj) {
            let createTempHead = head;
            let createTempObj = obj2;
            const newObj = {[head]: obj2}; // Creates the first newObj in the loop and evaluate it with obj2 value 'string'.
            return iter(tail,newObj,createTempHead,createTempObj);
        }
        
        if(!head) { 
            /* In case no first argument then just return and ends the function. 
            After entering this part, the function returns object and ends its recursivity. */
            return obj2;
        }

        const newObj = {[head]: {...obj2}}; // creates a new object that has all of the properties of `myObject` copied into it
        
        return iter(tail, newObj,tempHead,tempObj);

        /* Exaplanation of the Recursive call above: 
        - The [head,...tail] turns out to be the tail object and the tail turns to be the new object created.
        Remember that Always the function hit 'return iter(tail,newObj,...)' it is taking out one property of 'tail' per call since when
        the function starts again it splits the tail into [head,...tail] and the head is not used again in the recursive call.
        It is also never an infinite loop due to if(!head) condition, because at one point the tail will be left with no property
        and then, when the function is called again, it just returns obj2 arriving on its final end.
        */
    } 
}



