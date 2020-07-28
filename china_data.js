        

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

        var subDataCNDestroyer = [
            {colorIndex: 0, value: 13000, label: "Type 055"}, 
            {colorIndex: 8, value: 90000, label: "Type 052D"}, 
            {colorIndex: 4, value: 42000, label: "Type 052C"},
            {colorIndex: 12, value: 14200, label: "Type 051C"}, 
            {colorIndex: 4, value: 13000, label: "Type 052B"},
            {colorIndex: 12, value: 6100, label: "Type 051B"}, 
            {colorIndex: 12, value: 33920, label: "Sovremenny Class"},
            {colorIndex: 12, value: 9600, label: "Type 052"},
        ];

       var subDataChina = [
            {colorIndex: 0, value: 283040, label: "Submarine(潜艇)"},
            {colorIndex: 6, value: 85500, label: "Corvette(护卫舰)"},           
            {colorIndex: 12, value: 294700, label: "Amphibious Warfare Ships(两栖作战舰)"}, 
            {colorIndex: 14, value: 137500, childData: subDataCNAC, label: "Aircraft Carrier(航空母舰)"},
            {colorIndex: 10, value: 162590, childData: subDataCNFrigate, label: "Frigate(驱护舰)"},
            {colorIndex: 8, value: 229320, childData: subDataCNDestroyer, label: "Destroyer(驱逐舰)"}, 
        ];
