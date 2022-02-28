// fetchMethod.js

import { printOnHTML } from "./print.js";
import { arrayToIterable } from "./x-To-y.js";

export async function fetchResponse (resource, method, bodyJSON) {
    console.log(`Initializing FETCH API`);
    let options;

    if (method === "GET" && !bodyJSON) {
        console.log(`Method chosen is`,method);
        options = {
            "async": true,
            "crossDomain": true,
            "method": `${method}`,
            "headers": {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                },
            };
        console.log(`The option list is: \n`, options);
        console.log(`Trying connection...`);
        let res = await fetch(resource,options); // Get the server response
        console.log(res);
        let resOBJ = await res.json(); // Resolve the promise and turn it into a JS Object where we can read further parameters. 
        console.log('Resolved the promise object: \n', arrayToIterable(resOBJ));
        return resOBJ;
    }

    if (method === "PATCH") {
        options = {
            "async": true,
            "crossDomain": true,
            "method": `${method}`,
            "headers": {
              "Content-Type": "application/json",
            },
            "body": bodyJSON,
        }
        console.log(`The option list is:`, options);
        console.log(`Trying connection...`);
        await fetch(resource,options)
        .then (res => {
            console.log('Success! Server response is', res);
            printOnHTML(`Changes made with success: ${res}`,null);
            return res;
        })
        .catch (err => {
            console.log('Error! Server response is', res);
            printOnHTML(`Error: ${err}`,null);
            return err;
        })      
    }
}