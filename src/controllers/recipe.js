// 流行元素数据信息
exports.pop = function (req, res) {
    const result = [
        {
            "id": "102122269",
            "name": "【电饭锅】一只番茄饭 番茄拌饭",
            "thumbnail": "http://i1.chuimg.com/a9e101fa8b7311e6a9a10242ac110002_1968w_2624h.jpg@2o_50sh_1pr_1l_235w_138h_1c_1e_90q_1wh",
            "cookId": "112064570",
            "cookName": "李果然",
            "stats": "1806 做过"
        },
        {
            "id": "103704010",
            "name": "香烤鸡翅",
            "thumbnail": "http://i1.chuimg.com/022d207fc8fa4d3d8c2e63d617045e15_6000w_4000h.jpg@2o_50sh_1pr_1l_235w_138h_1c_1e_90q_1wh",
            "cookId": "120967814",
            "cookName": "博世家电",
            "stats": "11 做过"
        },
        {
            "id": "102891301",
            "name": "平菇青椒炒鸡蛋 好吃又营养的超快手家常菜",
            "thumbnail": "http://i1.chuimg.com/624264364e2541b2895f4cfc2c2b32d7_4288w_2848h.jpg@2o_50sh_1pr_1l_235w_138h_1c_1e_90q_1wh",
            "cookId": "122079365",
            "cookName": "千寻树",
            "stats": "252 做过"
        },
        {
            "id": "102295729",
            "name": "盘丝饼",
            "thumbnail": "http://i1.chuimg.com/4a30ea4e407311e7947d0242ac110002_720w_1280h.jpg@2o_50sh_1pr_1l_235w_138h_1c_1e_90q_1wh",
            "cookId": "101553997",
            "cookName": "食肆巷子",
            "stats": "845 做过"
        },
        {
            "id": "102202490",
            "name": "『1234糖醋排骨』",
            "thumbnail": "http://i2.chuimg.com/27591c3c296511e7bc9d0242ac110002_1324w_1984h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90",
            "cookId": "107144295",
            "cookName": "o橙小橙o",
            "stats": "179 做过"
        },
        {
            "id": "102306288",
            "name": "饭店必点的干锅花菜，是这么做出来的。",
            "thumbnail": "http://i1.chuimg.com/0e8f9a644ab211e7947d0242ac110002_1000w_666h.jpg@2o_50sh_1pr_1l_235w_138h_1c_1e_90q_1wh",
            "cookId": "100351317",
            "cookName": "小美的美食",
            "stats": "314 做过"
        },
        {
            "id": "100284081",
            "name": "荷兰宝贝 Dutch Baby",
            "thumbnail": "http://i2.chuimg.com/9d43282c885011e6a9a10242ac110002_1800w_1200h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90",
            "cookId": "10666666",
            "cookName": "阿May又改名儿了",
            "stats": "508 做过"
        },
        {
            "id": "103708641",
            "name": "超级绵~奶白吐司",
            "thumbnail": "http://i2.chuimg.com/dfd1c610155b47ef8418eac4db333f43_1650w_1100h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90",
            "cookId": "10585157",
            "cookName": "啊呜511",
            "stats": "42 做过"
        },
        {
            "id": "100232976",
            "name": "《Tinrry下午茶》教你做芒果班戟和芒果千层饼",
            "thumbnail": "http://i2.chuimg.com/6d9419bc883f11e6b87c0242ac110003_578w_420h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90",
            "cookId": "10411331",
            "cookName": "Tinrry甜悦",
            "stats": "23160 做过"
        },
        {
            "id": "103699409",
            "name": "蛋糕卷，肉松蛋糕卷，网红贝贝肉松卷",
            "thumbnail": "http://i2.chuimg.com/e58cfcce29f5471d88f62bc75686dc09_1280w_854h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90",
            "cookId": "126334531",
            "cookName": "美丽女神经",
            "stats": "91 做过"
        },
        {
            "id": "102276846",
            "name": "自制肉松小贝",
            "thumbnail": "http://i2.chuimg.com/d8e9d0522f4311e7bc9d0242ac110002_1620w_1080h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90",
            "cookId": "105784662",
            "cookName": "糯米的厨房",
            "stats": "195 做过"
        },
        {
            "id": "101814068",
            "name": "不回缩杯子蛋糕cupcake",
            "thumbnail": "http://i2.chuimg.com/74fab86c8afd11e6b87c0242ac110003_640w_643h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90",
            "cookId": "106652802",
            "cookName": "姜诗cc",
            "stats": "3666 做过"
        }
    ];
    res.success(result);
}

exports.rising = function (req, res) {

}

/**
 * 创建菜谱
 */
exports.create = function (req, res) {
    const name = req.body.name;
    const cover = req.body.cover;
    const description = req.body.description;
    const steps = req.body.steps;
    const userId = req.decoded.userId;

    if (!name) {
        res.error(500, '菜谱名称不能为空');
        return;
    }
    if (!cover) {
        res.error(500, '菜谱封面图不能为空');
        return;
    }
    if (!description) {
        res.error(500, '菜谱描述不能为空');
        return;
    }
    if (!steps || steps.length == 0) {
        res.error(500, '菜谱步骤不能为空');
        return;
    }

    const Recipe = req.models.recipe;
    Recipe.create({
        user_id: userId,
        name: name,
        cover: cover,
        description: description,
        created_at: new Date().getTime()
    }, (err, recipe) => {
        if (err) {
            res.error(500, '数据库出错，' + err);
            return;
        }

        const RecipeStep = req.models.recipeStep;
        RecipeStep.create(steps.map(step => {
            return {
                recipe_id: recipe.id,
                description: step.description,
                pic_url: step.picUrl,
                order: step.order,
                created_at: new Date().getTime()
            }
        }), function (err, steps) {
            if (err) {
                res.error(500, '数据库出错，' + err);
                return;
            }

            res.success({
                ...recipe,
                steps: steps || []
            });
        });
    });
}

exports.detail = function (req, res) {
    const id = req.query.id;
    if (!id) {
        res.error(500, '菜谱ID不能为空');
        return;
    }

    const Recipe = req.models.recipe;
    Recipe.find({ id }, (err, recipes) => {
        if (err) {
            res.error(500, '数据库出错，' + err);
            return;
        }

        const recipe = recipes && recipes[0];
        if (!recipe) {
            res.error(500, '未找到该菜谱');
            return;
        }

        const RecipeStep = req.models.recipeStep;
        RecipeStep.find({ recipe_id: recipe.id }, (err, steps) => {
            if (err) {
                res.error(500, '数据库出错，' + err);
                return;
            }

            res.success({
                ...recipe,
                steps: steps || []
            });
        })
    });
}