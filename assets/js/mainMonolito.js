//mainAPI.js

import { fetchResponse } from "./functions/fetch.js";
import { findResourceFromURL } from "./functions/find.js";
import { printResponse } from "./functions/print.js";
import { arrayToIterable, arrayToJSON, JsonToArrayObj, urlToJSON } from "./functions/x-To-y.js";

const myResource = findResourceFromURL(); console.log('Pointing to',myResource); // Get the resource necessary to implement the API methods.

if (method === "PATCH") {
    const body = urlToJSON(location.search,'nonEmptyValues'); // Take any parameter in the URl that has value (example &id=7402 or &method=PATCH or url=tickets or subject=New+Case, etc...).
    console.log('Body created in JSON:\n',body); 
    await fetchResponse(myResource, method, body); // Applying fetch method and return the response object.
};

if (method === "GET") {
    const body = urlToJSON(location.search,'emptyValues'); // Take any parameter in the URL that has NO value (example &clients or &subject or &clients.BusinessName, etc...).
    const responseObj = await fetchResponse(myResource, method); // Applying fetch method and return the response object.
    printResponse(responseObj,body); // Print parameters that we want to read on HTML.
};



/*

https://api.movidesk.com/public/v1/tickets?token=39cbc1bb-ffa6-491e-84f4-eb9687902e5e&$select=clients,id,subject&$filter=id eq 7402&$expand=clients($select=businessName)

https://api.movidesk.com/public/v1/tickets?token=39cbc1bb-ffa6-491e-84f4-eb9687902e5e&$filter=id eq 7402&$select=clients&$expand=clients($select=businessName eq 0)

https://api.movidesk.com/public/v1/tickets?token=39cbc1bb-ffa6-491e-84f4-eb9687902e5e&$filter=id eq 7402&$select=clients&$expand=clients($filter=id eq '460113777')

https://api.movidesk.com/public/v1/tickets?token=39cbc1bb-ffa6-491e-84f4-eb9687902e5e&$filter=id eq 7402&$select=clients&$expand=clients($select=id)

http://127.0.0.1:5500/index.html?url=ticket.customFieldValues&id=7402&method=GET

http://127.0.0.1:5500/index.html?url=tickets&id=7402&method=GET

https://api.movidesk.com/public/v1/tickets?token=39cbc1bb-ffa6-491e-84f4-eb9687902e5e&id=7402&id=7402&customFieldValues

*/