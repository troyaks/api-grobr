import { fetchIt } from "./functions/fetchMethod.js";
import { findTicketByID } from "./functions/findTicketBy.js";
import { printOnHTML } from "./functions/print.js";
import { resolveParamFromURL } from "./functions/resolveURL.js";

const [id,distribuidor,tag,method] = resolveParamFromURL(); //Take the parameters from URL and resolve then into variables.
const myResource = findTicketByID(id); //Get the resource necessary to implement the API methods.

if (method === "GET") {
    console.log(`Method used: ${method}`);
    const res = fetchIt(myResource, method); //Fetching method
    printOnHTML(res,null);
    console.log(res);
}

if (method === "PATCH") {
    console.log(`Method used: ${method}`);
    const bodyJSON = JSON.stringify({
        "subject": "Testando pra ver se atualiza mesmo com campo abaixo errado",
        //"tags":["[ANY /D+2/ STQ] INV. SEPARADO","[ANY /D+3/ FSC] NF OK","[ANY /D+5/ STQ] Expedição","[ANY /D+4/ LOG] Coleta Filho", "lil"]
        "ticket.customFieldValues[92834]": "Teste API"
    }) //"{\"subject\":\"Testando Luan\"}";
    console.log(myResource);
    const res = fetchIt(myResource, method, bodyJSON); //Fetching method
    console.log(res);
}