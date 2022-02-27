//mainAPI.js

//Importing functions from another files within './js/function' directory
import { fetchResponse } from "./functions/fetch.js";
import { findResourceFromURL } from "./functions/find.js";
import { printResponse } from "./functions/print.js";
import { urlToJSON } from "./functions/x-To-y.js";

const myResource = findResourceFromURL(); console.log('Pointing to',myResource); // Get the resource necessary to implement the API methods.

if (method === "PATCH") { 
    const body = urlToJSON(location.search,'createBodyToWriteParams'); // Take any parameter in the URl that has value (example &id=7402 or &method=PATCH or url=tickets or subject=New+Case, etc...).
    await fetchResponse(myResource, method, body);
};

if (method === "GET") { 
    const body = urlToJSON(location.search,'createBodyToReadParams'); // Take any parameter in the URL that has NO value (example &clients or &subject or &clients.BusinessName, etc...).
    const responseObj = await fetchResponse(myResource, method); // Applying fetch method and return the response object.
    printResponse(responseObj,body); // Print parameters that we want to read on HTML
};

/*

https://api.movidesk.com/public/v1/tickets?token=39cbc1bb-ffa6-491e-84f4-eb9687902e5e&$select=clients,id,subject&$filter=id eq 7402&$expand=clients($select=businessName)

https://api.movidesk.com/public/v1/tickets?token=39cbc1bb-ffa6-491e-84f4-eb9687902e5e&$filter=id eq 7402&$select=clients&$expand=clients($select=businessName eq 0)

https://api.movidesk.com/public/v1/tickets?token=39cbc1bb-ffa6-491e-84f4-eb9687902e5e&$filter=id eq 7402&$select=clients&$expand=clients($filter=id eq '460113777')

https://api.movidesk.com/public/v1/tickets?token=39cbc1bb-ffa6-491e-84f4-eb9687902e5e&$filter=id eq 7402&$select=clients&$expand=clients($select=id)

http://127.0.0.1:5500/index.html?url=ticket.customFieldValues&id=7402&method=GET

http://127.0.0.1:5500/index.html?url=tickets&id=7402&method=GET

*/


