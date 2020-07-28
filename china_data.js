        

        var subDataChinaAC1 = [
            {colorIndex: 2, value: 67500, label: "Liaoning"},
        ];


        var subDataChinaAC2 = [
            {colorIndex: 4, value: 70000, label: "Shandong"},
        ];

        var subDataUSAC = [
            {colorIndex: 0, value: 67500, childData: subDataChinaAC1, label: "Type 001"},
            {colorIndex: 8, value: 70000, childData: subDataChinaAC2, label: "Type 002"}, 
        ];

       var subDataChina = [
            {colorIndex: 0, value: 283040, label: "Submarine"},
            {colorIndex: 6, value: 85500, label: "Corvette"},           
            {colorIndex: 12, value: 294700, label: "Amphibious Warfare Ships"}, 
            {colorIndex: 14, value: 137500, childData: subDataCNAC, label: "Aircraft Carrier"},
            {colorIndex: 10, value: 166590, label: "Frigate"},
            {colorIndex: 8, value: 229320, label: "Destroyer"}, 
        ];
