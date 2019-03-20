// 流行元素数据信息
exports.pop = function (req, res) {
    const result = [
        {
            "id": "102122269",
            "name": "【电饭锅】一只番茄饭 番茄拌饭",
            "thumbnail": "http://i2.chuimg.com/a4a8e165867d4bf486a404a879db2e9a_1539w_1154h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90",
            "cookId": "112064570",
            "cookName": "李果然",
            "stats": "1806 做过",
            "dishScore": 9.3,
            "dishStuff": "猪肉,番茄,米饭,电饭锅",
            "img": {
                "img1": "http://img3.imgtn.bdimg.com/it/u=226260387,2736876846&fm=26&gp=0.jpg",
                "img2": "http://img0.imgtn.bdimg.com/it/u=3520500708,2924643808&fm=26&gp=0.jpg",
                "img3": "http://img4.imgtn.bdimg.com/it/u=1441563553,739383591&fm=26&gp=0.jpg"
            },
            "title": "#正儿八经的做个蛋糕#",
            "des": "每年总要吃几次蛋糕啊！"
        },
        {
            "id": "103704010",
            "name": "香烤鸡翅",
            "thumbnail": "http://i2.chuimg.com/a4a8e165867d4bf486a404a879db2e9a_1539w_1154h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90",
            "cookId": "120967814",
            "cookName": "博世家电",
            "stats": "11 做过",
            "dishScore": 9.3,
            "dishStuff": "猪肉,番茄,米饭,电饭锅",
            "img": {
                "img1": "http://img3.imgtn.bdimg.com/it/u=1199266336,1249216877&fm=26&gp=0.jpg",
                "img2": "http://img5.imgtn.bdimg.com/it/u=4079866678,4140148883&fm=26&gp=0.jpg",
                "img3": "http://img4.imgtn.bdimg.com/it/u=3938657738,1158814296&fm=26&gp=0.jpg"
            },
            "title": "#面包儿进行曲#",
            "des": "喜欢吃粗娘的孩纸 肿么可以不会做面包呢~~"
        },
        {
            "id": "102891301",
            "name": "平菇青椒炒鸡蛋 好吃又营养的超快手家常菜",
            "thumbnail": "http://i2.chuimg.com/a4a8e165867d4bf486a404a879db2e9a_1539w_1154h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90",
            "cookId": "122079365",
            "cookName": "千寻树",
            "stats": "252 做过",
            "dishScore": 9.3,
            "dishStuff": "猪肉,番茄,米饭,电饭锅",
            "img": {
                "img1": "http://img1.imgtn.bdimg.com/it/u=448197963,3166186660&fm=26&gp=0.jpg",
                "img2": "http://img0.imgtn.bdimg.com/it/u=1045795205,1202832319&fm=26&gp=0.jpg",
                "img3": "http://img4.imgtn.bdimg.com/it/u=2322918504,2630750078&fm=26&gp=0.jpg"
            },
            "title": "#花生家不定性早餐抽风日常#",
            "des": "我随行做，你随性看。"
        },
        {
            "id": "102295729",
            "name": "盘丝饼",
            "thumbnail": "http://i1.chuimg.com/4a30ea4e407311e7947d0242ac110002_720w_1280h.jpg@2o_50sh_1pr_1l_235w_138h_1c_1e_90q_1wh",
            "cookId": "101553997",
            "cookName": "食肆巷子",
            "stats": "845 做过",
            "dishScore": 9.3,
            "dishStuff": "猪肉,番茄,米饭,电饭锅",
            "img": {
                "img1": "http://img4.imgtn.bdimg.com/it/u=1273224689,2371206209&fm=26&gp=0.jpg",
                "img2": "http://img5.imgtn.bdimg.com/it/u=2201000048,2072581305&fm=26&gp=0.jpg",
                "img3": "http://img4.imgtn.bdimg.com/it/u=1237495859,500366279&fm=26&gp=0.jpg"
            },
            "title": "#春天的滋味#",
            "des": "从南到北，春天急急地赶路，到华北，已是稍纵即逝，"
        },
        {
            "id": "102202490",
            "name": "『1234糖醋排骨』",
            "thumbnail": "http://i2.chuimg.com/27591c3c296511e7bc9d0242ac110002_1324w_1984h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90",
            "cookId": "107144295",
            "cookName": "o橙小橙o",
            "stats": "179 做过",
            "dishScore": 9.3,
            "dishStuff": "猪肉,番茄,米饭,电饭锅",
            "img": {
                "img1": "http://img2.imgtn.bdimg.com/it/u=1289048170,2653536088&fm=26&gp=0.jpg",
                "img2": "http://img1.imgtn.bdimg.com/it/u=2095182176,586587647&fm=26&gp=0.jpg",
                "img3": "http://img1.imgtn.bdimg.com/it/u=3262616829,1270339376&fm=26&gp=0.jpg"
            },
            "title": "#时间知道#",
            "des": "是日，远远分享"
        },
        {
            "id": "102306288",
            "name": "饭店必点的干锅花菜，是这么做出来的。",
            "thumbnail": "http://i1.chuimg.com/0e8f9a644ab211e7947d0242ac110002_1000w_666h.jpg@2o_50sh_1pr_1l_235w_138h_1c_1e_90q_1wh",
            "cookId": "100351317",
            "cookName": "小美的美食",
            "stats": "314 做过",
            "dishScore": 9.3,
            "dishStuff": "猪肉,番茄,米饭,电饭锅",
            "img": {
                "img1": "https://f11.baidu.com/it/u=2412046451,2510446191&fm=72",
                "img2": "https://f10.baidu.com/it/u=1804859082,1915308051&fm=72",
                "img3": "http://img1.imgtn.bdimg.com/it/u=2740864456,3377969389&fm=26&gp=0.jpg"
            },
            "title": "#24小时流行作品#",
            "des": "每张照片都有自己的故事"
        },
        {
            "id": "100284081",
            "name": "荷兰宝贝 Dutch Baby",
            "thumbnail": "http://i2.chuimg.com/9d43282c885011e6a9a10242ac110002_1800w_1200h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90",
            "cookId": "10666666",
            "cookName": "阿May又改名儿了",
            "stats": "508 做过",
            "dishScore": 9.3,
            "dishStuff": "猪肉,番茄,米饭,电饭锅",
            "img": {
                "img1": "https://f11.baidu.com/it/u=2412046451,2510446191&fm=72",
                "img2": "https://f10.baidu.com/it/u=1804859082,1915308051&fm=72",
                "img3": "http://img1.imgtn.bdimg.com/it/u=2740864456,3377969389&fm=26&gp=0.jpg"
            },
            "title": "#24小时流行作品#",
            "des": "每张照片都有自己的故事"
        },
        {
            "id": "103708641",
            "name": "超级绵~奶白吐司",
            "thumbnail": "http://i2.chuimg.com/dfd1c610155b47ef8418eac4db333f43_1650w_1100h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90",
            "cookId": "10585157",
            "cookName": "啊呜511",
            "stats": "42 做过",
            "dishScore": 9.3,
            "img": {
                "img1": "https://f11.baidu.com/it/u=2412046451,2510446191&fm=72",
                "img2": "https://f10.baidu.com/it/u=1804859082,1915308051&fm=72",
                "img3": "http://img1.imgtn.bdimg.com/it/u=2740864456,3377969389&fm=26&gp=0.jpg"
            },
            "title": "#24小时流行作品#",
            "des": "每张照片都有自己的故事"
        },
        {
            "id": "100232976",
            "name": "《Tinrry下午茶》教你做芒果班戟和芒果千层饼",
            "thumbnail": "http://i2.chuimg.com/6d9419bc883f11e6b87c0242ac110003_578w_420h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90",
            "cookId": "10411331",
            "cookName": "Tinrry甜悦",
            "stats": "23160 做过",
            "dishScore": 9.3,
            "dishStuff": "猪肉,番茄,米饭,电饭锅",
            "img": {
                "img1": "https://f11.baidu.com/it/u=2412046451,2510446191&fm=72",
                "img2": "https://f10.baidu.com/it/u=1804859082,1915308051&fm=72",
                "img3": "http://img1.imgtn.bdimg.com/it/u=2740864456,3377969389&fm=26&gp=0.jpg"
            },
            "title": "#24小时流行作品#",
            "des": "每张照片都有自己的故事"
        },
        {
            "id": "103699409",
            "name": "蛋糕卷，肉松蛋糕卷，网红贝贝肉松卷",
            "thumbnail": "http://i2.chuimg.com/e58cfcce29f5471d88f62bc75686dc09_1280w_854h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90",
            "cookId": "126334531",
            "cookName": "美丽女神经",
            "stats": "91 做过",
            "dishScore": 9.3,
            "dishStuff": "猪肉,番茄,米饭,电饭锅",
            "img": {
                "img1": "https://f11.baidu.com/it/u=2412046451,2510446191&fm=72",
                "img2": "https://f10.baidu.com/it/u=1804859082,1915308051&fm=72",
                "img3": "http://img1.imgtn.bdimg.com/it/u=2740864456,3377969389&fm=26&gp=0.jpg"
            },
            "title": "#24小时流行作品#",
            "des": "每张照片都有自己的故事"
        },
        {
            "id": "102276846",
            "name": "自制肉松小贝",
            "thumbnail": "http://i2.chuimg.com/d8e9d0522f4311e7bc9d0242ac110002_1620w_1080h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90",
            "cookId": "105784662",
            "cookName": "糯米的厨房",
            "stats": "195 做过",
            "dishScore": 9.3,
            "dishStuff": "猪肉,番茄,米饭,电饭锅",
            "img": {
                "img1": "https://f11.baidu.com/it/u=2412046451,2510446191&fm=72",
                "img2": "https://f10.baidu.com/it/u=1804859082,1915308051&fm=72",
                "img3": "http://img1.imgtn.bdimg.com/it/u=2740864456,3377969389&fm=26&gp=0.jpg"
            },
            "title": "#24小时流行作品#",
            "des": "每张照片都有自己的故事"
        },
        {
            "id": "101814068",
            "name": "不回缩杯子蛋糕cupcake",
            "thumbnail": "http://i2.chuimg.com/74fab86c8afd11e6b87c0242ac110003_640w_643h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90",
            "cookId": "106652802",
            "cookName": "姜诗cc",
            "stats": "3666 做过",
            "dishScore": 9.3,
            "dishStuff": "猪肉,番茄,米饭,电饭锅",
            "img": {
                "img1": "https://f11.baidu.com/it/u=2412046451,2510446191&fm=72",
                "img2": "https://f10.baidu.com/it/u=1804859082,1915308051&fm=72",
                "img3": "http://img1.imgtn.bdimg.com/it/u=2740864456,3377969389&fm=26&gp=0.jpg"
            },
            "title": "#24小时流行作品#",
            "des": "每张照片都有自己的故事"
        },
        {
            "id": "102122269",
            "name": "【电饭锅】一只番茄饭 番茄拌饭",
            "thumbnail": "http://i1.chuimg.com/a9e101fa8b7311e6a9a10242ac110002_1968w_2624h.jpg@2o_50sh_1pr_1l_235w_138h_1c_1e_90q_1wh",
            "cookId": "112064570",
            "cookName": "李果然",
            "stats": "1806 做过",
            "dishScore": 9.3,
            "dishStuff": "猪肉,番茄,米饭,电饭锅",
            "img": {
                "img1": "https://f11.baidu.com/it/u=2412046451,2510446191&fm=72",
                "img2": "https://f10.baidu.com/it/u=1804859082,1915308051&fm=72",
                "img3": "http://img1.imgtn.bdimg.com/it/u=2740864456,3377969389&fm=26&gp=0.jpg"
            },
            "title": "#24小时流行作品#",
            "des": "每张照片都有自己的故事"
        },
        {
            "id": "103704010",
            "name": "香烤鸡翅",
            "thumbnail": "http://i1.chuimg.com/022d207fc8fa4d3d8c2e63d617045e15_6000w_4000h.jpg@2o_50sh_1pr_1l_235w_138h_1c_1e_90q_1wh",
            "cookId": "120967814",
            "cookName": "博世家电",
            "stats": "11 做过",
            "dishScore": 9.3,
            "dishStuff": "猪肉,番茄,米饭,电饭锅",
            "img": {
                "img1": "https://f11.baidu.com/it/u=2412046451,2510446191&fm=72",
                "img2": "https://f10.baidu.com/it/u=1804859082,1915308051&fm=72",
                "img3": "http://img1.imgtn.bdimg.com/it/u=2740864456,3377969389&fm=26&gp=0.jpg"
            },
            "title": "#24小时流行作品#",
            "des": "每张照片都有自己的故事"
        },
        {
            "id": "102891301",
            "name": "平菇青椒炒鸡蛋 好吃又营养的超快手家常菜",
            "thumbnail": "http://i1.chuimg.com/624264364e2541b2895f4cfc2c2b32d7_4288w_2848h.jpg@2o_50sh_1pr_1l_235w_138h_1c_1e_90q_1wh",
            "cookId": "122079365",
            "cookName": "千寻树",
            "stats": "252 做过",
            "dishScore": 9.3,
            "dishStuff": "猪肉,番茄,米饭,电饭锅",
            "img": {
                "img1": "https://f11.baidu.com/it/u=2412046451,2510446191&fm=72",
                "img2": "https://f10.baidu.com/it/u=1804859082,1915308051&fm=72",
                "img3": "http://img1.imgtn.bdimg.com/it/u=2740864456,3377969389&fm=26&gp=0.jpg"
            },
            "title": "#24小时流行作品#",
            "des": "每张照片都有自己的故事"
        },
        {
            "id": "102295729",
            "name": "盘丝饼",
            "thumbnail": "http://i1.chuimg.com/4a30ea4e407311e7947d0242ac110002_720w_1280h.jpg@2o_50sh_1pr_1l_235w_138h_1c_1e_90q_1wh",
            "cookId": "101553997",
            "cookName": "食肆巷子",
            "stats": "845 做过",
            "dishScore": 9.3,
            "dishStuff": "猪肉,番茄,米饭,电饭锅",
            "img": {
                "img1": "https://f11.baidu.com/it/u=2412046451,2510446191&fm=72",
                "img2": "https://f10.baidu.com/it/u=1804859082,1915308051&fm=72",
                "img3": "http://img1.imgtn.bdimg.com/it/u=2740864456,3377969389&fm=26&gp=0.jpg"
            },
            "title": "#24小时流行作品#",
            "des": "每张照片都有自己的故事"
        },
        {
            "id": "102202490",
            "name": "『1234糖醋排骨』",
            "thumbnail": "http://i2.chuimg.com/27591c3c296511e7bc9d0242ac110002_1324w_1984h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90",
            "cookId": "107144295",
            "cookName": "o橙小橙o",
            "stats": "179 做过",
            "dishScore": 9.3,
            "dishStuff": "猪肉,番茄,米饭,电饭锅",
            "img": {
                "img1": "https://f11.baidu.com/it/u=2412046451,2510446191&fm=72",
                "img2": "https://f10.baidu.com/it/u=1804859082,1915308051&fm=72",
                "img3": "http://img1.imgtn.bdimg.com/it/u=2740864456,3377969389&fm=26&gp=0.jpg"
            },
            "title": "#24小时流行作品#",
            "des": "每张照片都有自己的故事"
        },
        {
            "id": "102306288",
            "name": "饭店必点的干锅花菜，是这么做出来的。",
            "thumbnail": "http://i1.chuimg.com/0e8f9a644ab211e7947d0242ac110002_1000w_666h.jpg@2o_50sh_1pr_1l_235w_138h_1c_1e_90q_1wh",
            "cookId": "100351317",
            "cookName": "小美的美食",
            "stats": "314 做过",
            "dishScore": 9.3,
            "dishStuff": "猪肉,番茄,米饭,电饭锅",
            "img": {
                "img1": "https://f11.baidu.com/it/u=2412046451,2510446191&fm=72",
                "img2": "https://f10.baidu.com/it/u=1804859082,1915308051&fm=72",
                "img3": "http://img1.imgtn.bdimg.com/it/u=2740864456,3377969389&fm=26&gp=0.jpg"
            },
            "title": "#24小时流行作品#",
            "des": "每张照片都有自己的故事"
        },
        {
            "id": "100284081",
            "name": "荷兰宝贝 Dutch Baby",
            "thumbnail": "http://i2.chuimg.com/9d43282c885011e6a9a10242ac110002_1800w_1200h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90",
            "cookId": "10666666",
            "cookName": "阿May又改名儿了",
            "stats": "508 做过",
            "dishScore": 9.3,
            "dishStuff": "猪肉,番茄,米饭,电饭锅",
            "img": {
                "img1": "https://f11.baidu.com/it/u=2412046451,2510446191&fm=72",
                "img2": "https://f10.baidu.com/it/u=1804859082,1915308051&fm=72",
                "img3": "http://img1.imgtn.bdimg.com/it/u=2740864456,3377969389&fm=26&gp=0.jpg"
            },
            "title": "#24小时流行作品#",
            "des": "每张照片都有自己的故事"
        },
        {
            "id": "103708641",
            "name": "超级绵~奶白吐司",
            "thumbnail": "http://i2.chuimg.com/dfd1c610155b47ef8418eac4db333f43_1650w_1100h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90",
            "cookId": "10585157",
            "cookName": "啊呜511",
            "stats": "42 做过",
            "dishScore": 9.3,
            "dishStuff": "猪肉,番茄,米饭,电饭锅",
            "img": {
                "img1": "https://f11.baidu.com/it/u=2412046451,2510446191&fm=72",
                "img2": "https://f10.baidu.com/it/u=1804859082,1915308051&fm=72",
                "img3": "http://img1.imgtn.bdimg.com/it/u=2740864456,3377969389&fm=26&gp=0.jpg"
            },
            "title": "#24小时流行作品#",
            "des": "每张照片都有自己的故事"
        },
        {
            "id": "100232976",
            "name": "《Tinrry下午茶》教你做芒果班戟和芒果千层饼",
            "thumbnail": "http://i2.chuimg.com/6d9419bc883f11e6b87c0242ac110003_578w_420h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90",
            "cookId": "10411331",
            "cookName": "Tinrry甜悦",
            "stats": "23160 做过",
            "dishScore": 9.3,
            "dishStuff": "猪肉,番茄,米饭,电饭锅",
            "img": {
                "img1": "https://f11.baidu.com/it/u=2412046451,2510446191&fm=72",
                "img2": "https://f10.baidu.com/it/u=1804859082,1915308051&fm=72",
                "img3": "http://img1.imgtn.bdimg.com/it/u=2740864456,3377969389&fm=26&gp=0.jpg"
            },
            "title": "#24小时流行作品#",
            "des": "每张照片都有自己的故事"
        },
        {
            "id": "103699409",
            "name": "蛋糕卷，肉松蛋糕卷，网红贝贝肉松卷",
            "thumbnail": "http://i2.chuimg.com/e58cfcce29f5471d88f62bc75686dc09_1280w_854h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90",
            "cookId": "126334531",
            "cookName": "美丽女神经",
            "stats": "91 做过",
            "dishScore": 9.3,
            "dishStuff": "猪肉,番茄,米饭,电饭锅",
            "img": {
                "img1": "https://f11.baidu.com/it/u=2412046451,2510446191&fm=72",
                "img2": "https://f10.baidu.com/it/u=1804859082,1915308051&fm=72",
                "img3": "http://img1.imgtn.bdimg.com/it/u=2740864456,3377969389&fm=26&gp=0.jpg"
            },
            "title": "#24小时流行作品#",
            "des": "每张照片都有自己的故事"
        },
        {
            "id": "102276846",
            "name": "自制肉松小贝",
            "thumbnail": "http://i2.chuimg.com/d8e9d0522f4311e7bc9d0242ac110002_1620w_1080h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90",
            "cookId": "105784662",
            "cookName": "糯米的厨房",
            "stats": "195 做过",
            "dishScore": 9.3,
            "dishStuff": "猪肉,番茄,米饭,电饭锅",
            "img": {
                "img1": "https://f11.baidu.com/it/u=2412046451,2510446191&fm=72",
                "img2": "https://f10.baidu.com/it/u=1804859082,1915308051&fm=72",
                "img3": "http://img1.imgtn.bdimg.com/it/u=2740864456,3377969389&fm=26&gp=0.jpg"
            },
            "title": "#24小时流行作品#",
            "des": "每张照片都有自己的故事"
        },
        {
            "id": "101814068",
            "name": "不回缩杯子蛋糕cupcake",
            "thumbnail": "http://i2.chuimg.com/74fab86c8afd11e6b87c0242ac110003_640w_643h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90",
            "cookId": "106652802",
            "cookName": "姜诗cc",
            "stats": "3666 做过",
            "dishScore": 9.3,
            "dishStuff": "猪肉,番茄,米饭,电饭锅",
            "img": {
                "img1": "https://f11.baidu.com/it/u=2412046451,2510446191&fm=72",
                "img2": "https://f10.baidu.com/it/u=1804859082,1915308051&fm=72",
                "img3": "http://img1.imgtn.bdimg.com/it/u=2740864456,3377969389&fm=26&gp=0.jpg"
            },
            "title": "#24小时流行作品#",
            "des": "每张照片都有自己的故事"
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