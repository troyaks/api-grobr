// resolveURL.js

export function resolveParamFromURL () {
    const urlParams = new URLSearchParams(location.search); //Getting Parameters array from URL
    const entries = urlParams.entries();
    return entries;
}

export function paramsToObject(params) {
    const result = {};
        for(const [key, value] of params) { // each 'entry' is a [key, value] tupple
            if (key != 'id' | key != 'url' | key != 'method') { // Exclude the parameters that can never be changed in case of PATCH.
                result[key] = value; // Create the JSON.
            }  
        }
    return result;
}

