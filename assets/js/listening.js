const urlParams = new URLSearchParams(location.search);

const id = urlParams.get('id');
const distribuidor = urlParams.get('distri');
const tag = urlParams.get('tag');

if (id && distribuidor && tag) {
    console.log(`deu certo`);
}

else {
    console.log(`faltando algum parametro`);
    console.log(`id : ${id}`);
    console.log(`distribuidor : ${distribuidor}`);
    console.log(`tag : ${tag}`);
}