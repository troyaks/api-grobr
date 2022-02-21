// create.js

export function createParagraph(buttonDelete, data, tempIndexID) {
    console.log(`Initializing createParagraph fnc`);
    if (tempIndexID || tempIndexID === 0) {
        console.log(`Creating paragraph when tempIndexID is given`);
        const paragraph = document.createElement("P"); // Create a paragraph.
        paragraph.id = `paragraph${tempIndexID}`; // Give an ID to it.
        paragraph.innerHTML = data; // Give an HTML to it.
        paragraph.appendChild(buttonDelete); // Add a button to it.
        taskList.appendChild(paragraph); // Add the paragraph to the taskList window.
        console.log(`Created paragraph with index ${tempIndexID} and value ${data}`);
    }
    else {
        console.log(`Creating paragraph when tempIndexID is not given`);
        const paragraph = document.createElement("P"); // Create a paragraph.
        paragraph.id = `paragraph${idCount}`; // Give an ID to it.
        paragraph.innerHTML = data; // Give an HTML to it.
        paragraph.appendChild(buttonDelete); // Add a button to it.
        taskList.appendChild(paragraph); // Add the paragraph to the taskList window.
        console.log(`Created paragraph with index ${idCount} and value ${data}`);
    }
}
export function createButtonDelete(tempIndexID) {
    console.log(`Initializing createButtonDelete function`);
    if (tempIndexID || tempIndexID === 0) {
        console.log(`Creating button when tempIndexID is given`);
        const buttonDelete = document.createElement('button'); // Create a button element.
        buttonDelete.innerHTML = "Deletar"; // Give an HTML to it.
        buttonDelete.id = `buttonDelete${tempIndexID}`; // Give an ID to it.
        buttonDelete.className = `buttonDelete`; // Give a class to it.
        console.log(`Delete button with ID ${tempIndexID} has been created`);
        return buttonDelete; // return the button element with the desired characteristics.
    }
    else { // Use the global variable "idCount" when no argument is given.
        console.log(`Creating button when tempIndexID is not given`);
        const buttonDelete = document.createElement('button'); // Create a button element.
        buttonDelete.innerHTML = "Deletar"; // Give an HTML to it.
        buttonDelete.id = `buttonDelete${idCount}`; // Give an ID to it.
        buttonDelete.className = `buttonDelete`; // Give a class to it.
        console.log(`Delete button with ID ${idCount} has been created`);
        return buttonDelete; // return the button element with the desired characteristics.
    }
}

