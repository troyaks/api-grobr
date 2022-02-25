import { fetchIt } from "./functions/fetchMethod.js";
import { findTicketByID } from "./functions/findTicketBy.js";
import { printOnHTML } from "./functions/print.js";
import { arrayToJSON, JsonToArrayObj, urlToIterable, urlToJSON } from "./functions/x-To-y.js";

const bodyWrite = urlToJSON(location.search,'createBodyToWriteParams'); // Take any parameter in the URl that has value (example &id=7402 or &method=PATCH or url=tickets or subject=New+Case, etc...).
const bodyRead = urlToJSON(location.search,'createBodyToReadParams'); // Take any parameter in the URL that has NO value (example &clients or &subject or &clients.BusinessName, etc...)
for (const [urlParameter, value] of urlToIterable(location.search)) { window[urlParameter] = value; } // Create global variables in "mainAPI.js" based on the entries in the URL.
const myResource = findTicketByID(id, url); // Get the resource necessary to implement the API methods.

console.log(bodyWrite);
console.log(bodyRead);
console.log(myResource);
let body;

if (method === "PATCH") { body = bodyWrite;
    await fetchIt(myResource, method, body); 
};

if (method === "GET") { body = bodyRead;

    const responseObj = await fetchIt(myResource, method, body); // Applying fetch method and return the response object.
    console.log(responseObj);
    for (const [keyResponse,value] of Object.entries(responseObj)) {
        for (const [keyBody] of Object.entries(JsonToArrayObj(bodyRead))) {
            if (keyBody === keyResponse) {
                console.log(Object.entries(value));
                console.log(typeof value);
                printOnHTML(`${keyBody} : ${arrayToJSON(value)}`);
            }
        }
    }
};

/*

https://api.movidesk.com/public/v1/tickets?token=39cbc1bb-ffa6-491e-84f4-eb9687902e5e&$select=clients,id,subject&$filter=id eq 7402&$expand=clients($select=businessName)

https://api.movidesk.com/public/v1/tickets?token=39cbc1bb-ffa6-491e-84f4-eb9687902e5e&$filter=id eq 7402&$select=clients&$expand=clients($select=businessName)

*/


