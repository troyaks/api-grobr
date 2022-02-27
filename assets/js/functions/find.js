// find.js

import { urlToIterable } from "./x-To-y.js";

export function findButtonPressed(elID) {
    console.log(`Trying to find which button was pressed...`);
    let tempIndex = 0; let checkID = `buttonDelete${tempIndex}`;
    while (elID != checkID) { // Search for the exact ID.
        tempIndex++;
        checkID = `buttonDelete${tempIndex}`;
    }
    console.log(`Found the button with ID ${checkID} and Index ${tempIndex}`);
    return [checkID, tempIndex]; // Return the right ID and Index.
}

export function findResourceFromURL () {
    
    for (const [urlParameter, value] of urlToIterable(location.search)) { window[urlParameter] = value; } // Create global variables in "find.js" based on the entries in the URL.
    
    const parameterID = `${id}`;
    const serviceRootURL = `https://api.movidesk.com/`;
    const resourcePatch = `public/v1/${url}`;
    const queryOptions = `token=39cbc1bb-ffa6-491e-84f4-eb9687902e5e&id=${parameterID}`;
    
    const ticketResourcePath = `${serviceRootURL}${resourcePatch}?${queryOptions}`;
    
    return ticketResourcePath;
}


