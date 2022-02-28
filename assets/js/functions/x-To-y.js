// x-To-y.js

import { findOnString } from "./find.js";


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
    let resultWrite = {};
    let resultRead = {};
    for(const [key, value] of iterableObj) { // each 'entry' in the URL is a [key, value] tupple, so we will loop over all of them.
        if (key === 'id' || key === 'url' || key === 'method') { 
            // in case we are looping over the id, url or method parameters, we will just do nothing
        } 
            else { // Elsewise, add the value to the array object called 'result' as shown below.
                if (value === "") { // This is the 'result' array object for 'Reading Commands' such as GET.
                    findOnString(key,'.');
                    resultRead[key] = value;
                }
                else { // This is the 'result' array object for 'Writting Commands' such as PATCH or POST.
                    resultWrite[key] = value;
                } 
            }
        }
    if (returnableItem === 'createBodyToWriteParams') {
        console.log('Array to serve as parameters to be written:');
        console.log(resultWrite);
        return resultWrite;
    }
    if (returnableItem === 'createBodyToReadParams') {
        console.log('Array to serve as parameters to be read: \n', resultRead);
        return resultRead;
    }
}

