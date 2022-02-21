// find.js

module.exports = {

    buttonPressed: function(elID) {
        console.log(`Trying to find which button was pressed...`);
        let tempIndex = 0; let checkID = `buttonDelete${tempIndex}`;
        while (elID != checkID) { // Search for the exact ID.
            tempIndex++;
            checkID = `buttonDelete${tempIndex}`;
        }
        console.log(`Found the button with ID ${checkID} and Index ${tempIndex}`);
        return [checkID, tempIndex]; // Return the right ID and Index.
    }

}


