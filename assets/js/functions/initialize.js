// init.js

import { printTaskOnHTML } from "./print.js";

export function initializePage() {
    console.log(`Initializing the page...`);
    let tempIndex; let tempTaskNameOnCache = `task-0`;
    if (localStorage.getItem(tempTaskNameOnCache)) { // If an initial task exists on Cache
        tempIndex = 0; // Then Index has to initialize as the first index, which is '0'.
        do { // Print all data on cache
            printTaskOnHTML(localStorage.getItem(tempTaskNameOnCache));
            tempIndex++; tempTaskNameOnCache = `task-${tempIndex}`;
        }
        while (localStorage.getItem(tempTaskNameOnCache));
        tempIndex--; tempTaskNameOnCache = `task-${tempIndex}`; // Returning to the last valid Index and TaskName
        return [tempIndex, tempTaskNameOnCache]; // Return the last Index and TaskName found.
    }
    else {
        console.log(`Uh, oh...! It seems like there is nothing to be printed`);
        tempIndex = -1; // Otherwise, Index is -1 meaning there is no index on cache yet.
        return [tempIndex, tempTaskNameOnCache]; // Return initialized Index and TaskName.
    }
}