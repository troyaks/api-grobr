// refresh.js

import { buttonDelete, paragraph } from './create.js';
import { nextTask } from './deleteThis.js';

export function HTMLnCache(tempIndexFnc) {
    console.log(`Starting to refresh the HTML on index ${tempIndexFnc}...`);
    while (localStorage.getItem(`task-${tempIndexFnc + 1}`)) { // While exists NextTask, keep reorganizing it.
        let tempButtonDelete = buttonDelete(tempIndexFnc); // Create button equal of deleted task button.
        let tempTaskName = `task-${tempIndexFnc}`; // Name the task equally as the deleted task.
        let tempNextTaskValue = localStorage.getItem(`task-${1 + tempIndexFnc}`); // Get info of NextTask.
        paragraph(tempButtonDelete, `${tempNextTaskValue} `, tempIndexFnc); /* Create again the paragraph of deleted task
        but now containing info from the nextTask. */

        console.log(`Created task number ${tempIndexFnc} with value ${tempNextTaskValue}`);
        localStorage.setItem(tempTaskName, tempNextTaskValue); // Save on Cache the NextTask in the pace of DeletedTask.
        console.log(`Just saved the task on cache as ${tempTaskName} and value ${tempNextTaskValue}`);
        console.log(`Getting ID of next task...`);
        tempButtonDelete = buttonDelete((tempIndexFnc + 1)); // Get ID of NextTask.
        console.log(`Next task ID is ${tempButtonDelete.id}`);
        nextTask(tempButtonDelete); // DeleteNext task.
        console.log(`Now the counter is in ${tempIndexFnc}`);
        tempIndexFnc++;
        console.log(`Counting +1... Now, let's try again with the counter in ${tempIndexFnc}`);
    }
    let index = tempIndexFnc - 1;
    let idCount = tempIndexFnc;
    console.log(`It seems like it is over when the counter is in ${tempIndexFnc}`);
    return [idCount, index];
}

