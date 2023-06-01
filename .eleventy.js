require('module-alias/register');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/cats.json");
    eleventyConfig.addPassthroughCopy("src/css");

    eleventyConfig.addCollection("cats", function (collection) {
        return collection.getFilteredByGlob("src/cats/*.md").map((item) => {
            item.url = `/${item.data.id}/`;
            return item;
        });
    });

    return {
        dir: {
            input: "src",
            output: "dist",
        },
    };
};
