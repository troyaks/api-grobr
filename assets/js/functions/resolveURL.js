// resolveURL.js

export function resolveParamFromURL () {

    const urlParams = new URLSearchParams(location.search); //Getting Parameters array from URL

    // Resolving all parameters we need to run the API.
    const URL = urlParams.get('URL');
    const id = urlParams.get('id');
    const distribuidor = urlParams.get('distribuidor');
    const tag = urlParams.get('tag');
    const method = urlParams.get('method');
    const subject = urlParams.get('subject');

    if (!method | !URL | !id) {
        return console.log('missing arguments');
    }
    else {
        let param;

        return param = {
            URL,
            id,
            distribuidor,
            tag,
            method,
            subject
        };
    }


}