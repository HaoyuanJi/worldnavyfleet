       var subDataUSNimitz = [
            {colorIndex: 0, value: 100000, label: "Nimitz"},
            {colorIndex: 3, value: 100000, label: "Eisenhower"}, 
            {colorIndex: 6, value: 100000, label: "Vinson"}, 
            {colorIndex: 9, value: 100000, label: "Roosevelt"}, 
            {colorIndex: 12, value: 100000, label: "Lincoln"},
            {colorIndex: 10, value: 100000, label: "Washington"},
            {colorIndex: 0, value: 100000, label: "Stennis"},
            {colorIndex: 3, value: 100000, label: "Truman"}, 
            {colorIndex: 6, value: 100000, label: "Reagan"}, 
            {colorIndex: 9, value: 100000, label: "Bush"}, 
        ];
      
        var subDataUSFord = [
            {colorIndex: 0, value: 1000000, label: "Gerald R. Ford"},
        ];
      
        var subDataUSAC = [
            {colorIndex: 0, value: 1000000, childData: subDataUSNimitz, label: "Nimitz Class"},
            {colorIndex: 8, value: 100000, childData: subDataUSFord, label: "Gerald R. Ford Class"}, 
        ];
      
        var subDataUSASMSeawolf = [
            {colorIndex: 0, value: 9138, label: "Seawolf"},
            {colorIndex: 6, value: 9138, label: "Connecticut"},
            {colorIndex: 14, value: 9138, label: "Jimmy Carter"},
        ];
      
        var subDataUSASMLA1 = [
            {colorIndex: 0, value: 6927, label: "Providence"},
            {colorIndex: 2, value: 6927, label: "Chicago"},
            {colorIndex: 4, value: 6927, label: "Key West"},
            {colorIndex: 6, value: 6927, label: "Oklahoma City"},
            {colorIndex: 8, value: 6927, label: "Helena"},
            {colorIndex: 10, value: 6927, label: "Newport News"},
            {colorIndex: 12, value: 6927, label: "San Juan"},
        ];
      
        var subDataUSASMLA2 = [
            {colorIndex: 0, value: 6927, label: "Pasadena"},
            {colorIndex: 2, value: 6927, label: "Albany"},
            {colorIndex: 4, value: 6927, label: "Topeka"},
            {colorIndex: 6, value: 6927, label: "Scranton"},
            {colorIndex: 8, value: 6927, label: "Alexandria"},
            {colorIndex: 10, value: 6927, label: "Asheville"},
            {colorIndex: 12, value: 6927, label: "Jefferson City"},
        ];
      
        var subDataUSASMLA3 = [
            {colorIndex: 0, value: 6927, label: "Annapolis"},
            {colorIndex: 2, value: 6927, label: "Springfield"},
            {colorIndex: 4, value: 6927, label: "Columbus"},
            {colorIndex: 6, value: 6927, label: "Santa Fe"},
            {colorIndex: 8, value: 6927, label: "Boise"},
            {colorIndex: 10, value: 6927, label: "Montpelier"},
            {colorIndex: 12, value: 6927, label: "Charlotte"},
        ];
      
        var subDataUSASMLA4 = [
            {colorIndex: 0, value: 6927, label: "Hampton"},
            {colorIndex: 2, value: 6927, label: "Hartford"},
            {colorIndex: 4, value: 6927, label: "Toledo"},
            {colorIndex: 6, value: 6927, label: "Tucson"},
            {colorIndex: 8, value: 6927, label: "Columbia"},
            {colorIndex: 10, value: 6927, label: "Greeneville"},
            {colorIndex: 12, value: 6927, label: "Cheyenne"},
        ];
      
        var subDataUSASMLA = [
            {colorIndex: 6, value: 48489, childData: subDataUSASMLA1, label: "SSN719/721/722/723/725/750/751"},
            {colorIndex: 2, value: 48489, childData: subDataUSASMLA2, label: "SSN752/753/754/756/767/758/759"},           
            {colorIndex: 10, value: 48489, childData: subDataUSASMLA3, label: "SSN760~766"}, 
            {colorIndex: 13, value: 48489, childData: subDataUSASMLA4, label: "SSN767~773"}, 
        ];
      
        var subDataUSASMVA1 = [
            {colorIndex: 6, value: 7900, label: "Virginia"},
            {colorIndex: 2, value: 7900, label: "Texas"},           
            {colorIndex: 10, value: 7900, label: "Hawaii"}, 
            {colorIndex: 0, value: 7900, label: "North Carolina"},
            {colorIndex: 5, value: 7900, label: "New Hampshire"},           
            {colorIndex: 14, value: 7900, label: "New Mexico"}, 
        ];
      
        var subDataUSASMVA2 = [
            {colorIndex: 6, value: 7900, label: "Missouri"},
            {colorIndex: 2, value: 7900, label: "California"},           
            {colorIndex: 10, value: 7900, label: "Mississippi"}, 
            {colorIndex: 0, value: 7900, label: "Minnesota"},
            {colorIndex: 5, value: 7900, label: "North Dakota"},           
            {colorIndex: 14, value: 7900, label: "John Warner"},         
        ];
      
       var subDataUSASMVA3 = [
            {colorIndex: 6, value: 7900, label: "Illinois"},
            {colorIndex: 2, value: 7900, label: "Washington"},           
            {colorIndex: 10, value: 7900, label: "Colorado"}, 
            {colorIndex: 0, value: 7900, label: "Indiana"},
            {colorIndex: 5, value: 7900, label: "South Dakota"},           
            {colorIndex: 14, value: 7900, label: "Delaware"}, 
            {colorIndex: 3, value: 7900, label: "Vermont"}, 
       ];
      
        var subDataUSASMVA = [
            {colorIndex: 6, value: 47400, childData: subDataUSASMVA1, label: "SSN774~779"},
            {colorIndex: 2, value: 47400, childData: subDataUSASMVA2, label: "SSN780~785"},           
            {colorIndex: 10, value: 55300, childData: subDataUSASMVA3, label: "SSN786~792"}, 
        ];
        
        var subDataUSASM = [
            {colorIndex: 6, value: 27414, childData: subDataUSASMSeawolf, label: "Seawolf Class"},
            {colorIndex: 2, value: 193956, childData: subDataUSASMLA, label: "Los Angeles Class"},           
            {colorIndex: 10, value: 150100, childData: subDataUSASMVA, label: "Virginia Class"}, 
        ];
      
        var subDataUSGMSOH1 = [
            {colorIndex: 6, value: 18750, label: "Ohio"},
            {colorIndex: 2, value: 18750, label: "Michigan"},           
            {colorIndex: 10, value: 18750, label: "Florida"}, 
            {colorIndex: 14, value: 18750, label: "Georgia"},
        ];
      
        var subDataUSGMS = [
            {colorIndex: 3, value: 75000, childData: subDataUSGMSOH1, label: "Ohio Class"},
        ];
      
        var subDataUSGMSOH2 = [
            {colorIndex: 6, value: 18750, label: "Jackson"},
            {colorIndex: 2, value: 18750, label: "Alabama"},           
            {colorIndex: 10, value: 18750, label: "Alaska"}, 
            {colorIndex: 0, value: 18750, label: "Nevada"},
            {colorIndex: 5, value: 18750, label: "Tennessee"},
            {colorIndex: 14, value: 18750, label: "Pennsylvania"},
            {colorIndex: 8, value: 18750, label: "West Virginia"},
        ];
      
        var subDataUSGMSOH3 = [
            {colorIndex: 6, value: 18750, label: "Kentucky"},
            {colorIndex: 2, value: 18750, label: "Maryland"},           
            {colorIndex: 10, value: 18750, label: "Nebraska"}, 
            {colorIndex: 0, value: 18750, label: "Rhode Island"},
            {colorIndex: 5, value: 18750, label: "Maine"},
            {colorIndex: 14, value: 18750, label: "Wyoming"},
            {colorIndex: 8, value: 18750, label: "Louisiana"},
        ];
      
        var subDataUSBMS = [
            {colorIndex: 3, value: 131250, childData: subDataUSGMSOH2, label: "SSBN730~736"},
            {colorIndex: 10, value: 131250, childData: subDataUSGMSOH3, label: "SSBN737~743"},
        ];

        var subDataUSBMS0 = [
            {colorIndex: 3, value: 262500, childData: subDataUSBMS, label: "Ohio Class"},
        ];
      
        var subDataUSSM = [
            {colorIndex: 2, value: 262500, childData: subDataUSBMS0, label: "Ballistic Missile Submarine"},          
            {colorIndex: 10, value: 371400, childData: subDataUSASM, label: "Attack Submarine"}, 
            {colorIndex: 6, value: 75000, childData: subDataUSGMS, label: "Guided Missile Submarine"}
        ];
      
        var subDataUSLCS1 = [
            {colorIndex: 0, value: 3104, label: "Independence"},
            {colorIndex: 3, value: 3104, label: "Coronado"}, 
            {colorIndex: 6, value: 3104, label: "Jackson"}, 
            {colorIndex: 9, value: 3104, label: "Montgomery"}, 
            {colorIndex: 12, value: 3104, label: "Gabrielle Giffords"},
            {colorIndex: 10, value: 3104, label: "Omaha"},
            {colorIndex: 0, value: 3104, label: "Manchester"},
            {colorIndex: 3, value: 3104, label: "Tulsa"}, 
            {colorIndex: 6, value: 3104, label: "Charleston"}, 
            {colorIndex: 9, value: 3104, label: "Cincinnati"}, 
            {colorIndex: 2, value: 3104, label: "Kansas City"}, 
        ];
      
        var subDataUSLCS2 = [
            {colorIndex: 0, value: 3500, label: "Freedom"},
            {colorIndex: 3, value: 3500, label: "Fort Worth"}, 
            {colorIndex: 6, value: 3500, label: "Milwaukee"}, 
            {colorIndex: 9, value: 3500, label: "Detroit"}, 
            {colorIndex: 12, value: 3500, label: "Little Rock"},
            {colorIndex: 10, value: 3500, label: "Sioux City"},
            {colorIndex: 0, value: 3500, label: "Wichita"},
            {colorIndex: 3, value: 3500, label: "Billings"}, 
            {colorIndex: 6, value: 3500, label: "Indianapolis"}, 
        ];

        var subDataUSLCS = [
            {colorIndex: 2, value: 34144, childData: subDataUSLCS1, label: "Independence Class"},          
            {colorIndex: 6, value: 31500, childData: subDataUSLCS2, label: "Freedom Class"}
        ];
      
        var subDataUSWasp = [
            {colorIndex: 0, value: 41150, label: "Wasp"},
            {colorIndex: 3, value: 41150, label: "Essex"}, 
            {colorIndex: 6, value: 41150, label: "Kearsarge"}, 
            {colorIndex: 9, value: 41150, label: "Boxer"}, 
            {colorIndex: 12, value: 41150, label: "Bataan"},
            {colorIndex: 10, value: 41150, label: "Bonhomme Richard"},
            {colorIndex: 0, value: 41150, label: "Iwo Jima"},
            {colorIndex: 6, value: 41150, label: "Makin Island"}, 
        ];
      
        var subDataUSAm = [
            {colorIndex: 0, value: 45693, label: "America"},
            {colorIndex: 10, value: 45693, label: "Tripoli"}, 
        ];
      
        var subDataUSSa = [
            {colorIndex: 0, value: 25300, label: "San Antonio"},
            {colorIndex: 3, value: 25300, label: "New Orleans"}, 
            {colorIndex: 6, value: 25300, label: "Mesa Verde"}, 
            {colorIndex: 9, value: 25300, label: "New York"}, 
            {colorIndex: 12, value: 25300, label: "San Diego"},
            {colorIndex: 10, value: 25300, label: "Anchorage"},
            {colorIndex: 0, value: 25300, label: "Arlington"},
            {colorIndex: 1, value: 25300, label: "Somerset"}, 
            {colorIndex: 8, value: 25300, label: "Murtha"},
            {colorIndex: 2, value: 25300, label: "Portland"},
        ];
      
        var subDataUSWi = [
            {colorIndex: 0, value: 16100, label: "Whidbey Island"},
            {colorIndex: 3, value: 16100, label: "Germantown"}, 
            {colorIndex: 6, value: 16100, label: "Fort McHenry"}, 
            {colorIndex: 9, value: 16100, label: "Gunston Hall"}, 
            {colorIndex: 12, value: 16100, label: "Comstock"},
            {colorIndex: 10, value: 16100, label: "Tortuga"},
            {colorIndex: 0, value: 16100, label: "Rushmore"},
            {colorIndex: 1, value: 16100, label: "Ashland"}, 
        ];
      
         var subDataUSHf = [
            {colorIndex: 0, value: 15939, label: "Harpers Ferry"},
            {colorIndex: 3, value: 15939, label: "Carter Hall"}, 
            {colorIndex: 6, value: 15939, label: "Oak Hill"}, 
            {colorIndex: 9, value: 15939, label: "Pearl Harbor"}, 
        ];
      
        var subDataUSBr = [
            {colorIndex: 0, value: 19609, label: "Blue Ridge"},
            {colorIndex: 9, value: 19609, label: "Mount Whitney"},  
        ];
      
        var subDataUSAWS = [
            {colorIndex: 2, value: 329200, childData: subDataUSWasp, label: "Wasp Class"},                    
            {colorIndex: 9, value: 278300, childData: subDataUSSa, label: "San Antonio Class"}, 
            {colorIndex: 6, value: 91386, childData: subDataUSAm, label: "America Class"}, 
            {colorIndex: 12, value: 128800, childData: subDataUSWi, label: "Whidbey Island Class"},
            {colorIndex: 10, value: 63756, childData: subDataUSHf, label: "Harpers Ferry Class"},
            {colorIndex: 8, value: 39218, childData: subDataUSBr, label: "Blue Ridge Class"},
        ];
      
        var subDataUSCrT1 = [
            {colorIndex: 2, value: 9600, label: "Bunker Hill"},                    
            {colorIndex: 9, value: 9600, label: "Mobile Bay"}, 
            {colorIndex: 6, value: 9600, label: "Antietam"}, 
            {colorIndex: 12, value: 9600, label: "Leyte Gulf"},
            {colorIndex: 10, value: 9600, label: "San Jacinto"},
            {colorIndex: 8, value: 9600, label: "Lake Champlain"},
            {colorIndex: 14, value: 9600, label: "Philippine Sea"},
        ];
      
       var subDataUSCrT2 = [
            {colorIndex: 2, value: 9600, label: "Princeton"},                    
            {colorIndex: 9, value: 9600, label: "Normandy"}, 
            {colorIndex: 6, value: 9600, label: "Monterey"}, 
            {colorIndex: 12, value: 9600, label: "Chancellorsville"},
            {colorIndex: 10, value: 9600, label: "Cowpens"},
            {colorIndex: 8, value: 9600, label: "Gettysburg"},
            {colorIndex: 14, value: 9600, label: "Chosin"},
        ];
      
        var subDataUSCrT3 = [
            {colorIndex: 2, value: 9600, label: "Hue City"},                    
            {colorIndex: 9, value: 9600, label: "Shiloh"}, 
            {colorIndex: 6, value: 9600, label: "Anzio"}, 
            {colorIndex: 12, value: 9600, label: "Vicksburg"},
            {colorIndex: 10, value: 9600, label: "Lake Erie"},
            {colorIndex: 8, value: 9600, label: "Cape St. George"},
            {colorIndex: 14, value: 9600, label: "Vella Gulf"},
            {colorIndex: 4, value: 9600, label: "Port Royal"},
        ];
      
        var subDataUSCrT = [
            {colorIndex: 2, value: 67200, childData: subDataUSCrT1, label: "CG52~58"}, 
            {colorIndex: 6, value: 67200, childData: subDataUSCrT2, label: "CG59~65"},
            {colorIndex: 10, value: 76800, childData: subDataUSCrT3, label: "CG66~73"},
        ];
      
        var subDataUSCr = [
            {colorIndex: 2, value: 211200, childData: subDataUSCrT, label: "Ticonderoga Class"},          
        ];
      
        var subDataUSDe11 = [
            {colorIndex: 2, value: 8184, label: "Arleigh Burke"},                    
            {colorIndex: 9, value: 8184, label: "Barry"}, 
            {colorIndex: 6, value: 8184, label: "Jones"}, 
            {colorIndex: 12, value: 8184, label: "Curtis Wilbur"},
            {colorIndex: 10, value: 8184, label: "Stout"},
        ];
      
        var subDataUSDe12 = [
            {colorIndex: 2, value: 8184, label: "McCain"},                    
            {colorIndex: 9, value: 8184, label: "Mitscher"}, 
            {colorIndex: 6, value: 8184, label: "Laboon"}, 
            {colorIndex: 12, value: 8184, label: "Russell"},
            {colorIndex: 10, value: 8184, label: "Paul Hamilton"},
        ];
      
        var subDataUSDe13 = [
            {colorIndex: 2, value: 8184, label: "Ramage"},                    
            {colorIndex: 9, value: 8184, label: "Fitzgerald"}, 
            {colorIndex: 6, value: 8184, label: "Stethem"}, 
            {colorIndex: 12, value: 8184, label: "Carney"},
            {colorIndex: 10, value: 8184, label: "Benfold"},
        ];
      
        var subDataUSDe14 = [
            {colorIndex: 2, value: 8184, label: "Gonzalez"},                    
            {colorIndex: 9, value: 8184, label: "Cole"}, 
            {colorIndex: 6, value: 8184, label: "The Sullivans"}, 
            {colorIndex: 12, value: 8184, label: "Milius"},
            {colorIndex: 10, value: 8184, label: "Hopper"},
            {colorIndex: 5, value: 8184, label: "Ross"},
        ];
      
        var subDataUSDe1 = [
            {colorIndex: 2, value: 40920, childData: subDataUSDe11, label: "DDG51~55"}, 
            {colorIndex: 6, value: 40920, childData: subDataUSDe12, label: "DDG56~60"},
            {colorIndex: 10, value: 40920, childData: subDataUSDe13, label: "DDG61~65"},
            {colorIndex: 14, value: 49104, childData: subDataUSDe14, label: "DDG66~71"},
        ];
      
        var subDataUSDe2 = [
            {colorIndex: 0, value: 8300, label: "Mahan"}, 
            {colorIndex: 3, value: 8300, label: "Decatur"},
            {colorIndex: 6, value: 8300, label: "McFaul"},
            {colorIndex: 9, value: 8300, label: "Donald Cook"},
            {colorIndex: 12, value: 8300, label: "Higgins"},
            {colorIndex: 14, value: 8300, label: "O'Kane"},
            {colorIndex: 4, value: 8300, label: "Porter"},
        ];

        var subDataUSDe211 = [
            {colorIndex: 0, value: 9300, label: "Austin"}, 
            {colorIndex: 3, value: 9300, label: "Roosevelt"},
            {colorIndex: 6, value: 9300, label: "Churchill"},
            {colorIndex: 9, value: 9300, label: "Lassen"},
            {colorIndex: 12, value: 9300, label: "Howard"},
            {colorIndex: 14, value: 9300, label: "Bulkeley"},
            {colorIndex: 4, value: 9300, label: "McCampbell"},
        ];

        var subDataUSDe212 = [
            {colorIndex: 0, value: 9300, label: "Shoup"}, 
            {colorIndex: 3, value: 9300, label: "Mason"},
            {colorIndex: 6, value: 9300, label: "Preble"},
            {colorIndex: 9, value: 9300, label: "Mustin"},
            {colorIndex: 12, value: 9300, label: "Chafee"},
            {colorIndex: 14, value: 9300, label: "Pinckney"},
            {colorIndex: 4, value: 9300, label: "Momsen"},
        ];

        var subDataUSDe213 = [
            {colorIndex: 0, value: 9300, label: "Chung-Hoon"}, 
            {colorIndex: 3, value: 9300, label: "Nitze"},
            {colorIndex: 6, value: 9300, label: "James E. Williams"},
            {colorIndex: 9, value: 9300, label: "Bainbridge"},
            {colorIndex: 12, value: 9300, label: "Halsey"},
            {colorIndex: 14, value: 9300, label: "Forrest Sherman"},
            {colorIndex: 4, value: 9300, label: "Farragut"},
        ];

        var subDataUSDe214 = [
            {colorIndex: 0, value: 9300, label: "Kidd"}, 
            {colorIndex: 3, value: 9300, label: "Gridley"},
            {colorIndex: 6, value: 9300, label: "Sampson"},
            {colorIndex: 9, value: 9300, label: "Truxtun"},
            {colorIndex: 12, value: 9300, label: "Sterett"},
            {colorIndex: 14, value: 9300, label: "Dewey"},
            {colorIndex: 4, value: 9300, label: "Stockdale"},
        ];

        var subDataUSDe215 = [
            {colorIndex: 0, value: 9300, label: "Gravely"}, 
            {colorIndex: 3, value: 9300, label: "Meyer"},
            {colorIndex: 6, value: 9300, label: "Dunham"},
            {colorIndex: 9, value: 9300, label: "Lawrence"},
            {colorIndex: 12, value: 9300, label: "Spruance"},
            {colorIndex: 14, value: 9300, label: "Murphy"},
            {colorIndex: 4, value: 9300, label: "Finn"},
        ];

        var subDataUSDe216 = [
            {colorIndex: 0, value: 9300, label: "Johnson"}, 
            {colorIndex: 3, value: 9300, label: "Peralta"},
            {colorIndex: 6, value: 9300, label: "Hudner"},
            {colorIndex: 9, value: 9300, label: "Ignatius"},
        ];
      
        var subDataUSDe21 = [
            {colorIndex: 2, value: 65100, childData: subDataUSDe211, label: "DDG79~85"}, 
            {colorIndex: 6, value: 65100, childData: subDataUSDe212, label: "DDG86~92"},
            {colorIndex: 10, value: 65100, childData: subDataUSDe213, label: "DDG93~99"},
            {colorIndex: 14, value: 65100, childData: subDataUSDe214, label: "DDG100~106"},
            {colorIndex: 8, value: 65100, childData: subDataUSDe215, label: "DDG107~113"},
            {colorIndex: 5, value: 37200, childData: subDataUSDe216, label: "DDG114~117"},
        ];
      
        var subDataUSDeZ = [
            {colorIndex: 2, value: 15995, label: "Zumwalt"}, 
            {colorIndex: 5, value: 15995, label: "Michael Monsoor"},
        ];
      
        var subDataUSDe = [
            {colorIndex: 2, value: 171864, childData: subDataUSDe1, label: "Arleigh Burke Flight I"}, 
            {colorIndex: 6, value: 58100, childData: subDataUSDe2, label: "Arleigh Burke Flight II"},
            {colorIndex: 10, value: 362700, childData: subDataUSDe21, label: "Arleigh Burke Flight IIA"},
            {colorIndex: 14, value: 31990, childData: subDataUSDeZ, label: "Zumwalt Class"},
        ];

        var subDataUS = [
            {colorIndex: 0, value: 371470, childData: subDataUSSM, label: "Submarine"},
            {colorIndex: 6, value: 65644, childData: subDataUSLCS, label: "Littoral combat ship"},           
            {colorIndex: 12, value: 930660, childData: subDataUSAWS, label: "Amphibious Warfare Ships"}, 
            {colorIndex: 14, value: 1100000, childData: subDataUSAC, label: "Aircraft Carrier"},
            {colorIndex: 10, value: 211200, childData: subDataUSCr, label: "Cruiser"},
            {colorIndex: 8, value: 624654, childData: subDataUSDe, label: "Destroyer"}, 
        ];
