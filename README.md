# cat-blog
Cat blog powered by 11ty.dev using API thecatapi.com with possibility to fetch cats sorted by breed and view cat detail page info.

Requirements:

- Node.js v14.0 or higher
- NPM

For start project:

Install all packages
```bash
npm install
```

Simply run project
```bash
npm run start
```

After that click to [this link](http://localhost:8080/)
or manually type ```http://localhost:8080``` in your browser address line

For possibility to fetch image for each cat breed:

Need to be registered in https://thecatapi.com and get api_key

Create ```.env``` file in root directory of project

Copy and paste there variable:

```
CAT_API_API_KEY=<your_api_key>
```

How to make it works please read TODO article in ```src/_data/cats.js``` file