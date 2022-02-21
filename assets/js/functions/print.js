// print.js

const create = require("./create");
const misc = require("./misc");

module.exports = {

    taskOnHTML: function(task, idCount) {
        console.log(`Printing task on HTML`);
        buttonDelete = create.buttonDelete; // Fnc to create a delete button
        if (typeof task.value === 'undefined') {
            // This is for the page initialization when it already has data on cache
            create.paragraph(buttonDelete, `${task} `);
        }
        else { // This for the webpage when is already running
            create.paragraph(buttonDelete, `${task.value} `);
        }
        return idCount = misc.counting(idCount); // Just adding "+1" for some parameters.
    }

}

