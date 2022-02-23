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
                "Content-Type": "application/json",
                },
                "body": null
            }
    }

    if (method === "PATCH") {
        options = {
            "async": true,
            "crossDomain": true,
            "method": "PATCH",
            "headers": {
              "Content-Type": "application/json",
              'Access-Control-Allow-Origin': "http://127.0.0.1:5500/"
            },
            "body": bodyJSON
          }
    }

    console.log(options);
    let response;
    response =  await fetch(resource,options);
    response = response.json();
    console.log(response);
    return response;
    
}