const axios = require("axios");
const fs = require("fs");
const path = require("path");

const { CAT_API_API_KEY } = require('@vars')
const { MAIN_BREED_LIST_API, IMAGE_BREED_API } = require('@constants')

// TODO: uncomment all code in this module for also fetch random image from CAT API, for more info read README.md

module.exports = async function () {
    const response = await axios.get(MAIN_BREED_LIST_API);
    const cats = response.data;

    const catData = [];

    for (const cat of cats) {
        // const endpointForGetBreedImage = `${IMAGE_BREED_API}?breed_ids=${cat.id}&api_key=CAT_API_API_KEY`;
        // const { data: [ additionalCatInfo ] } = await axios.get(endpointForGetBreedImage);
        // const { url: image_url } = additionalCatInfo;

        const catInfo = {
            id: cat.id,
            name: cat.name,
            breed: cat.name,
            origin: cat.origin,
            temperament: cat.temperament,
            description: cat.description,
            // image_url
        };

        const filePath = path.join(__dirname, "../cats", `${cat.id}.md`);
        fs.writeFileSync(filePath, `
<!DOCTYPE html>
<html>
   <head>
        <title>Cat Detail</title>
        <link rel="stylesheet" href="/css/styles.css">
        <link rel="stylesheet" href="/css/cat-detail.css">
   </head>
    <body>
        <h1>Cat breed detail</h1>
        <h2>Breed: ${cat.name}</h2>
        <p>Origin: ${cat.origin}</p>
        <p>Temperament: ${cat.temperament}</p>
        <p>Description: ${cat.description}</p>
        <p>Life Span: ${cat.life_span} years</p>
        <p>Origin: ${cat.origin}</p>
        <p>Temperament: ${cat.temperament}</p>
        <p><a href=${cat.wikipedia_url}>Wikipedia page</a></p>
<!--        <p><a href=${cat.image_url}>Image</a></p>-->
     </body>
</html>
        `);

         catData.push(catInfo);
    }

    return catData;
};
