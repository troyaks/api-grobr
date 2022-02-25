// fetchMethod.js

import { printOnHTML } from "./print.js";

export async function fetchIt (resource, method, bodyJSON) {
    
    console.log(`Initializing FETCH API`);
    let options;

    if (method === "GET") {
        console.log(`Method chosen is`,method);
        options = {
            "async": true,
            "crossDomain": true,
            "method": "GET",
            "headers": {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                },
            };
        console.log(`The option list is:`, options);
        let res = await fetch(resource,options); //Get the server response
        let resOBJ = await res.json(); //Get the data from server response and turn it into a JS Object where we can read further parameters. 
        return resOBJ
    }

    if (method === "PATCH") {
        options = {
            "async": true,
            "crossDomain": true,
            "method": "PATCH",
            "headers": {
              "Content-Type": "application/json",
            },
            "body": bodyJSON,
        }
        console.log(`The option list is:`, options);
        await fetch(resource,options)
        .then (res => {
            console.log(res);
            return res;
        })
        .catch (err => {
            return err;
        })      
    }
}