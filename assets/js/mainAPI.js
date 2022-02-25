import { fetchIt } from "./functions/fetchMethod.js";
import { findTicketByID } from "./functions/findTicketBy.js";
import { paramsToObject, resolveParamFromURL } from "./functions/resolveURL.js";

let parameters = resolveParamFromURL(); // Take the parameters from URL and resolve them into variables.
const bodyJSON = JSON.stringify(paramsToObject(parameters)); // Turn body request from URL (parameters) into a body object and then turn body object into JSON.
parameters = resolveParamFromURL(); // Fill the parameters again since it seems to be only "one-time-readable"
for(const [key, value] of parameters) { window[key] = value; } // Create global variables in "mainAPI.js" based on the entries in the URL.
const myResource = findTicketByID(id, url); // Get the resource necessary to implement the API methods.
await fetchIt(myResource, method, bodyJSON); // Applying fetch method