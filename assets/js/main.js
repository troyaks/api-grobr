// Open Query selectors (Buttons)
const form = document.querySelector('.form');
const send = document.querySelector('.send');
const task = document.querySelector('.task');
const eventList = document.querySelector('.eventList');
const deleteAll = document.querySelector('.deleteAll');

// Fetch function files
import { deleteAllData, deleteItem } from './functions/deleteThis.js';
import { initializePage } from './functions/initialize.js';
import { printTaskOnHTML } from './functions/print.js';
import { saveTaskOnCache } from './functions/save.js';

let idCount = 0;
let index; let taskNameOnCache;

const checkstorageID = typeof Storage; if (checkstorageID === "undefined") { // Check if storage data by HTML5 is available.
    alert("Your browser does not provide Web Storage by HTML5");
    throw new Error ("Storage not available");
}

[index, taskNameOnCache] = initializePage(); // Initialize initializePage parameters.

alert(`index is ${index} and taskNameOnChache is ${taskNameOnCache}`);

document.addEventListener('keyup', function(event) { // Listen to key pressing events.
    if (event.keyCode === 13) {
        if (!task.value || !/\S/.test(task.value)) { // if the data sent has no input or only blank space
            return; // then just hit return
        }
    console.log(`>>>>>>> Listen to send button activation`);
    index = saveTaskOnCache(task, index);
    idCount = printTaskOnHTML(task, idCount);
    document.getElementById("text").value = "";
    }
})

document.addEventListener('click', function(event) { // Listen to click events.
    const clickElement = event.target;

if (clickElement.classList.contains('send')) { // get event of 'send' when hiting 'Send' button.
    if (!task.value || !/\S/.test(task.value)) { // if the data sent has no input or only blank space
        return; // then just hit return
    }
    console.log(`>>>>>>> Listen to send button activation`);
    alert('>>>>>>> Listen to send button activation');
    alert(`index going in as ${index}`);
    index = saveTaskOnCache(task, index);
    alert(`index going out as ${index}`);
    idCount = printTaskOnHTML(task, idCount);
    document.getElementById("text").value = "";
}

if (clickElement.classList.contains('deleteAll')) { // get event of 'deleteAll' when hitting 'Delete All' button.
    deleteAllData();
}

if (clickElement.classList.contains('buttonDelete')) { // get event of 'delete' when hitting delete button of a task.
    console.log(`>>>>>>> Listen to buttonDelete click`);
    const tempIndex = deleteItem(clickElement);
    console.log(`refresh the HTML initializePage starting on the Index ${tempIndex}`);
    [idCount, index] = refresh.HTMLnCache(tempIndex);
}
})