// deleteThis.js

import { findButtonPressed } from "./find.js";

export function deleteAllData() {
    console.log(`Entered the DeleteAllData function`);
    localStorage.clear(); // Clear everything on Cache
    location.reload(); // Reload the page.
}
export function deleteItem(el) {
    console.log(`Starting the deleteTask function`);
    let checkID;
    let tempIndex;
    [checkID, tempIndex] = findButtonPressed(el.id);
    removeTaskFromHTML(checkID);
    removeTaskFromCache(tempIndex);
    return tempIndex;
}
export function deleteNextTask(el) {
    console.log(`Deleting the next task...`);
    let checkID;
    let tempIndex;
    [checkID, tempIndex] = findButtonPressed(el.id);
    removeTaskFromHTML(checkID);
    removeTaskFromCache(tempIndex);
}

// Local functions

function removeTaskFromCache(tempIndex) {
    console.log(`Removing task number ${tempIndex} from cache`);
    localStorage.removeItem(`task-${tempIndex}`);
}

function removeTaskFromHTML(checkID) {
    console.log(`Removing task ${checkID} from HTML`);
    const elementButton = document.getElementById(checkID); // Get the exact ID of the button (and paragraph) to be deleted.
    const elementParagraph = elementButton.parentNode; // Get the parent ID of the button, which should be the paragraph ID.
    elementParagraph.parentNode.removeChild(elementParagraph); // Delete the paragraph, which also deletes the button.
}