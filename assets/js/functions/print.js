// print.js

import { createButtonDelete, createParagraph } from "./create.js";
import { miscCounting } from "./misc.js";

export function printTaskOnHTML(task, idCount) {
    console.log(`Printing task on HTML`);
    deleteButton = createButtonDelete; // Fnc to create a delete button
    if (typeof task.value === 'undefined') {
        // This is for the page initialization when it already has data on cache
        createParagraph(deleteButton, `${task} `);
    }
    else { // This for the webpage when is already running
        createParagraph(deleteButton, `${task.value} `);
    }
    return idCount = miscCounting(idCount); // Just adding "+1" for some parameters.
}

