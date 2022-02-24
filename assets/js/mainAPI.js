import { fetchIt } from "./functions/fetchMethod.js";
import { findTicketByID } from "./functions/findTicketBy.js";
import { printOnHTML } from "./functions/print.js";
import { resolveParamFromURL } from "./functions/resolveURL.js";

const parameters = resolveParamFromURL(); //Take the parameters from URL and resolve then into variables.
const myResource = findTicketByID(parameters.id, parameters.URL); //Get the resource necessary to implement the API methods.

if (parameters.method === "GET") {
    console.log(`Method used: ${parameters.method}`);
    const res = fetchIt(myResource, parameters.method); //Fetching method
    printOnHTML(res,null);
    console.log(res);
}

if (parameters.method === "PATCH") {
    console.log(`Method used: ${parameters.method}`);
    const bodyJSON = JSON.stringify({
        "subject": `${parameters.subject}`,
    })
    console.log(myResource);
    const res = fetchIt(myResource, parameters.method, bodyJSON); //Fetching method
    console.log(res);
}