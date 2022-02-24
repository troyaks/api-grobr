//import { createBodyJSON } from "./functions/create.js";
import { fetchIt } from "./functions/fetchMethod.js";
import { findTicketByID } from "./functions/findTicketBy.js";
import { printOnHTML } from "./functions/print.js";
import { paramsToObject, resolveParamFromURL } from "./functions/resolveURL.js";

let parameters = resolveParamFromURL(); // Take the parameters from URL and resolve them into variables.
const bodyOBJ = paramsToObject(parameters); // Turn body request into an object.
const bodyJSON = JSON.stringify(bodyOBJ); // Turn body object into JSON.
parameters = resolveParamFromURL(); // Fill the parameters again due to a bug. If we take out this line the code doesn't work.
for(const [key, value] of parameters) { window[key] = value; } // Create global variables in "mainAPI.js" based on the entries in the URL.
const myResource = findTicketByID(id, url); //Get the resource necessary to implement the API methods.

    await fetchIt(myResource, method, bodyJSON); //Fetching method