const cheerio = require('cheerio');
const scrape = require('scrape-it');
const axios = require('axios');

/**
 * 爬取流行菜谱数据
 */
exports.fetchPopRecipes = (req, res) => {
    axios.get("http://www.xiachufang.com/")
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