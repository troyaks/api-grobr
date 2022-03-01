// create.js

import { findOnString, findSizeOfObject } from "./find.js";
import { arrayToIterable, iterableObjToArrayObj, stringToNestedObj } from "./x-To-y.js";

const eventList = document.querySelector('.eventList');

export function createParagraph(buttonDelete, data, tempIndexID, idCount) {
    console.log(`Initializing createParagraph fnc`);
    if (tempIndexID || tempIndexID === 0) {
        console.log(`Creating paragraph when tempIndexID is given`);
        const paragraph = document.createElement("P"); // Create a paragraph.
        paragraph.id = `paragraph${tempIndexID}`; // Give an ID to it.
        paragraph.innerHTML = data; // Give an HTML to it.
        paragraph.appendChild(buttonDelete); // Add a button to it.
        eventList.appendChild(paragraph); // Add the paragraph to the eventList window.
        console.log(`Created paragraph with index ${tempIndexID} and value ${data}`);
    }
    else {
        console.log(`Creating paragraph when tempIndexID is not given`);
        const paragraph = document.createElement("P"); // Create a paragraph.
        paragraph.id = `paragraph${idCount}`; // Give an ID to it.
        paragraph.innerHTML = data; // Give an HTML to it.
        paragraph.appendChild(buttonDelete); // Add a button to it.
        eventList.appendChild(paragraph); // Add the paragraph to the eventList window.
        console.log(`Created paragraph with index ${idCount} and value ${data}`);
    }
}
export function createButtonDelete(tempIndexID, idCount) {
    console.log(`Initializing createButtonDelete function with temIndexID = ${tempIndexID} and idCount = ${idCount}`);
    if (tempIndexID || tempIndexID === 0) {
        console.log(`Creating button when tempIndexID is given`);
        const buttonDelete = document.createElement('button'); // Create a button element.
        buttonDelete.innerHTML = "Deletar"; // Give an HTML to it.
        buttonDelete.id = `buttonDelete${tempIndexID}`; // Give an ID to it.
        buttonDelete.className = `buttonDelete`; // Give a class to it.
        console.log(`Delete button with ID ${tempIndexID} has been created`);
        return buttonDelete; // return the button element with the desired characteristics.
    }
    else { // Use the global variable "idCount" when no argument is given.
        console.log(`Creating button when tempIndexID is not given`);
        const buttonDelete = document.createElement('button'); // Create a button element.
        buttonDelete.innerHTML = "Deletar"; // Give an HTML to it.
        buttonDelete.id = `buttonDelete${idCount}`; // Give an ID to it.
        buttonDelete.className = `buttonDelete`; // Give a class to it.
        console.log(`Delete button with ID ${idCount} has been created`);
        return buttonDelete; // return the button element with the desired characteristics.
    }
}

export function createIterableFromString (string,parameter) { 
    // Find all parameters and create array based on them. 
    // Example (parameter='.'): clients.value.id turns into {clients, value, id}
    
    let regex;
    if (parameter === '.') {regex = new RegExp(`\\${parameter}`,'gi')}
    else {regex = new RegExp(`${parameter}`,'gi')}
    let result;
    result = string.split(regex);
    result = arrayToIterable(result);
    return result;
}

export function createNestedPropertyOnObjFromString (obj,string,value) { 
    /*This functions adds a nested property into a object taking a string as base.
    Here we suppose the string is somehow written like 'frstProperty.a.b.c'. Therefore, the points '.a.b.c'
    serves to us as a way to show that the string can turn out to be a nested object.
    */ 
    const indexPointsOnText = iterableObjToArrayObj(findOnString(string,'.','index')); // Return an array containing all indexes of '.' (points) on the string 'key'.
    const firstPoint = indexPointsOnText[0]; // Take the first point.
    const nextProperties = string.slice(firstPoint); // Cuts the string and returns the rest of the text existing after the index 'first point'
    const nestedObject = stringToNestedObj(nextProperties,value); // Take the 'key' and create the nested object exactly as 'key' is implying.
    const firstProperty = string.slice(0,firstPoint); // Cuts the string and returns the rest of the text existing before the index 'first point'
    return obj[firstProperty] = {...nestedObject}; // Return the entry obj now added with the nested property.
}

