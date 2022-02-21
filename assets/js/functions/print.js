// print.js

import { createButtonDelete, createParagraph } from "./create.js";
import { miscCounting } from "./misc.js";

export function printTaskOnHTML(task, idCount) {
    console.log(`Printing task on HTML`);
    const deleteButton = createButtonDelete; // Fnc to create a delete button
    console.log(`Created a delete button with the spec id: ${deleteButton.innerHTML}`)
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

