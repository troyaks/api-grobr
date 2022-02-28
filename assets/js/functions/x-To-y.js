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
                const iterableOfKey = createIterableFromString(key,'.');
                if (findSizeOfObject(iterableOfKey) > 1) {
                    console.log(`This 'key' element points to other properties: ${key}`);
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
                    const fixedKey = stringToNestedObj(key,'');
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

export function stringToNestedObj (path,obj) {

    const reversedPath = path.split('.').reverse(); // Create a path reverse, to start from the end.
    return iter(reversedPath,obj); // Calls a local function to iterate over all items of reversedPath.

    function iter ([head, ...tail],obj2) {
        if(!head) {
            return obj2;
        }
        const newObj = {[head]: {...obj2}};
        return iter(tail, newObj)
    }
    
}



