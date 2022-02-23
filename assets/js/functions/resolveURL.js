// resolveURL.js

export function resolveParamFromURL () {

    const urlParams = new URLSearchParams(location.search); //Getting Parameters array from URL

    // Resolving all parameters we need to run the API.

    const id = urlParams.get('id');
    const distribuidor = urlParams.get('distribuidor');
    const tag = urlParams.get('tag');
    const method = urlParams.get('method');

    if (!method) {
        return;
    }

    return [id,distribuidor,tag,method];

}