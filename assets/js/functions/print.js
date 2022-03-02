// print.js

import { createButtonDelete, createParagraph } from "./create.js";
import { findOnString } from "./find.js";
import { miscCounting } from "./misc.js";
import { arrayToIterable, arrayToJSON, JsonToArrayObj } from "./x-To-y.js";

export function printOnHTML(task, idCount) {
    console.log(`Printing task on HTML with idCount = ${idCount}`);
    const deleteButton = createButtonDelete(null, idCount); // Fnc to create a delete button
    console.log(`Created a delete button with the spec id: ${deleteButton.id}`);
    if (typeof task.value === 'undefined') {
        // This is for the page initialization when it already has data on cache
        console.log('It seems like the page is yet initializing, now we will start creating the paragraph');
        createParagraph(deleteButton, `${task} `, null, idCount);
    }
    else { // This for the webpage when is already running
        console.log('It seems like the page is already running, lets create the paragraph');
        createParagraph(deleteButton, `${task.value} `, null, idCount);
    }
    return idCount = miscCounting(idCount); // Just adding "+1" for some parameters.
}

export function printResponse(keyBody,valueRes) {
    printOnHTML(`${keyBody} : ${valueRes}`);
}

