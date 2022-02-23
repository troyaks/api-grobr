const urlParams = new URLSearchParams(location.search);

const id = urlParams.get('id');
const distribuidor = urlParams.get('distri');
const tag = urlParams.get('tag');

if (id && distribuidor && tag) {
    console.log(`deu certo Walisson`);

    let data = {
        "subject": "Bruna, minha vida teste 2"
    }
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.movidesk.com/public/v1/tickets?token=39cbc1bb-ffa6-491e-84f4-eb9687902e5e&id=12007",
        "method": "PATCH",
        "headers": {
            "Content-Type": "application/json"
        },
        "processData": false,
        "data": data
    };

    $.ajax(settings).done(function(response) {
        console.log(response);
    });

} else {
    console.log(`faltando algum parametro`);
    console.log(`id : ${id}`);
    console.log(`distribuidor : ${distribuidor}`);
    console.log(`tag : ${tag}`);
}