// print.js

import { buttonDelete, paragraph } from "./create.js";
import { counting } from "./misc.js";

export function taskOnHTML(task, idCount) {
    console.log(`Printing task on HTML`);
    deleteButton = buttonDelete; // Fnc to create a delete button
    if (typeof task.value === 'undefined') {
        // This is for the page initialization when it already has data on cache
        paragraph(deleteButton, `${task} `);
    }
    else { // This for the webpage when is already running
        paragraph(deleteButton, `${task.value} `);
    }
    return idCount = counting(idCount); // Just adding "+1" for some parameters.
}

