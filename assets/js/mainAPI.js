import { fetchIt } from "./functions/fetchMethod.js";
import { findTicketByID } from "./functions/findTicketBy.js";
import { urlToIterable, urlToJSON } from "./functions/x-To-y.js";

const bodyWrite = urlToJSON(location.search,'createBodyToWriteParams'); // Take any parameter in the URl that has value (example &id=7402 or &method=PATCH or url=tickets or subject=New+Case, etc...).
const bodyRead = urlToJSON(location.search,'createBodyToReadParams'); // Take any parameter in the URL that has NO value (example &clients or &subject or &clients.BusinessName, etc...)
for (const [key, value] of urlToIterable(location.search)) { window[key] = value; } // Create global variables in "mainAPI.js" based on the entries in the URL.
const myResource = findTicketByID(id, url); // Get the resource necessary to implement the API methods.

console.log(bodyWrite);
console.log(bodyRead);
console.log(myResource);

// FIRST THING AFTER LUNCH: ADAPT FECHIT TO THE CHANGES I MADE

// await fetchIt(myResource, method, body); // Applying fetch method