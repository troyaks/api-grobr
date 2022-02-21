// deleteThis.js

const find = require("./find");

module.exports = {

    allData: function() {
        console.log(`Entered the DeleteAllData function`)
        localStorage.clear(); // Clear everything on Cache
        location.reload(); // Reload the page.
    },

    item: function(el) {
        console.log(`Starting the deleteTask function`);
        let checkID;
        let tempIndex;
        [checkID, tempIndex] = find.buttonPressed(el.id);
        removeTaskFromHTML(checkID);
        removeTaskFromCache(tempIndex);
        return tempIndex;
    },

    nextTask: function(el) {
        console.log(`Deleting the next task...`);
        let checkID;
        let tempIndex;
        [checkID, tempIndex] = find.buttonPressed(el.id);
        removeTaskFromHTML(checkID);
        removeTaskFromCache(tempIndex);
    }

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