const cheerio = require('cheerio');
const scrape = require('scrape-it');
const axios = require('axios');

/**
 * 爬取流行菜谱数据
 */
exports.fetchPopRecipes = (req, res) => {
    axios.get('http://www.xiachufang.com/')
    .then(({ data }) => {
        let $ = cheerio.load(data, {
            decodeEntities: false,
        });
        let result = scrape.scrapeHTML($, {
            popRecipes: {
                listItem: ".pop-recipes ul li",
                data: {
                    id: {
                        selector: '.cover',
                        attr: 'href',
                        convert: x => x.match(/\/(\d+)\//)[1]
                    },
                    name: '.name a',
                    thumbnail: {
                        selector: '.cover img',
                        attr: 'src'
                    },
                    cookId: {
                        selector: '.stats a',
                        attr: 'href',
                        convert: x => x.match(/\/(\d+)\//)[1]
                    },
                    cookName: '.stats a',
                    stats: '.stats span'
                }
            }
        });
        res.success(result.popRecipes);
    })
    .catch(err => res.error(err));
}

/**
 * 爬取流行菜谱数据
 */
exports.fetchRecipeDetail = (req, res) => {
    const recipeId = req.query.id;
    if (!recipeId) {
        res.error(500, '菜谱ID不能为空');
        return;
    }

    axios.get('https://www.xiachufang.com/recipe/' + recipeId)
    .then(({ data }) => {
        let $ = cheerio.load(data, {
            decodeEntities: false,
        });
        let result = scrape.scrapeHTML($, {
            name: '.page-title',
            author: '.author a span',
            cover: {
                selector: '.cover img',
                attr: 'src'
            },
            description: '.desc',
            steps: {
                listItem: '.steps ol li',
                data: {
                    description: '.text',
                    pic_url: {
                        selector: 'img',
                        attr: 'src'
                    }
                }
            },
            comments: {
                listItem: '.question-list li',
                data: {
                    author: '.right-top.info a',
                    content: '.right-bottom'
                }
            }
        });
        res.success(result);
    })
    .catch(err => res.error(err));
}