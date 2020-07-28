        

        var subDataChinaAC1 = [
            {colorIndex: 2, value: 67500, label: "Liaoning(辽宁)"},
        ];


        var subDataChinaAC2 = [
            {colorIndex: 4, value: 70000, label: "Shandong(山东)"},
        ];

        var subDataCNAC = [
            {colorIndex: 0, value: 67500, childData: subDataChinaAC1, label: "Type 001"},
            {colorIndex: 8, value: 70000, childData: subDataChinaAC2, label: "Type 002"}, 
        ];

        var subDataCNFrigate541_a = [
            {colorIndex: 0, value: 67500, label: "Zhoushan(舟山)"},
            {colorIndex: 8, value: 70000, label: "Xuzhou(徐州)"}, 
            {colorIndex: 12, value: 67500, label: "Hengyang(衡阳)"},
            {colorIndex: 14, value: 70000, label: "Huangshan(黄山)"}, 
        ];

        var subDataCNFrigate541_b = [
            {colorIndex: 0, value: 67500, label: "Yulin(玉林)"},
            {colorIndex: 13, value: 70000, label: "Yuncheng(运城)"}, 
            {colorIndex: 3, value: 67500, label: "Yiyang(益阳)"},
            {colorIndex: 4, value: 70000, label: "Changzhou(常州)"}, 
            {colorIndex: 5, value: 70000, label: "Yantai(烟台)"}, 
            {colorIndex: 6, value: 70000, label: "yancheng(盐城)"}, 
            {colorIndex: 7, value: 70000, label: "Hengshui(衡水)"},
            {colorIndex: 8, value: 70000, label: "Liuzhou(柳州)"},
            {colorIndex: 9, value: 70000, label: "Linyi(临沂)"},
            {colorIndex: 10, value: 70000, label: "Weifang(潍坊)"},
            {colorIndex: 11, value: 70000, label: "Sanya(三亚)"},
            {colorIndex: 12, value: 70000, label: "Yueyang(岳阳)"},
        ];

        var subDataCNFrigate541_c = [
            {colorIndex: 0, value: 67500, label: "Daqing(大庆)"},
            {colorIndex: 13, value: 70000, label: "Huanggang(黄冈)"}, 
            {colorIndex: 3, value: 67500, label: "Yangzhou(扬州)"},
            {colorIndex: 4, value: 70000, label: "Handan(邯郸)"}, 
            {colorIndex: 5, value: 70000, label: "Xiangtan(湘潭)"}, 
            {colorIndex: 6, value: 70000, label: "Jingzhou(荆州)"}, 
            {colorIndex: 7, value: 70000, label: "Binzhou(滨州)"},
            {colorIndex: 8, value: 70000, label: "Xuchang(许昌)"},
            {colorIndex: 9, value: 70000, label: "Wuhu(芜湖)"},
            {colorIndex: 10, value: 70000, label: "Rizhao(日照)"},
        ];

        var subDataCNFrigate541_d = [
            {colorIndex: 0, value: 67500, label: "Anyang(安阳)"},
            {colorIndex: 8, value: 70000, label: "Xianning(咸宁)"}, 
            {colorIndex: 12, value: 67500, label: "Nantong(南通)"},
            {colorIndex: 14, value: 70000, label: "Zaozhuang(枣庄)"}, 
        ];

        var subDataCNFrigate541 = [
            {colorIndex: 0, value: 20265, childData: subDataCNFrigate541_a, label: "Batch I"},
            {colorIndex: 3, value: 20265, childData: subDataCNFrigate541_b, label: "Batch II"}, 
            {colorIndex: 6, value: 20265, childData: subDataCNFrigate541_c, label: "Batch III"}, 
            {colorIndex: 9, value: 20265, childData: subDataCNFrigate541_d, label: "Batch IV"}, 
        ];

        var subDataCNFrigate54 = [
            {colorIndex: 0, value: 3900, label: "Ma'anshan(马鞍山)"},
            {colorIndex: 3, value: 3900, label: "Wenzhou(温州)"}, 
        ];

        var subDataCNFrigate533 = [
            {colorIndex: 0, value: 2400, label: "Jiaxing(嘉兴)"},
            {colorIndex: 13, value: 2400, label: "Sanming(三明)"}, 
            {colorIndex: 3, value: 2400, label: "Yichang(宜昌)"},
            {colorIndex: 4, value: 2400, label: "Huludao(葫芦岛)"}, 
            {colorIndex: 5, value: 2400, label: "Huaihua(怀化)"}, 
            {colorIndex: 6, value: 2400, label: "Xiangyang(襄阳)"}, 
            {colorIndex: 7, value: 2400, label: "Luoyang(洛阳)"},
            {colorIndex: 8, value: 2400, label: "Mianyang(绵阳)"},
        ];

        var subDataCNFrigate531 = [
            {colorIndex: 0, value: 2000, label: "Dandong(丹东)"},
            {colorIndex: 13, value: 2000, label: "Shaoguan(韶关)"}, 
            {colorIndex: 3, value: 2000, label: "Zhaotong(昭通)"},
            {colorIndex: 4, value: 2000, label: "Beihai(北海)"}, 
            {colorIndex: 5, value: 2000, label: "Foshan(佛山)"}, 
            {colorIndex: 6, value: 2000, label: "Jiangmen(江门)"}, 
            {colorIndex: 7, value: 2000, label: "Zhaoqing(肇庆)"},
        ];

        var subDataCNFrigate = [
            {colorIndex: 0, value: 121590, childData: subDataCNFrigate541, label: "Type 054A"}, 
            {colorIndex: 8, value: 19200, childData: subDataCNFrigate533, label: "Type 053H3"}, 
            {colorIndex: 4, value: 7800, childData: subDataCNFrigate54, label: "Type 054"},
            {colorIndex: 12, value: 14000, childData: subDataCNFrigate531, label: "Type 053H1/G"}, 
        ];

        var subDataCNDe055 = [
            {colorIndex: 0, value: 13000, label: "Nanchang(南昌)"}, 
        ];

        var subDataCNDe052_c = [
            {colorIndex: 0, value: 7000, label: "Lanzhou(兰州)"},
            {colorIndex: 3, value: 7000, label: "Haikou(海口)"}, 
            {colorIndex: 5, value: 7000, label: "Changchun(长春)"}, 
            {colorIndex: 7, value: 7000, label: "Zhengzhou(郑州)"}, 
            {colorIndex: 9, value: 7000, label: "Jinan(济南)"}, 
            {colorIndex: 11, value: 7000, label: "Xi'an(西安)"}, 
        ];

        var subDataCNDe052_d1 = [
            {colorIndex: 0, value: 7500, label: "Kunming(昆明)"},
            {colorIndex: 3, value: 7500, label: "Changsha(长沙)"}, 
            {colorIndex: 6, value: 7500, label: "Hefei(合肥)"}, 
            {colorIndex: 9, value: 7500, label: "Yinchuang(银川)"},
            {colorIndex: 12, value: 7500, label: "Xining(西宁)"}, 
            {colorIndex: 14, value: 7500, label: "Xiamen(厦门)"}, 
            {colorIndex: 5, value: 7500, label: "Urumqi(乌鲁木齐)"},
            {colorIndex: 8, value: 7500, label: "Guiyang(贵阳)"},                 
        ];

        var subDataCNDe052_d2 = [
            {colorIndex: 0, value: 7500, label: "Nanjing(南京)"},
            {colorIndex: 5, value: 7500, label: "Taiyuan(太原)"}, 
            {colorIndex: 10, value: 7500, label: "Hohhot(呼和浩特)"}, 
            {colorIndex: 14, value: 7500, label: "Chengdu(成都)"},
        ];

        var subDataCNDe052_d3 = [
            {colorIndex: 0, value: 7500, label: "Zibo(淄博)"},
        ];

        var subDataCNDe052_d = [
            {colorIndex: 0, value: 60000, childData: subDataCNDe052_d1, label: "Batch I"},
            {colorIndex: 5, value: 30000, childData: subDataCNDe052_d2, label: "Batch II"}, 
            {colorIndex: 10, value: 7500, childData: subDataCNDe052_d3, label: "Batch III"}, 
        ];

        var subDataCNDeSov = [
            {colorIndex: 0, value: 8480, label: "Hangzhou(杭州)"},
            {colorIndex: 5, value: 8480, label: "Fuzhou(福州)"}, 
            {colorIndex: 10, value: 8480, label: "Taizhou(泰州)"}, 
            {colorIndex: 14, value: 8480, label: "Ningbo(宁波)"}, 
        ];

        var subDataCNDe052 = [
            {colorIndex: 0, value: 4800, label: "Harbin(哈尔滨)"},
            {colorIndex: 5, value: 4800, label: "Qingdao(青岛)"}, 
        ];

        var subDataCNDe051_b = [
            {colorIndex: 0, value: 6100, label: "Shenzhen(深圳)"},
        ];

        var subDataCNDe052_b = [
            {colorIndex: 0, value: 6500, label: "Guangzhou(广州)"},
            {colorIndex: 5, value: 6500, label: "Wuhan(武汉)"}, 
        ];

        var subDataCNDe051_c = [
            {colorIndex: 0, value: 7100, label: "Shenyang(沈阳)"},
            {colorIndex: 5, value: 7100, label: "Shijiazhuang(石家庄)"}, 
        ];

        var subDataCNDestroyer = [
            {colorIndex: 0, value: 13000, childData: subDataCNDe055, label: "Type 055"},             
            {colorIndex: 6, value: 42000, childData: subDataCNDe052_c, label: "Type 052C"},
            {colorIndex: 8, value: 14200, childData: subDataCNDe051_c, label: "Type 051C"},          
            {colorIndex: 2, value: 6100, childData: subDataCNDe051_b, label: "Type 051B"}, 
            {colorIndex: 3, value: 97500, childData: subDataCNDe052_d, label: "Type 052D"},
            {colorIndex: 10, value: 13000, childData: subDataCNDe052_b, label: "Type 052B"},
            {colorIndex: 14, value: 33920, childData: subDataCNDeSov, label: "Sovremenny Class"},
            {colorIndex: 5, value: 9600, childData: subDataCNDe052, label: "Type 052"},
        ];

       var subDataChina = [
            {colorIndex: 0, value: 283040, label: "Submarine(潜艇)"},
            {colorIndex: 6, value: 85500, label: "Corvette(护卫舰)"},           
            {colorIndex: 12, value: 294700, label: "Amphibious Warfare Ships(两栖作战舰)"}, 
            {colorIndex: 14, value: 137500, childData: subDataCNAC, label: "Aircraft Carrier(航空母舰)"},
            {colorIndex: 10, value: 162590, childData: subDataCNFrigate, label: "Frigate(驱护舰)"},
            {colorIndex: 8, value: 229320, childData: subDataCNDestroyer, label: "Destroyer(驱逐舰)"}, 
        ];
