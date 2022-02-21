// refresh.js

import { createButtonDelete, createParagraph } from './create.js';
import { deleteNextTask } from './deleteThis.js';

export function refreshHTMLnCache(tempIndexFnc) {
    console.log(`Starting to refresh the HTML on index ${tempIndexFnc}...`);
    while (localStorage.getItem(`task-${tempIndexFnc + 1}`)) { // While exists deleteNextTask, keep reorganizing it.
        let tempcreateButtonDelete = createButtonDelete(tempIndexFnc); // Create button equal of deleted task button.
        let tempTaskName = `task-${tempIndexFnc}`; // Name the task equally as the deleted task.
        let tempdeleteNextTaskValue = localStorage.getItem(`task-${1 + tempIndexFnc}`); // Get info of deleteNextTask.
        createParagraph(tempcreateButtonDelete, `${tempdeleteNextTaskValue} `, tempIndexFnc); /* Create again the createParagraph of deleted task
        but now containing info from the deleteNextTask. */

        console.log(`Created task number ${tempIndexFnc} with value ${tempdeleteNextTaskValue}`);
        localStorage.setItem(tempTaskName, tempdeleteNextTaskValue); // Save on Cache the deleteNextTask in the pace of DeletedTask.
        console.log(`Just saved the task on cache as ${tempTaskName} and value ${tempdeleteNextTaskValue}`);
        console.log(`Getting ID of next task...`);
        tempcreateButtonDelete = createButtonDelete((tempIndexFnc + 1)); // Get ID of deleteNextTask.
        console.log(`Next task ID is ${tempcreateButtonDelete.id}`);
        deleteNextTask(tempcreateButtonDelete); // DeleteNext task.
        console.log(`Now the counter is in ${tempIndexFnc}`);
        tempIndexFnc++;
        console.log(`Counting +1... Now, let's try again with the counter in ${tempIndexFnc}`);
    }
    let index = tempIndexFnc - 1;
    let idCount = tempIndexFnc;
    console.log(`It seems like it is over when the counter is in ${tempIndexFnc}`);
    return [idCount, index];
}

