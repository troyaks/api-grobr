// x-To-y.js

import { createIterableFromString } from "./create.js";
import { findOnString, findSizeOfObject } from "./find.js";


export function urlToJSON (urlValue, item) { // Turn the URL parameters into JSON
    const iterable = urlToIterable(urlValue); // Create iterable object from URL
    const ArrayObj = iterableObjToArrayObj(iterable, item); // Turn iterable object into an array object containing the URL parameters
    const stringJSON = arrayToJSON(ArrayObj); // Turn array object into JSON string.
    return stringJSON;
}

export function arrayToJSON(array) {
    const json = JSON.stringify(array);
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

export function iterableObjToArrayObj(iterableObj, returnableItem) { // Take the iterable object and turn it into an array object containing the parameters.
    if (returnableItem === 'nonEmptyValues') {
        let resultNonEmpty = new Array();
        for (const [key,value] of iterableObj) { // Each 'entry' in the URL is a [key, value] tupple, so we will loop over all of them.
            if (value !== "" && key !== 'id' && key !== 'url' && key !== 'method') {
                if (findSizeOfObject(createIterableFromString(key,'.')) > 1) { // Check if the 'key' element points to other object properties
                    console.log(`This 'key' element points to other properties: ${key}`);
                    const fixedKey = stringToNestedObj(key,value);
                    console.log(fixedKey);
                }
                resultNonEmpty[key] = value;
            }
        }
        console.log('Array to serve as parameters to be written:');
        console.log(resultNonEmpty);
        return resultNonEmpty;
    }
    if (returnableItem === 'emptyValues') {
        let resultEmpty = new Array();
        for (const [key,value] of iterableObj) { // Each 'entry' in the URL is a [key, value] tupple, so we will loop over all of them.
            if (value === "") {
                if (findSizeOfObject(createIterableFromString(key,'.')) > 1) { // Check if the 'key' element points to other object properties
                    console.log(`This 'key' element points to other properties: ${key}`);
                    const fixedKey = stringToNestedObj(key,value);
                    console.log(fixedKey);
                }
                resultEmpty[key] = value;
            }
        }
        resultEmpty['id'] = "";
        console.log('Array to serve as parameters to be read: \n', resultEmpty);
        return resultEmpty;
    }
    if (!returnableItem) {
        let result = {};
        for (const [key,value] of iterableObj) { // Each 'entry' in the URL is a [key, value] tupple, so we will loop over all of them.
            if (key !== 'id' && key !== 'url' && key !== 'method') {
                result[key] = value;
            }
        console.log('Array to serve as parameters: \n', result);
        return result;   
        }
    }
}

export function stringToNestedObj (path,obj) { // This is a function that can create an object and nest its properties based on a string containing '.' (points).
    // Example: in case path = subject.a.b.c.d and obj = 'testing'
    // the function turns the path into {"subject": {"a": {"b": {"c": {"d": 'testing'}}}}}
    const reversedPath = path.split('.').reverse(); // Create a path reverse, to start from the end.
    return iter(reversedPath,obj); // Calls a local function to iterate over all items of reversedPath.

    function iter([head, ...tail],obj2) { 
        /* Takes one array argument, and automatically splits it into the variable `head`, containing the first element 
        of the array, and `tail`, a new array containing the rest of the argument array left. */
        if(!head) { // In case no first argument then just return and ends the function.
            return obj2;
        }
        const newObj = {[head]: {...obj2}}; // creates a new object that has all of the properties of `myObject` copied into it
        return iter(tail, newObj); 
        /* Recursive call: The [head,...tail] turns out to be the tail object and the tail turns to be the new object created.
        Remember: Always the function hit 'return iter(tail,newObj)' it is taking one property of tail
        because when the function starts again, it splits the tail into [head,...tail], so the head is always left taken out.
        It is also never an infinite loop due to if(!head) condition, because at one point the tail will be left with no property
        and then when the function is called again, it just returns obj2 and ends.
        */
    } 
}



