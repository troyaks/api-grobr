// fetchMethod.js

import { printOnHTML } from "./print.js";
import { arrayToIterable } from "./x-To-y.js";

export async function fetchResponse (resource, method, bodyJSON) {
    console.log(`-> Initializing FETCH API`);
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
        console.log(`-> Trying connection...`);
        let res = await fetch(resource,options); // Get the server response
        if (!res.ok) {
            console.log(`Failed to FETCH.\nServer returned status (${res.status}).\nPlease contact your API provider or read its documentation to understand better the issue.`);
            console.log('Script terminated.')
        }
        else {
            console.log('FETCH succeded');
        }
        console.log('-> Waiting promise to be resolved...')
        let resOBJ = await res.json(); // Resolve the promise and turn it into a JS Object where we can read further parameters. 
        console.log('Promise object resolved: \n', arrayToIterable(resOBJ));
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
        console.log(`-> Trying connection...`);
        await fetch(resource,options)
        .then (res => {
            // console.log('Server response is', res);
            console.log('Connection established');
            if (!res.ok) {
                console.log(`Failed to FETCH.\nServer returned status (${res.status}).\nPlease contact your API provider or read its documentation to understand better the issue.`);
                console.log('Script terminated.')
                return null;
            }
            else {
                console.log('FETCH succeded');
                return res;
            }
           //printOnHTML(`Changes made with success: ${res}`,null); 
        })
        .catch (err => {
            console.log('Connection Failed')
            console.log('Error:', res);
            console.log('Script terminated.')
            return null;
        })      
    }
}