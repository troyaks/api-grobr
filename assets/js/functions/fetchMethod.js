// fetchMethod.js

export async function fetchIt (resource, method, bodyJSON) {
    
    console.log(`Initializing fetch method`);
    let options;

    if (method === "GET") {
        options = {
            "async": true,
            "crossDomain": true,
            "method": "GET",
            "headers": {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                },
                "body": null,
            }
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
    }

    console.log(options);
    await fetch(resource,options)
        .then (res => {
            console.log(res);
            return res;
        })
        .catch (err => {
            return err;
        })
}