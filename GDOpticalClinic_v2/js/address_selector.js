document.addEventListener('DOMContentLoaded', function() {
    loadRegions();
    document.getElementById('region').addEventListener('change', loadProvinces);
    document.getElementById('province').addEventListener('change', loadCities);
    document.getElementById('city').addEventListener('change', loadBarangays);
});

function loadRegions() {
    const regions = [
        { id: 1, name: 'Region I – Ilocos Region' },
        { id: 2, name: 'Region II – Cagayan Valley' },
        { id: 3, name: 'Region III – Central Luzon' },
        { id: 4, name: 'Region IV-A – CALABARZON' },
        { id: 5, name: 'MIMAROPA Region' },
        { id: 6, name: 'Region V – Bicol Region' },
        { id: 7, name: 'Region VI – Western Visayas' },
        { id: 8, name: 'Region VII – Central Visayas' },
        { id: 9, name: 'Region VIII – Eastern Visayas' },
        { id: 10, name: 'Region IX – Zamboanga Peninsula' },
        { id: 11, name: 'Region X – Northern Mindanao' },
        { id: 12, name: 'Region XI – Davao Region' },
        { id: 13, name: 'Region XII – SOCCSKSARGEN' },
        { id: 14, name: 'Region XIII – Caraga' },
        { id: 15, name: 'NCR – National Capital Region' },
        { id: 16, name: 'CAR – Cordillera Administrative Region' },
        { id: 17, name: 'BARMM – Bangsamoro Autonomous Region in Muslim Mindanao' }
    ];

    let regionSelect = document.getElementById('region');
    regionSelect.innerHTML = '<option value="">Select Region</option>';  // Reset options
    regions.forEach(region => {
        let option = document.createElement('option');
        option.value = region.name;  // Using the name as the value
        option.text = region.name;
        regionSelect.appendChild(option);
    });
}

function loadProvinces() {
    const provinces = {
        'Region I – Ilocos Region': [
            { id: 101, name: 'Ilocos Norte' },
            { id: 102, name: 'Ilocos Sur' },
            { id: 103, name: 'La Union' },
            { id: 104, name: 'Pangasinan' }
        ],
        'Region II – Cagayan Valley': [
            { id: 201, name: 'Batanes' },
            { id: 202, name: 'Cagayan' },
            { id: 203, name: 'Isabela' },
            { id: 204, name: 'Nueva Vizcaya' },
            { id: 205, name: 'Quirino' },
        ],
        'Region III – Central Luzon': [
            { id: 301, name: 'Aurora' },
            { id: 302, name: 'Bataan' },
            { id: 303, name: 'Bulacan' },
            { id: 304, name: 'Nueva Ecija' },
            { id: 305, name: 'Pampanga' },
            { id: 306, name: 'Tarlac' },
            { id: 307, name: 'Zambales' }
        ],
        'Region IV-A – CALABARZON' : [
            { id: 401, name: 'Batangas' },
            { id: 402, name: 'Cavite' },
            { id: 403, name: 'Laguna' },
            { id: 404, name: 'Quezon' },
            { id: 405, name: 'Rizal' }
        ],
        'MIMAROPA Region' : [
            { id: 501, name: 'Marinduque' },
            { id: 502, name: 'Occidental Mindoro' },
            { id: 503, name: 'Oriental Mindoro' },
            { id: 504, name: 'Palawan' },
            { id: 505, name: 'Romblon' }
        ],
        'Region V – Bicol Region' : [
    { id: 601, name: 'Albay' },
    { id: 602, name: 'Camarines Norte' },
    { id: 603, name: 'Camarines Sur' },
    { id: 604, name: 'Catanduanes' },
    { id: 605, name: 'Masbate' },
    { id: 606, name: 'Sorsogon' }
],
'Region VI – Western Visayas' : [
    { id: 701, name: 'Aklan' },
    { id: 702, name: 'Antique' },
    { id: 703, name: 'Capiz' },
    { id: 704, name: 'Guimaras' },
    { id: 705, name: 'Iloilo' },
    { id: 706, name: 'Negros Occidental' }
],
'Region VII – Central Visayas' : [
    { id: 801, name: 'Bohol' },
    { id: 802, name: 'Cebu' },
    { id: 803, name: 'Negros Oriental' },
    { id: 804, name: 'Siquijor' }
],
'Region VIII – Eastern Visayas' : [
    { id: 901, name: 'Biliran' },
    { id: 902, name: 'Eastern Samar' },
    { id: 903, name: 'Leyte' },
    { id: 904, name: 'Northern Samar' },
    { id: 905, name: 'Samar (Western Samar)' },
    { id: 906, name: 'Southern Leyte' }
],
'Region IX – Zamboanga Peninsula' : [
    { id: 1001, name: 'Zamboanga del Norte' },
    { id: 1002, name: 'Zamboanga del Sur' },
    { id: 1003, name: 'Zamboanga Sibugay' }
],
 'Region X – Northern Mindanao' : [
    { id: 1101, name: 'Bukidnon' },
    { id: 1102, name: 'Camiguin' },
    { id: 1103, name: 'Lanao del Norte' },
    { id: 1104, name: 'Misamis Occidental' },
    { id: 1105, name: 'Misamis Oriental' }
],
'Region XI – Davao Region' : [
    { id: 1201, name: 'Davao de Oro (formerly Compostela Valley)' },
    { id: 1202, name: 'Davao del Norte' },
    { id: 1203, name: 'Davao del Sur' },
    { id: 1204, name: 'Davao Occidental' },
    { id: 1205, name: 'Davao Oriental' }
],
'Region XII – SOCCSKSARGEN' : [
    { id: 1301, name: 'Cotabato (North Cotabato)' },
    { id: 1302, name: 'Sarangani' },
    { id: 1303, name: 'South Cotabato' },
    { id: 1304, name: 'Sultan Kudarat' }
],
'Region XIII – Caraga' : [
    { id: 1401, name: 'Agusan del Norte' },
    { id: 1402, name: 'Agusan del Sur' },
    { id: 1403, name: 'Dinagat Islands' },
    { id: 1404, name: 'Surigao del Norte' },
    { id: 1405, name: 'Surigao del Sur' }
],
'NCR – National Capital Region' : [
    { id: 1501, name: 'Metro Manila' }
],
'CAR – Cordillera Administrative Region' : [
    { id: 1601, name: 'Abra' },
    { id: 1602, name: 'Apayao' },
    { id: 1603, name: 'Benguet' },
    { id: 1604, name: 'Ifugao' },
    { id: 1605, name: 'Kalinga' },
    { id: 1606, name: 'Mountain Province' }
],
'BARMM – Bangsamoro Autonomous Region in Muslim Mindanao' : [
    { id: 1701, name: 'Basilan' },
    { id: 1702, name: 'Lanao del Sur' },
    { id: 1703, name: 'Maguindanao' },
    { id: 1704, name: 'Sulu' },
    { id: 1705, name: 'Tawi-Tawi' }
]

    };

    let provinceSelect = document.getElementById('province');
    let regionName = document.getElementById('region').value;

    provinceSelect.innerHTML = '<option value="">Select Province</option>';  // Reset options
    if (regionName && provinces[regionName]) {
        provinces[regionName].forEach(province => {
            let option = document.createElement('option');
            option.value = province.name;  // Set value to the province name
            option.text = province.name;
            provinceSelect.appendChild(option);
        });
    }
}

function loadCities() {
    const cities = {
        // Region I - Ilocos Region
        'Ilocos Norte' : [
            { id: 1011, name: 'Laoag City' },
            { id: 1012, name: 'Batac City' },
            { id: 1013, name: 'Adams' },
            { id: 1014, name: 'Bacarra' },
            { id: 1015, name: 'Badoc' },
            { id: 1016, name: 'Bangui' },
            { id: 1017, name: 'Banna' },
            { id: 1018, name: 'Burgos' },
            { id: 1019, name: 'Carasi' },
            { id: 1020, name: 'Currimao' },
            { id: 1021, name: 'Dingras' },
            { id: 1022, name: 'Dumalneg' },
            { id: 1023, name: 'Marcos' },
            { id: 1024, name: 'Nueva Era' },
            { id: 1025, name: 'Pagudpud' },
            { id: 1026, name: 'Paoay' },
            { id: 1027, name: 'Pasuquin' },
            { id: 1028, name: 'Piddig' },
            { id: 1029, name: 'Pinili' },
            { id: 1030, name: 'Santa Ana' },
            { id: 1031, name: 'Santa Catalina' },
            { id: 1032, name: 'Santa Cruz' },
            { id: 1033, name: 'Santa Maria' },
            { id: 1034, name: 'Sarrat' },
            { id: 1035, name: 'Solsona' },
            { id: 1036, name: 'Vintar' }
        ],
        'Ilocos Sur' : [
            { id: 1021, name: 'Vigan City' },
            { id: 1022, name: 'Candon City' },
            { id: 1023, name: 'Cabugao' },
            { id: 1024, name: 'Concordia' },
            { id: 1025, name: 'Galimuyod' },
            { id: 1026, name: 'Gregorio del Pilar' },
            { id: 1027, name: 'Magsingal' },
            { id: 1028, name: 'Nagbukel' },
            { id: 1029, name: 'Narvacan' },
            { id: 1030, name: 'Quirino' },
            { id: 1031, name: 'Salcedo' },
            { id: 1032, name: 'San Emilio' },
            { id: 1033, name: 'San Esteban' },
            { id: 1034, name: 'San Ildefonso' },
            { id: 1035, name: 'San Juan' },
            { id: 1036, name: 'San Vicente' },
            { id: 1037, name: 'Santa Catalina' },
            { id: 1038, name: 'Santa Cruz' },
            { id: 1039, name: 'Santa Lucia' },
            { id: 1040, name: 'Santa Maria' },
            { id: 1041, name: 'Santiago' },
            { id: 1042, name: 'Sinait' },
            { id: 1043, name: 'Suyo' },
            { id: 1044, name: 'Tagudin' }
        ],
        'La Union' : [
            { id: 1031, name: 'San Fernando City' },
            { id: 1032, name: 'Agoo' },
            { id: 1033, name: 'Aringay' },
            { id: 1034, name: 'Bacnotan' },
            { id: 1035, name: 'Bagulin' },
            { id: 1036, name: 'Balaoan' },
            { id: 1037, name: 'Bangar' },
            { id: 1038, name: 'Bauang' },
            { id: 1039, name: 'Burgos' },
            { id: 1040, name: 'Caba' },
            { id: 1041, name: 'Luna' },
            { id: 1042, name: 'Naguilian' },
            { id: 1043, name: 'Pugo' },
            { id: 1044, name: 'Rosario' },
            { id: 1045, name: 'San Gabriel' },
            { id: 1046, name: 'San Juan' },
            { id: 1047, name: 'San Luis' },
            { id: 1048, name: 'San Mariano' },
            { id: 1049, name: 'San Nicolas' },
            { id: 1050, name: 'San Quirico' },
            { id: 1051, name: 'Santol' },
            { id: 1052, name: 'Santo Tomas' },
            { id: 1053, name: 'Sison' },
            { id: 1054, name: 'Sudipen' }
        ],
        'Pangasinan' : [
            { id: 1041, name: 'Dagupan City' },
            { id: 1042, name: 'San Carlos City' },
            { id: 1043, name: 'Urdaneta City' },
            { id: 1044, name: 'Agno' },
            { id: 1045, name: 'Aguilar' },
            { id: 1046, name: 'Alaminos' },
            { id: 1047, name: 'Anda' },
            { id: 1048, name: 'Asingan' },
            { id: 1049, name: 'Balungao' },
            { id: 1050, name: 'Bani' },
            { id: 1051, name: 'Basista' },
            { id: 1052, name: 'Bayambang' },
            { id: 1053, name: 'Binalonan' },
            { id: 1054, name: 'Binmaley' },
            { id: 1055, name: 'Bolinao' },
            { id: 1056, name: 'Bugallon' },
            { id: 1057, name: 'Burgos' },
            { id: 1058, name: 'Calasiao' },
            { id: 1059, name: 'Dasol' },
            { id: 1060, name: 'Infanta' },
            { id: 1061, name: 'Labrador' },
            { id: 1062, name: 'Lingayen' },
            { id: 1063, name: 'Manaoag' },
            { id: 1064, name: 'Mangaldan' },
            { id: 1065, name: 'Mangatarem' },
            { id: 1066, name: 'Natividad' },
            { id: 1067, name: 'Pozorrubio' },
            { id: 1068, name: 'Rosales' },
            { id: 1069, name: 'San Fabian' },
            { id: 1070, name: 'San Jacinto' },
            { id: 1071, name: 'San Manuel' },
            { id: 1072, name: 'San Nicolas' },
            { id: 1073, name: 'San Quintin' },
            { id: 1074, name: 'Santa Barbara' },
            { id: 1075, name: 'Santa Maria' },
            { id: 1076, name: 'Santo Tomas' },
            { id: 1077, name: 'Sison' },
            { id: 1078, name: 'Tayug' },
            { id: 1079, name: 'Umingan' },
            { id: 1080, name: 'Urbiztondo' },
            { id: 1081, name: 'Villasis' }
        ],
        

        // Region II - Cagayan Valley
        'Batanes' : [
            { id: 2011, name: 'Basco' },
            { id: 2012, name: 'Itbayat' },
            { id: 2013, name: 'Sabtang' },
            { id: 2014, name: 'Uyugan' }
        ],
        'Cagayan' : [
            { id: 2021, name: 'Tuguegarao City' },
            { id: 2022, name: 'Cauayan City' },
            { id: 2023, name: 'Abulug' },
            { id: 2024, name: 'Alcala' },
            { id: 2025, name: 'Allacapan' },
            { id: 2026, name: 'Amulung' },
            { id: 2027, name: 'Aparri' },
            { id: 2028, name: 'Baggao' },
            { id: 2029, name: 'Ballesteros' },
            { id: 2030, name: 'Buguey' },
            { id: 2031, name: 'Calayan' },
            { id: 2032, name: 'Camalaniugan' },
            { id: 2033, name: 'Claveria' },
            { id: 2034, name: 'Enrile' },
            { id: 2035, name: 'Gonzaga' },
            { id: 2036, name: 'Iguig' },
            { id: 2037, name: 'Lasam' },
            { id: 2038, name: 'Lallo' },
            { id: 2039, name: 'Lal-lo' },
            { id: 2040, name: 'Sanchez Mira' },
            { id: 2041, name: 'Santa Ana' },
            { id: 2042, name: 'Santa Cruz' },
            { id: 2043, name: 'Santa Teresita' },
            { id: 2044, name: 'Santo Niño' },
            { id: 2045, name: 'Solana' },
            { id: 2046, name: 'Tuao' }
        ],
        'Isabela' : [
            { id: 2031, name: 'Ilagan City' },
            { id: 2032, name: 'Santiago City' },
            { id: 2033, name: 'Alfonso Castañeda' },
            { id: 2034, name: 'Angadanan' },
            { id: 2035, name: 'Aurora' },
            { id: 2036, name: 'Benito Soliven' },
            { id: 2037, name: 'Cabagan' },
            { id: 2038, name: 'Cabatuan' },
            { id: 2039, name: 'Delfin Albano' },
            { id: 2040, name: 'Dinapigue' },
            { id: 2041, name: 'Echague' },
            { id: 2042, name: 'Gamu' },
            { id: 2043, name: 'Jones' },
            { id: 2044, name: 'Naguilian' },
            { id: 2045, name: 'Palanan' },
            { id: 2046, name: 'San Agustin' },
            { id: 2047, name: 'San Guillermo' },
            { id: 2048, name: 'San Isidro' },
            { id: 2049, name: 'San Mateo' },
            { id: 2050, name: 'San Mariano' },
            { id: 2051, name: 'San Pablo' },
            { id: 2052, name: 'San Pedro' },
            { id: 2053, name: 'San Rafael' },
            { id: 2054, name: 'San Tomas' },
            { id: 2055, name: 'Santo Tomas' },
            { id: 2056, name: 'Tumauini' }
        ],
        'Nueva Vizcaya' : [
            { id: 2041, name: 'Bayombong' },
            { id: 2042, name: 'Solano' },
            { id: 2043, name: 'Ambaguio' },
            { id: 2044, name: 'Bagabag' },
            { id: 2045, name: 'Burgos' },
            { id: 2046, name: 'Dupax del Norte' },
            { id: 2047, name: 'Dupax del Sur' },
            { id: 2048, name: 'Kasibu' },
            { id: 2049, name: 'Kayapa' },
            { id: 2050, name: 'Quezon' },
            { id: 2051, name: 'Villaverde' }
        ],
        'Quirino' : [
            { id: 2051, name: 'Cabarroguis' },
            { id: 2052, name: 'Aglipay' },
            { id: 2053, name: 'Diffun' },
            { id: 2054, name: 'Maddela' },
            { id: 2055, name: 'Nagtipunan' },
            { id: 2056, name: 'Saguday' },
            { id: 2057, name: 'Santiago' }
        ],        

        // Region III - Central Luzon
        'Aurora' : [
            { id: 3011, name: 'Baler' },
            { id: 3012, name: 'Casiguran' },
            { id: 3013, name: 'Dingalan' },
            { id: 3014, name: 'Dipaculao' },
            { id: 3015, name: 'Maria Aurora' },
            { id: 3016, name: 'San Luis' },
            { id: 3017, name: 'San Nicolas' },
            { id: 3018, name: 'San Juan' }
        ],
        'Bataan' : [
            { id: 3021, name: 'Balanga City' },
            { id: 3022, name: 'Mariveles' },
            { id: 3023, name: 'Limay' },
            { id: 3024, name: 'Orion' },
            { id: 3025, name: 'Pilar' },
            { id: 3026, name: 'Samal' },
            { id: 3027, name: 'Abucay' },
            { id: 3028, name: 'Bagac' },
            { id: 3029, name: 'Dinalupihan' },
            { id: 3030, name: 'Hermosa' },
            { id: 3031, name: 'Orani' }
        ],
       'Bulacan' : [
            { id: 3031, name: 'Malolos City' },
            { id: 3032, name: 'Meycauayan City' },
            { id: 3033, name: 'San Jose del Monte City' },
            { id: 3034, name: 'Bustos' },
            { id: 3035, name: 'Calumpit' },
            { id: 3036, name: 'Guiguinto' },
            { id: 3037, name: 'Hagonoy' },
            { id: 3038, name: 'Balagtas' },
            { id: 3039, name: 'Bocaue' },
            { id: 3040, name: 'Bulakan' },
            { id: 3041, name: 'Marilao' },
            { id: 3042, name: 'Norzagaray' },
            { id: 3043, name: 'Obando' },
            { id: 3044, name: 'Pandi' },
            { id: 3045, name: 'Paombong' },
            { id: 3046, name: 'Plaridel' },
            { id: 3047, name: 'San Ildefonso' },
            { id: 3048, name: 'San Miguel' },
            { id: 3049, name: 'San Rafael' },
            { id: 3050, name: 'San Simon' },
            { id: 3051, name: 'Santa Maria' }
        ],
        'Nueva Ecija' : [
            { id: 3041, name: 'Cabanatuan City' },
            { id: 3042, name: 'Gapan City' },
            { id: 3043, name: 'San Jose City' },
            { id: 3044, name: 'Aliaga' },
            { id: 3045, name: 'Bongabon' },
            { id: 3046, name: 'Cabiao' },
            { id: 3047, name: 'Carranglan' },
            { id: 3048, name: 'Cuyapo' },
            { id: 3049, name: 'General Tinio' },
            { id: 3050, name: 'Guimba' },
            { id: 3051, name: 'Jaen' },
            { id: 3052, name: 'Llanera' },
            { id: 3053, name: 'Licab' },
            { id: 3054, name: 'Lupao' },
            { id: 3055, name: 'Nampicuan' },
            { id: 3056, name: 'Pantabangan' },
            { id: 3057, name: 'Quezon' },
            { id: 3058, name: 'Rizal' },
            { id: 3059, name: 'San Antonio' },
            { id: 3060, name: 'San Isidro' },
            { id: 3061, name: 'San Leonardo' },
            { id: 3062, name: 'San Jose City' },
            { id: 3063, name: 'San Juan' },
            { id: 3064, name: 'San Nicolas' },
            { id: 3065, name: 'San Rafael' },
            { id: 3066, name: 'Santa Rosa' },
            { id: 3067, name: 'Santo Domingo' },
            { id: 3068, name: 'Santo Tomas' },
            { id: 3069, name: 'Talavera' },
            { id: 3070, name: 'Talugtug' },
            { id: 3071, name: 'Zaragoza' }
        ],
        'Pampanga' : [
            { id: 3051, name: 'San Fernando City' },
            { id: 3052, name: 'Angeles City' },
            { id: 3053, name: 'Mabalacat City' },
            { id: 3054, name: 'Apalit' },
            { id: 3055, name: 'Bacolor' },
            { id: 3056, name: 'Candaba' },
            { id: 3057, name: 'Floridablanca' },
            { id: 3058, name: 'Guagua' },
            { id: 3059, name: 'Lubao' },
            { id: 3060, name: 'Macabebe' },
            { id: 3061, name: 'Magalang' },
            { id: 3062, name: 'Minalin' },
            { id: 3063, name: 'Porac' },
            { id: 3064, name: 'San Luis' },
            { id: 3065, name: 'San Simon' },
            { id: 3066, name: 'Santa Ana' },
            { id: 3067, name: 'Santa Rita' },
            { id: 3068, name: 'Santa Teresita' },
            { id: 3069, name: 'Santo Tomas' }
        ],
        'Tarlac' : [
            { id: 3061, name: 'Tarlac City' },
            { id: 3062, name: 'Anao' },
            { id: 3063, name: 'Bamban' },
            { id: 3064, name: 'Concepcion' },
            { id: 3065, name: 'Gerona' },
            { id: 3066, name: 'La Paz' },
            { id: 3067, name: 'Mayantoc' },
            { id: 3068, name: 'Moncada' },
            { id: 3069, name: 'Paniqui' },
            { id: 3070, name: 'Pura' },
            { id: 3071, name: 'Ramos' },
            { id: 3072, name: 'San Clemente' },
            { id: 3073, name: 'San Jose' },
            { id: 3074, name: 'San Manuel' },
            { id: 3075, name: 'San Miguel' },
            { id: 3076, name: 'Santa Ignacia' },
            { id: 3077, name: 'Santa Lucia' },
            { id: 3078, name: 'Santa Rosa' },
            { id: 3079, name: 'Victoria' }
        ],
        'Zambales' : [
            { id: 3071, name: 'Olongapo City' },
            { id: 3072, name: 'Iba' },
            { id: 3073, name: 'Botolan' },
            { id: 3074, name: 'Candelaria' },
            { id: 3075, name: 'Castillejos' },
            { id: 3076, name: 'Masinloc' },
            { id: 3077, name: 'Palauig' },
            { id: 3078, name: 'San Antonio' },
            { id: 3079, name: 'San Felipe' },
            { id: 3080, name: 'San Marcelino' },
            { id: 3081, name: 'San Narciso' },
            { id: 3082, name: 'San Pablo' },
            { id: 3083, name: 'Santa Cruz' },
            { id: 3084, name: 'Santa Margarita' },
            { id: 3085, name: 'Santa Rita' }
        ],

        // Region IV-A - CALABARZON
'Region IV-A - CALABARZON' : [
    { id: 4011, name: 'Batangas City' },
    { id: 4012, name: 'Lipa City' },
    { id: 4013, name: 'Tanauan City' },
    { id: 4014, name: 'Batangas' },
    { id: 4015, name: 'San Jose' },
    { id: 4016, name: 'Taal' },
    { id: 4017, name: 'Santa Teresita' },
    { id: 4018, name: 'San Juan' },
    { id: 4019, name: 'Cuenca' },
    { id: 4020, name: 'Ibaan' },
    { id: 4021, name: 'Laurel' },
    { id: 4022, name: 'Lemery' },
    { id: 4023, name: 'Mataasnakahoy' },
    { id: 4024, name: 'San Nicolas' },
    { id: 4025, name: 'San Pascual' },
    { id: 4026, name: 'Santa Teresa' }
],
'Cavite' : [
    { id: 4021, name: 'Cavite City' },
    { id: 4022, name: 'Tagaytay City' },
    { id: 4023, name: 'Dasmariñas City' },
    { id: 4024, name: 'Bacoor City' },
    { id: 4025, name: 'Imus City' },
    { id: 4026, name: 'Kawit' },
    { id: 4027, name: 'Noveleta' },
    { id: 4028, name: 'Rosario' },
    { id: 4029, name: 'General Trias' },
    { id: 4030, name: 'Tanza' },
    { id: 4031, name: 'Naic' },
    { id: 4032, name: 'Magallanes' },
    { id: 4033, name: 'Maragondon' },
    { id: 4034, name: 'Mendez' },
    { id: 4035, name: 'Silang' },
    { id: 4036, name: 'Alfonso' },
    { id: 4037, name: 'Amadeo' },
    { id: 4038, name: 'General Emilio Aguinaldo' }
],
'Laguna' : [
    { id: 4031, name: 'San Pablo City' },
    { id: 4032, name: 'Santa Rosa City' },
    { id: 4033, name: 'Calamba City' },
    { id: 4034, name: 'San Pedro' },
    { id: 4035, name: 'Binan' },
    { id: 4036, name: 'Laguna' },
    { id: 4037, name: 'Alaminos' },
    { id: 4038, name: 'Bay' },
    { id: 4039, name: 'Calauan' },
    { id: 4040, name: 'Cabuyao' },
    { id: 4041, name: 'Famy' },
    { id: 4042, name: 'Kawit' },
    { id: 4043, name: 'Lumban' },
    { id: 4044, name: 'Mabitac' },
    { id: 4045, name: 'Magdalena' },
    { id: 4046, name: 'Majayjay' },
    { id: 4047, name: 'Nagcarlan' },
    { id: 4048, name: 'Pagsanjan' },
    { id: 4049, name: 'Pangil' },
    { id: 4050, name: 'Rizal' },
    { id: 4051, name: 'San Antonio' },
    { id: 4052, name: 'San Juan' },
    { id: 4053, name: 'Santa Cruz' },
    { id: 4054, name: 'Santa Maria' }
],
'Quezon' : [
    { id: 4041, name: 'Lucena City' },
    { id: 4042, name: 'Tagkawayan' },
    { id: 4043, name: 'Tayabas City' },
    { id: 4044, name: 'Mauban' },
    { id: 4045, name: 'Sariaya' },
    { id: 4046, name: 'Candelaria' },
    { id: 4047, name: 'Guinayangan' },
    { id: 4048, name: 'Lucban' },
    { id: 4049, name: 'Pagbilao' },
    { id: 4050, name: 'Alabat' },
    { id: 4051, name: 'Bondoc' },
    { id: 4052, name: 'Calauag' },
    { id: 4053, name: 'Calauag' },
    { id: 4054, name: 'Dolores' },
    { id: 4055, name: 'General Luna' },
    { id: 4056, name: 'Lopez' },
    { id: 4057, name: 'Mulanay' },
    { id: 4058, name: 'Pitogo' },
    { id: 4059, name: 'Quezon' }
],
'Rizal' : [
    { id: 4051, name: 'Antipolo City' },
    { id: 4052, name: 'Binangonan' },
    { id: 4053, name: 'Cainta' },
    { id: 4054, name: 'Cardona' },
    { id: 4055, name: 'Jala-Jala' },
    { id: 4056, name: 'Rodriguez' },
    { id: 4057, name: 'San Mateo' },
    { id: 4058, name: 'Taytay' },
    { id: 4059, name: 'Angono' }
],

// Region IV-B - MIMAROPA
'Marinduque' : [
    { id: 5011, name: 'Boac' },
    { id: 5012, name: 'Mogpog' },
    { id: 5013, name: 'Santa Cruz' },
    { id: 5014, name: 'Santa Maria' },
    { id: 5015, name: 'Torrijos' }
],
'Occidental Mindoro' : [
    { id: 5021, name: 'San Jose' },
    { id: 5022, name: 'Mamburao' },
    { id: 5023, name: 'Paluan' },
    { id: 5024, name: 'Rizal' },
    { id: 5025, name: 'Sablayan' },
    { id: 5026, name: 'Occidental Mindoro' }
],
'Oriental Mindoro' : [
    { id: 5031, name: 'Calapan City' },
    { id: 5032, name: 'Puerto Galera' },
    { id: 5033, name: 'Baco' },
    { id: 5034, name: 'Bansud' },
    { id: 5035, name: 'Bongabong' },
    { id: 5036, name: 'Bulalacao' },
    { id: 5037, name: 'Gloria' },
    { id: 5038, name: 'Mansalay' },
    { id: 5039, name: 'Naujan' },
    { id: 5040, name: 'Pola' },
    { id: 5041, name: 'Roxas' },
    { id: 5042, name: 'San Teodoro' },
    { id: 5043, name: 'Victoria' }
],
'Palawan' : [
    { id: 5041, name: 'Puerto Princesa City' },
    { id: 5042, name: 'Cuyo' },
    { id: 5043, name: 'El Nido' },
    { id: 5044, name: 'Coron' },
    { id: 5045, name: 'Dumaran' },
    { id: 5046, name: 'Rizal' },
    { id: 5047, name: 'San Vicente' },
    { id: 5048, name: 'Sofronio Española' },
    { id: 5049, name: 'Taytay' }
],
'Romblon' : [
    { id: 5051, name: 'Romblon' },
    { id: 5052, name: 'Odiongan' },
    { id: 5053, name: 'Alcantara' },
    { id: 5054, name: 'Banton' },
    { id: 5055, name: 'Corcuera' },
    { id: 5056, name: 'Concepcion' },
    { id: 5057, name: 'Ferrol' },
    { id: 5058, name: 'Looc' },
    { id: 5059, name: 'San Agustin' },
    { id: 5060, name: 'San Andres' },
    { id: 5061, name: 'San Fernando' },
    { id: 5062, name: 'San Jose' },
    { id: 5063, name: 'San Roque' },
    { id: 5064, name: 'Santa Fe' },
    { id: 5065, name: 'Santa Maria' },
    { id: 5066, name: 'Tanduyan' }
],

        // Region V - Bicol Region
'Albay' : [
    { id: 6011, name: 'Legazpi City' },
    { id: 6012, name: 'Tabaco City' },
    { id: 6013, name: 'Ligao City' },
    { id: 6014, name: 'Camalig' },
    { id: 6015, name: 'Guinobatan' },
    { id: 6016, name: 'Jovellar' },
    { id: 6017, name: 'Libon' },
    { id: 6018, name: 'Malilipot' },
    { id: 6019, name: 'Manito' },
    { id: 6020, name: 'Oas' },
    { id: 6021, name: 'Pio Duran' },
    { id: 6022, name: 'Polangui' },
    { id: 6023, name: 'Rapu-Rapu' },
    { id: 6024, name: 'Santo Domingo' },
    { id: 6025, name: 'Tigaon' },
    { id: 6026, name: 'Viga' },
    { id: 6027, name: 'Vinzons' }
],
'Camarines Norte': [
    { id: 6021, name: 'Daet' },
    { id: 6022, name: 'Mercedes' },
    { id: 6023, name: 'Paracale' },
    { id: 6024, name: 'Jose Panganiban' },
    { id: 6025, name: 'Labo' },
    { id: 6026, name: 'Basud' },
    { id: 6027, name: 'Talisay' },
    { id: 6028, name: 'Capalonga' },
    { id: 6029, name: 'San Vicente' },
    { id: 6030, name: 'San Lorenzo Ruiz' }
],
'Camarines Sur': [
    { id: 6031, name: 'Naga City' },
    { id: 6032, name: 'Iriga City' },
    { id: 6033, name: 'Baao' },
    { id: 6034, name: 'Bato' },
    { id: 6035, name: 'Buhi' },
    { id: 6036, name: 'Bula' },
    { id: 6037, name: 'Calabanga' },
    { id: 6038, name: 'Canaman' },
    { id: 6039, name: 'Caramoan' },
    { id: 6040, name: 'Del Gallego' },
    { id: 6041, name: 'Gainza' },
    { id: 6042, name: 'Lupi' },
    { id: 6043, name: 'Magarao' },
    { id: 6044, name: 'Minalabac' },
    { id: 6045, name: 'Nabua' },
    { id: 6046, name: 'Pamplona' },
    { id: 6047, name: 'Pasacao' },
    { id: 6048, name: 'Pili' },
    { id: 6049, name: 'Ragay' },
    { id: 6050, name: 'Sipocot' },
    { id: 6051, name: 'Tigaon' }
],
'Catanduanes': [
    { id: 6041, name: 'Virac' },
    { id: 6042, name: 'Bato' },
    { id: 6043, name: 'San Andres' },
    { id: 6044, name: 'San Miguel' },
    { id: 6045, name: 'Caramoran' },
    { id: 6046, name: 'Panganiban' },
    { id: 6047, name: 'Bagamanoc' },
    { id: 6048, name: 'Viga' },
    { id: 6049, name: 'Payo' },
    { id: 6050, name: 'Pangyunang' }
],
'Masbate': [
    { id: 6051, name: 'Masbate City' },
    { id: 6052, name: 'Mobo' },
    { id: 6053, name: 'Uson' },
    { id: 6054, name: 'Baleno' },
    { id: 6055, name: 'Balud' },
    { id: 6056, name: 'Batuan' },
    { id: 6057, name: 'Cataingan' },
    { id: 6058, name: 'Cawayan' },
    { id: 6059, name: 'Dimasalang' },
    { id: 6060, name: 'Milagros' },
    { id: 6061, name: 'Palanas' },
    { id: 6062, name: 'Placer' },
    { id: 6063, name: 'San Fernando' },
    { id: 6064, name: 'San Jacinto' },
    { id: 6065, name: 'San Pascual' },
    { id: 6066, name: 'San Agustin' },
    { id: 6067, name: 'San Antonio' },
    { id: 6068, name: 'San Pedro' },
    { id: 6069, name: 'Ticao Island' }
],
'Sorsogon': [
    { id: 6061, name: 'Sorsogon City' },
    { id: 6062, name: 'Bulusan' },
    { id: 6063, name: 'Casiguran' },
    { id: 6064, name: 'Donsol' },
    { id: 6065, name: 'Gubat' },
    { id: 6066, name: 'Irosin' },
    { id: 6067, name: 'Magallanes' },
    { id: 6068, name: 'Pto. Díaz' },
    { id: 6069, name: 'Sorsogon' },
    { id: 6070, name: 'Sta. Magdalena' }
],

// Region VI - Western Visayas
'Aklan': [
    { id: 7011, name: 'Kalibo' },
    { id: 7012, name: 'Altavas' },
    { id: 7013, name: 'Banga' },
    { id: 7014, name: 'Batan' },
    { id: 7015, name: 'Buruanga' },
    { id: 7016, name: 'Ibajay' },
    { id: 7017, name: 'Kalamansig' },
    { id: 7018, name: 'Libacao' },
    { id: 7019, name: 'Malay' },
    { id: 7020, name: 'New Washington' },
    { id: 7021, name: 'Numancia' },
    { id: 7022, name: 'Tangalan' }
],
'Antique': [
    { id: 7021, name: 'San Jose de Buenavista' },
    { id: 7022, name: 'Hamtic' },
    { id: 7023, name: 'Sibalom' },
    { id: 7024, name: 'Bugasong' },
    { id: 7025, name: 'Patnongon' },
    { id: 7026, name: 'Valderrama' },
    { id: 7027, name: 'San Remigio' },
    { id: 7028, name: 'Culasi' },
    { id: 7029, name: 'Pandan' },
    { id: 7030, name: 'Sebaste' },
    { id: 7031, name: 'Tibiao' }
],
'Capiz': [
    { id: 7031, name: 'Roxas City' },
    { id: 7032, name: 'Ivisan' },
    { id: 7033, name: 'Panay' },
    { id: 7034, name: 'Maayon' },
    { id: 7035, name: 'Sigma' },
    { id: 7036, name: 'Pilar' },
    { id: 7037, name: 'Mambusao' },
    { id: 7038, name: 'Dao' },
    { id: 7039, name: 'Sapian' },
    { id: 7040, name: 'Panitan' },
    { id: 7041, name: 'Talingting' }
],
'Guimaras': [
    { id: 7041, name: 'Jordan' },
    { id: 7042, name: 'Buenavista' },
    { id: 7043, name: 'San Lorenzo' },
    { id: 7044, name: 'San Miguel' }
],
'Iloilo': [
    { id: 7051, name: 'Iloilo City' },
    { id: 7052, name: 'Passi City' },
    { id: 7053, name: 'Barotac Nuevo' },
    { id: 7054, name: 'Janiuay' },
    { id: 7055, name: 'Oton' },
    { id: 7056, name: 'Leganes' },
    { id: 7057, name: 'Pavia' },
    { id: 7058, name: 'San Miguel' },
    { id: 7059, name: 'San Rafael' },
    { id: 7060, name: 'Santa Barbara' },
    { id: 7061, name: 'Dingle' },
    { id: 7062, name: 'San Dionisio' },
    { id: 7063, name: 'Sara' },
    { id: 7064, name: 'Maasin' }
],
'Negros Occidental': [
    { id: 7061, name: 'Bacolod City' },
    { id: 7062, name: 'Bago City' },
    { id: 7063, name: 'Cadiz City' },
    { id: 7064, name: 'Escalante City' },
    { id: 7065, name: 'Himamaylan City' },
    { id: 7066, name: 'Kabankalan City' },
    { id: 7067, name: 'La Carlota City' },
    { id: 7068, name: 'Sagay City' },
    { id: 7069, name: 'San Carlos City' },
    { id: 7070, name: 'Silay City' },
    { id: 7071, name: 'Talisay City' },
    { id: 7072, name: 'Victorias City' }
],

        // Region VII - Central Visayas
'Bohol': [
    { id: 8011, name: 'Tagbilaran City' },
    { id: 8012, name: 'Danao City' },
    { id: 8013, name: 'Anda' },
    { id: 8014, name: 'Loon' },
    { id: 8015, name: 'Panglao' }
],
'Cebu': [
    { id: 8021, name: 'Cebu City' },
    { id: 8022, name: 'Lapu-Lapu City' },
    { id: 8023, name: 'Mandaue City' },
    { id: 8024, name: 'Carcar City' },
    { id: 8025, name: 'Bogo City' }
],
'Negros Oriental': [
    { id: 8031, name: 'Dumaguete City' },
    { id: 8032, name: 'Bais City' },
    { id: 8033, name: 'Bayawan City' },
    { id: 8034, name: 'Tanjay City' }
],
'Siquijor': [
    { id: 8041, name: 'Siquijor' },
    { id: 8042, name: 'Larena' },
    { id: 8043, name: 'San Juan' },
    { id: 8044, name: 'Lazi' },
    { id: 8045, name: 'Siquijor' }
],

// Region VIII - Eastern Visayas
'Biliran': [
    { id: 9011, name: 'Naval' },
    { id: 9012, name: 'Biliran' },
    { id: 9013, name: 'Kawayan' },
    { id: 9014, name: 'Maripipi' },
    { id: 9015, name: 'Caibiran' }
],
'Eastern Samar': [
    { id: 9021, name: 'Borongan City' },
    { id: 9022, name: 'Guiuan' },
    { id: 9023, name: 'Balayni' },
    { id: 9024, name: 'Maydolong' },
    { id: 9025, name: 'Salcedo' }
],
'Leyte': [
    { id: 9031, name: 'Tacloban City' },
    { id: 9032, name: 'Ormoc City' },
    { id: 9033, name: 'Baybay City' },
    { id: 9034, name: 'Carigara' },
    { id: 9035, name: 'Tanauan' }
],
'Northern Samar': [
    { id: 9041, name: 'Catarman' },
    { id: 9042, name: 'Sorsogon' },
    { id: 9043, name: 'Bobon' },
    { id: 9044, name: 'Laoang' },
    { id: 9045, name: 'Gamay' }
],
'Samar (Western Samar)': [
    { id: 9051, name: 'Calbayog City' },
    { id: 9052, name: 'Catbalogan City' },
    { id: 9053, name: 'Basey' },
    { id: 9054, name: 'Calbiga' },
    { id: 9055, name: 'Marabut' }
],
'Southern Leyte': [
    { id: 9061, name: 'Maasin City' },
    { id: 9062, name: 'Sogod' },
    { id: 9063, name: 'Libagon' },
    { id: 9064, name: 'San Juan' },
    { id: 9065, name: 'Saint Bernard' }
],

        // Region IX - Zamboanga Peninsula
'Zamboanga del Norte': [
    { id: 10011, name: 'Dipolog City' },
    { id: 10012, name: 'Dapitan City' },
    { id: 10013, name: 'Polanco' },
    { id: 10014, name: 'Sergio Osmeña Sr.' },
    { id: 10015, name: 'Salug' }
],
'Zamboanga del Sur': [
    { id: 10021, name: 'Pagadian City' },
    { id: 10022, name: 'Dipolog City' },
    { id: 10023, name: 'Alicia' },
    { id: 10024, name: 'Guipos' },
    { id: 10025, name: 'Molave' }
],
'Zamboanga City': [
    { id: 10031, name: 'Zamboanga City' }
],

// Region X - Northern Mindanao
'Bukidnon': [
    { id: 11011, name: 'Malaybalay City' },
    { id: 11012, name: 'Valencia City' },
    { id: 11013, name: 'Maramag' },
    { id: 11014, name: 'Manolo Fortich' },
    { id: 11015, name: 'Cabanglasan' }
],
'Camiguin': [
    { id: 11021, name: 'Mambajao' },
    { id: 11022, name: 'Catarman' },
    { id: 11023, name: 'Guinsiliban' },
    { id: 11024, name: 'Sagay' },
    { id: 11025, name: 'Mahinog' }
],
'Lanao del Norte': [
    { id: 11031, name: 'Iligan City' },
    { id: 11032, name: 'Tangub City' },
    { id: 11033, name: 'Kapatagan' },
    { id: 11034, name: 'Kauswagan' },
    { id: 11035, name: 'Linamon' }
],
'Misamis Occidental': [
    { id: 11041, name: 'Oroquieta City' },
    { id: 11042, name: 'Ozamiz City' },
    { id: 11043, name: 'Tudela' },
    { id: 11044, name: 'Jimenez' },
    { id: 11045, name: 'Plaridel' }
],
'Misamis Oriental': [
    { id: 11051, name: 'Cagayan de Oro City' },
    { id: 11052, name: 'Gingoog City' },
    { id: 11053, name: 'Jasaan' },
    { id: 11054, name: 'Gitagum' },
    { id: 11055, name: 'Villanueva' }
],


        // Region XI - Davao Region
'Compostela Valley': [
    { id: 12011, name: 'Monkayo' },
    { id: 12012, name: 'Nabunturan' },
    { id: 12013, name: 'Pantukan' },
    { id: 12014, name: 'New Bataan' },
    { id: 12015, name: 'Maragusan' }
],
'Davao del Norte': [
    { id: 12021, name: 'Tagum City' },
    { id: 12022, name: 'Panabo City' },
    { id: 12023, name: 'Island Garden City of Samal' },
    { id: 12024, name: 'Kapalong' },
    { id: 12025, name: 'Asuncion' }
],
'Davao City': [
    { id: 12031, name: 'Davao City' }
],
'Davao Occidental': [
    { id: 12041, name: 'Malita' },
    { id: 12042, name: 'Santa Maria' },
    { id: 12043, name: 'Don Marcelino' },
    { id: 12044, name: 'Jose Abad Santos' },
    { id: 12045, name: 'Sarangani' }
],
'Davao Oriental': [
    { id: 12051, name: 'Mati City' },
    { id: 12052, name: 'Baganga' },
    { id: 12053, name: 'Cateel' },
    { id: 12054, name: 'Boston' },
    { id: 12055, name: 'Governor Generoso' }
],

// Region XII - SOCCSKSARGEN
'North Cotabato': [
    { id: 13011, name: 'Kidapawan City' },
    { id: 13012, name: 'Midsayap' },
    { id: 13013, name: 'Matalam' },
    { id: 13014, name: 'Pikit' },
    { id: 13015, name: 'Kabacan' }
],
'Sarangani': [
    { id: 13021, name: 'Alabel' },
    { id: 13022, name: 'Malungon' },
    { id: 13023, name: 'Kiamba' },
    { id: 13024, name: 'Maasim' },
    { id: 13025, name: 'Glan' }
],
'South Cotabato': [
    { id: 13031, name: 'General Santos City' },
    { id: 13032, name: 'Koronadal City' },
    { id: 13033, name: 'Surallah' },
    { id: 13034, name: 'Tupi' },
    { id: 13035, name: 'Banga' }
],
'Sultan Kudarat': [
    { id: 13041, name: 'Tacurong City' },
    { id: 13042, name: 'Isulan' },
    { id: 13043, name: 'Lambayong' },
    { id: 13044, name: 'Sen. Ninoy Aquino' },
    { id: 13045, name: 'Palimbang' }
],


// Region XIII - Caraga
'Agusan del Norte': [
    { id: 14011, name: 'Butuan City' },
    { id: 14012, name: 'Cabadbaran City' }
],
'Agusan del Sur': [
    { id: 14021, name: 'Bayugan City' }
],
'Surigao del Norte': [
    { id: 14031, name: 'Surigao City' },
    { id: 14032, name: 'Del Carmen' },
    { id: 14033, name: 'Sison' },
    { id: 14034, name: 'Claver' }
],
'Surigao del Sur': [
    { id: 14041, name: 'Tandag City' },
    { id: 14042, name: 'Bislig City' },
    { id: 14043, name: 'Carrascal' },
    { id: 14044, name: 'Madrid' }
],
'Dinagat Islands': [
    { id: 14051, name: 'Dinagat' },
    { id: 14052, name: 'Cagdianao' },
    { id: 14053, name: 'Basilisa' },
    { id: 14054, name: 'San Jose' }
],

// NCR - National Capital Region
'Metro Manila': [
    { id: 15011, name: 'Manila' },
    { id: 15012, name: 'Quezon City' },
    { id: 15013, name: 'Makati City' },
    { id: 15014, name: 'Pasig City' },
    { id: 15015, name: 'Caloocan City' },
    { id: 15016, name: 'Taguig City' },
    { id: 15017, name: 'Las Piñas City' },
    { id: 15018, name: 'Mandaluyong City' },
    { id: 15019, name: 'Marikina City' },
    { id: 15020, name: 'Pasay City' },
    { id: 15021, name: 'San Juan City' },
    { id: 15022, name: 'Valenzuela City' },
    { id: 15023, name: 'Muntinlupa City' }
],


        // CAR - Cordillera Administrative Region
'Abra': [
    { id: 16011, name: 'Bangued' },
    { id: 16012, name: 'Lagayan' },
    { id: 16013, name: 'Luba' }
],
'Apayao': [
    { id: 16021, name: 'Kabugao' },
    { id: 16022, name: 'Conner' },
    { id: 16023, name: 'Calanasan' }
],
'Benguet': [
    { id: 16031, name: 'La Trinidad' },
    { id: 16032, name: 'Baguio City' },
    { id: 16033, name: 'Itogon' }
],
'Ifugao': [
    { id: 16041, name: 'Lagawe' },
    { id: 16042, name: 'Natonin' },
    { id: 16043, name: 'Lamut' }
],
'Kalinga': [
    { id: 16051, name: 'Tabuk City' },
    { id: 16052, name: 'Pasil' },
    { id: 16053, name: 'Rizal' }
],
'Mountain Province': [
    { id: 16061, name: 'Bontoc' },
    { id: 16062, name: 'Sagada' },
    { id: 16063, name: 'Sabangan' }
],

// BARMM - Bangsamoro Autonomous Region in Muslim Mindanao
'Basilan': [
    { id: 17011, name: 'Isabela City' },
    { id: 17012, name: 'Lamitan City' },
    { id: 17013, name: 'Maluso' }
],
'Lanao del Sur': [
    { id: 17021, name: 'Marawi City' },
    { id: 17022, name: 'Balindong' },
    { id: 17023, name: 'Magsaysay' }
],
'Maguindanao': [
    { id: 17031, name: 'Cotabato City' },
    { id: 17032, name: 'Shariff Aguak' },
    { id: 17033, name: 'Datu Odin Sinsuat' }
],
'Sulu': [
    { id: 17041, name: 'Jolo' },
    { id: 17042, name: 'Indanan' },
    { id: 17043, name: 'Patikul' }
],
'Tawi-Tawi': [
    { id: 17051, name: 'Bongao' },
    { id: 17052, name: 'Sapa-Sapa' },
    { id: 17053, name: 'Mapun' }
],

 };


 let citySelect = document.getElementById('city');
 let provinceName = document.getElementById('province').value;

 citySelect.innerHTML = '<option value="">Select City / Municipality</option>';  // Reset options
 if (provinceName && cities[provinceName]) {
     cities[provinceName].forEach(city => {
         let option = document.createElement('option');
         option.value = city.name;  // Set value to the city name
         option.text = city.name;
         citySelect.appendChild(option);
     });
    }
}

function loadBarangays() {
    const barangays = {
        'Laoag City': [
            { id: 1011, name: 'Barangay 1 (Calabaza)' },
            { id: 182, name: 'Barangay 2 (San Juan)' },
            { id: 183, name: 'Barangay 3 (San Pedro)' },
            { id: 184, name: 'Barangay 4 (San Roque)' },
            { id: 185, name: 'Barangay 5 (San Vicente)' },
            { id: 186, name: 'Barangay 6 (San Isidro)' },
            { id: 187, name: 'Barangay 7 (San Andres)' },
            { id: 188, name: 'Barangay 8 (San Antonio)' },
            { id: 189, name: 'Barangay 9 (San Nicolas)' },
            { id: 190, name: 'Barangay 10 (San Guillermo)' },
            { id: 191, name: 'Barangay 11 (San Rafael)' },
            { id: 192, name: 'Barangay 12 (San Jose)' },
            { id: 193, name: 'Barangay 13 (San Agustin)' },
            { id: 194, name: 'Barangay 14 (San Esteban)' },
            { id: 195, name: 'Barangay 15 (San Bartolome)' },
            { id: 196, name: 'Barangay 16 (San Pedro)' },
            { id: 197, name: 'Barangay 17 (San Andres)' },
            { id: 198, name: 'Barangay 18 (San Martin)' },
            { id: 199, name: 'Barangay 19 (San Francisco)' },
            { id: 200, name: 'Barangay 20 (San Fernando)' }
        ],
        'Batac City': [
            { id: 1011, name: 'Brgy. 1 (Poblacion)' },
            { id: 1012, name: 'Brgy. 2 (Poblacion)' },
            { id: 1013, name: 'Brgy. 3 (Poblacion)' },
            { id: 1014, name: 'Brgy. 4 (Poblacion)' },
            { id: 1015, name: 'Brgy. 5 (Poblacion)' },
            { id: 1016, name: 'Brgy. 6 (Poblacion)' },
            { id: 1017, name: 'Brgy. 7 (Poblacion)' },
            { id: 1018, name: 'Brgy. 8 (Poblacion)' },
            { id: 1019, name: 'Brgy. 9 (Poblacion)' },
            { id: 1020, name: 'Brgy. 10 (Poblacion)' },
            { id: 1021, name: 'Brgy. Aglipay' },
            { id: 1022, name: 'Brgy. Anocao' },
            { id: 1023, name: 'Brgy. Baloctaoc' },
            { id: 1024, name: 'Brgy. Barit' },
            { id: 1025, name: 'Brgy. Bato' },
            { id: 1026, name: 'Brgy. Biligan' },
            { id: 1027, name: 'Brgy. Bulala' },
            { id: 1028, name: 'Brgy. Calabaza' },
            { id: 1029, name: 'Brgy. San Pedro' },
            { id: 1030, name: 'Brgy. San Jose' },
            { id: 1031, name: 'Brgy. San Vicente' },
            { id: 1032, name: 'Brgy. San Pablo' },
            { id: 1033, name: 'Brgy. San Isidro' },
            { id: 1034, name: 'Brgy. San Roque' },
            { id: 1035, name: 'Brgy. Sta. Ana' }
        ],
        'Adams': [
            { id: 1011, name: 'Brgy. Adams' },
            { id: 1012, name: 'Brgy. Asipulo' },
            { id: 1013, name: 'Brgy. Cabaroan' },
            { id: 1014, name: 'Brgy. Dalit' },
            { id: 1015, name: 'Brgy. Duldulao' },
            { id: 1016, name: 'Brgy. Limmok' },
            { id: 1017, name: 'Brgy. Magtang' },
            { id: 1018, name: 'Brgy. Nangalisan' },
            { id: 1019, name: 'Brgy. Pao' },
            { id: 1020, name: 'Brgy. Quiling' }
        ],
        'Bacarra': [
            { id: 1011, name: 'Brgy. 1 (Poblacion)' },
            { id: 1012, name: 'Brgy. 2 (Poblacion)' },
            { id: 1013, name: 'Brgy. 3 (Poblacion)' },
            { id: 1014, name: 'Brgy. 4 (Poblacion)' },
            { id: 1015, name: 'Brgy. 5 (Poblacion)' },
            { id: 1016, name: 'Brgy. 6 (San Pedro)' },
            { id: 1017, name: 'Brgy. 7 (San Juan)' },
            { id: 1018, name: 'Brgy. 8 (San Mateo)' },
            { id: 1019, name: 'Brgy. 9 (San Antonio)' },
            { id: 1020, name: 'Brgy. 10 (San Pablo)' }
        ],
        'Badoc': [
            { id: 1011, name: 'Brgy. 1 (Poblacion)' },
            { id: 1012, name: 'Brgy. 2 (Poblacion)' },
            { id: 1013, name: 'Brgy. 3 (Poblacion)' },
            { id: 1014, name: 'Brgy. 4 (Poblacion)' },
            { id: 1015, name: 'Brgy. 5 (Poblacion)' },
            { id: 1016, name: 'Brgy. 6 (San Francisco)' },
            { id: 1017, name: 'Brgy. 7 (San Vicente)' },
            { id: 1018, name: 'Brgy. 8 (San Isidro)' },
            { id: 1019, name: 'Brgy. 9 (San Roque)' },
            { id: 1020, name: 'Brgy. 10 (San Jose)' }
        ],
        'Bangui': [
            { id: 1011, name: 'Brgy. 1 (Poblacion)' },
            { id: 1012, name: 'Brgy. 2 (Poblacion)' },
            { id: 1013, name: 'Brgy. 3 (Poblacion)' },
            { id: 1014, name: 'Brgy. 4 (Poblacion)' },
            { id: 1015, name: 'Brgy. 5 (Poblacion)' },
            { id: 1016, name: 'Brgy. 6 (San Juan)' },
            { id: 1017, name: 'Brgy. 7 (San Roque)' },
            { id: 1018, name: 'Brgy. 8 (San Pedro)' },
            { id: 1019, name: 'Brgy. 9 (San Vicente)' },
            { id: 1020, name: 'Brgy. 10 (San Jose)' }
        ],
        'Banna': [
            { id: 1011, name: 'Brgy. 1 (Poblacion)' },
            { id: 1012, name: 'Brgy. 2 (Poblacion)' },
            { id: 1013, name: 'Brgy. 3 (Poblacion)' },
            { id: 1014, name: 'Brgy. 4 (Poblacion)' },
            { id: 1015, name: 'Brgy. 5 (Poblacion)' },
            { id: 1016, name: 'Brgy. 6 (San Isidro)' },
            { id: 1017, name: 'Brgy. 7 (San Vicente)' },
            { id: 1018, name: 'Brgy. 8 (San Roque)' },
            { id: 1019, name: 'Brgy. 9 (San Pedro)' },
            { id: 1020, name: 'Brgy. 10 (San Juan)' }
        ],        
        'Burgos': [
            { id: 1011, name: 'Brgy. 1 (Poblacion)' },
            { id: 1012, name: 'Brgy. 2 (Poblacion)' },
            { id: 1013, name: 'Brgy. 3 (Poblacion)' },
            { id: 1014, name: 'Brgy. 4 (Poblacion)' },
            { id: 1015, name: 'Brgy. 5 (Poblacion)' },
            { id: 1016, name: 'Brgy. 6 (San Isidro)' },
            { id: 1017, name: 'Brgy. 7 (San Pedro)' },
            { id: 1018, name: 'Brgy. 8 (San Roque)' },
            { id: 1019, name: 'Brgy. 9 (San Vicente)' },
            { id: 1020, name: 'Brgy. 10 (San Juan)' }
        ],
        'Carasi': [
            { id: 1011, name: 'Brgy. 1 (Poblacion)' },
            { id: 1012, name: 'Brgy. 2 (Poblacion)' },
            { id: 1013, name: 'Brgy. 3 (Poblacion)' },
            { id: 1014, name: 'Brgy. 4 (Poblacion)' },
            { id: 1015, name: 'Brgy. 5 (Poblacion)' },
            { id: 1016, name: 'Brgy. 6 (San Isidro)' },
            { id: 1017, name: 'Brgy. 7 (San Juan)' },
            { id: 1018, name: 'Brgy. 8 (San Pedro)' },
            { id: 1019, name: 'Brgy. 9 (San Roque)' },
            { id: 1020, name: 'Brgy. 10 (San Vicente)' }
        ],   
        'Currimao': [
            { id: 1011, name: 'Brgy. 1 (Poblacion)' },
            { id: 1012, name: 'Brgy. 2 (Poblacion)' },
            { id: 1013, name: 'Brgy. 3 (Poblacion)' },
            { id: 1014, name: 'Brgy. 4 (Poblacion)' },
            { id: 1015, name: 'Brgy. 5 (Poblacion)' },
            { id: 1016, name: 'Brgy. 6 (San Isidro)' },
            { id: 1017, name: 'Brgy. 7 (San Pedro)' },
            { id: 1018, name: 'Brgy. 8 (San Vicente)' },
            { id: 1019, name: 'Brgy. 9 (San Roque)' },
            { id: 1020, name: 'Brgy. 10 (San Juan)' }
        ],
        'Dingras': [
            { id: 1011, name: 'Brgy. 1 (Poblacion)' },
            { id: 1012, name: 'Brgy. 2 (Poblacion)' },
            { id: 1013, name: 'Brgy. 3 (Poblacion)' },
            { id: 1014, name: 'Brgy. 4 (Poblacion)' },
            { id: 1015, name: 'Brgy. 5 (Poblacion)' },
            { id: 1016, name: 'Brgy. 6 (San Pedro)' },
            { id: 1017, name: 'Brgy. 7 (San Vicente)' },
            { id: 1018, name: 'Brgy. 8 (San Isidro)' },
            { id: 1019, name: 'Brgy. 9 (San Roque)' },
            { id: 1020, name: 'Brgy. 10 (San Juan)' }
        ],
        'Dumalneg': [
            { id: 1011, name: 'Brgy. 1 (Poblacion)' },
            { id: 1012, name: 'Brgy. 2 (Poblacion)' },
            { id: 1013, name: 'Brgy. 3 (Poblacion)' },
            { id: 1014, name: 'Brgy. 4 (Poblacion)' },
            { id: 1015, name: 'Brgy. 5 (Poblacion)' },
            { id: 1016, name: 'Brgy. 6 (San Vicente)' },
            { id: 1017, name: 'Brgy. 7 (San Roque)' },
            { id: 1018, name: 'Brgy. 8 (San Pedro)' },
            { id: 1019, name: 'Brgy. 9 (San Isidro)' },
            { id: 1020, name: 'Brgy. 10 (San Juan)' }
        ],
        'Marcos': [
            { id: 1011, name: 'Brgy. 1 (Poblacion)' },
            { id: 1012, name: 'Brgy. 2 (Poblacion)' },
            { id: 1013, name: 'Brgy. 3 (Poblacion)' },
            { id: 1014, name: 'Brgy. 4 (Poblacion)' },
            { id: 1015, name: 'Brgy. 5 (Poblacion)' },
            { id: 1016, name: 'Brgy. 6 (San Vicente)' },
            { id: 1017, name: 'Brgy. 7 (San Pedro)' },
            { id: 1018, name: 'Brgy. 8 (San Roque)' },
            { id: 1019, name: 'Brgy. 9 (San Isidro)' },
            { id: 1020, name: 'Brgy. 10 (San Juan)' }
        ],
        'Nueva Era': [
            { id: 1011, name: 'Brgy. 1 (Poblacion)' },
            { id: 1012, name: 'Brgy. 2 (Poblacion)' },
            { id: 1013, name: 'Brgy. 3 (Poblacion)' },
            { id: 1014, name: 'Brgy. 4 (Poblacion)' },
            { id: 1015, name: 'Brgy. 5 (Poblacion)' },
            { id: 1016, name: 'Brgy. 6 (San Pedro)' },
            { id: 1017, name: 'Brgy. 7 (San Vicente)' },
            { id: 1018, name: 'Brgy. 8 (San Isidro)' },
            { id: 1019, name: 'Brgy. 9 (San Roque)' },
            { id: 1020, name: 'Brgy. 10 (San Juan)' }
        ],
        'Pagudpud': [
            { id: 1011, name: 'Brgy. 1 (Poblacion)' },
            { id: 1012, name: 'Brgy. 2 (Poblacion)' },
            { id: 1013, name: 'Brgy. 3 (Poblacion)' },
            { id: 1014, name: 'Brgy. 4 (Poblacion)' },
            { id: 1015, name: 'Brgy. 5 (Poblacion)' },
            { id: 1016, name: 'Brgy. 6 (San Pedro)' },
            { id: 1017, name: 'Brgy. 7 (San Vicente)' },
            { id: 1018, name: 'Brgy. 8 (San Isidro)' },
            { id: 1019, name: 'Brgy. 9 (San Roque)' },
            { id: 1020, name: 'Brgy. 10 (San Juan)' }
        ],
        'Paoay': [
                { "id": 1011, "name": "Brgy. 1 (Poblacion)" },
                { "id": 1012, "name": "Brgy. 2 (Poblacion)" },
                { "id": 1013, "name": "Brgy. 3 (Poblacion)" },
                { "id": 1014, "name": "Brgy. 4 (Poblacion)" },
                { "id": 1015, "name": "Brgy. 5 (Poblacion)" },
                { "id": 1016, "name": "Brgy. 6 (San Pedro)" },
                { "id": 1017, "name": "Brgy. 7 (San Vicente)" },
                { "id": 1018, "name": "Brgy. 8 (San Isidro)" },
                { "id": 1019, "name": "Brgy. 9 (San Roque)" },
                { "id": 1020, "name": "Brgy. 10 (San Juan)" }
            ],
            'Pasuquin': [
                { "id": 1011, "name": "Brgy. 1 (Poblacion)" },
                { "id": 1012, "name": "Brgy. 2 (Poblacion)" },
                { "id": 1013, "name": "Brgy. 3 (Poblacion)" },
                { "id": 1014, "name": "Brgy. 4 (Poblacion)" },
                { "id": 1015, "name": "Brgy. 5 (Poblacion)" },
                { "id": 1016, "name": "Brgy. 6 (San Pedro)" },
                { "id": 1017, "name": "Brgy. 7 (San Vicente)" },
                { "id": 1018, "name": "Brgy. 8 (San Isidro)" },
                { "id": 1019, "name": "Brgy. 9 (San Roque)" },
                { "id": 1020, "name": "Brgy. 10 (San Juan)" }
            ],
            'Piddig': [
                { "id": 1011, "name": "Brgy. Aglipay" },
                { "id": 1012, "name": "Brgy. Bagumbayan" },
                { "id": 1013, "name": "Brgy. Barit" },
                { "id": 1014, "name": "Brgy. Bato" },
                { "id": 1015, "name": "Brgy. Biligan" },
                { "id": 1016, "name": "Brgy. Carinup" },
                { "id": 1017, "name": "Brgy. Cato" },
                { "id": 1018, "name": "Brgy. Catuguing" },
                { "id": 1019, "name": "Brgy. Dumay" },
                { "id": 1020, "name": "Brgy. Guinnisilib" },
                { "id": 1021, "name": "Brgy. Mabuti" },
                { "id": 1022, "name": "Brgy. Masipag" },
                { "id": 1023, "name": "Brgy. Nagsurot" },
                { "id": 1024, "name": "Brgy. Nagbalayong" },
                { "id": 1025, "name": "Brgy. Palpalok" },
                { "id": 1026, "name": "Brgy. Pasuquin" },
                { "id": 1027, "name": "Brgy. Piddig" },
                { "id": 1028, "name": "Brgy. San Andres" },
                { "id": 1029, "name": "Brgy. San Agustin" },
                { "id": 1030, "name": "Brgy. San Isidro" },
                { "id": 1031, "name": "Brgy. San Juan" },
                { "id": 1032, "name": "Brgy. San Miguel" },
                { "id": 1033, "name": "Brgy. San Pedro" },
                { "id": 1034, "name": "Brgy. San Roque" },
                { "id": 1035, "name": "Brgy. San Vicente" }
            ],
            'Pinili': [
                { "id": 1011, "name": "Brgy. 1 (Poblacion)" },
                { "id": 1012, "name": "Brgy. 2 (Poblacion)" },
                { "id": 1013, "name": "Brgy. 3 (Poblacion)" },
                { "id": 1014, "name": "Brgy. 4 (Poblacion)" },
                { "id": 1015, "name": "Brgy. 5 (Poblacion)" },
                { "id": 1016, "name": "Brgy. 6 (San Pedro)" },
                { "id": 1017, "name": "Brgy. 7 (San Vicente)" },
                { "id": 1018, "name": "Brgy. 8 (San Roque)" },
                { "id": 1019, "name": "Brgy. 9 (San Isidro)" },
                { "id": 1020, "name": "Brgy. 10 (San Juan)" }
            ],
            'Santa Ana': [
                { "id": 1011, "name": "Brgy. 1 (Poblacion)" },
                { "id": 1012, "name": "Brgy. 2 (Poblacion)" },
                { "id": 1013, "name": "Brgy. 3 (Poblacion)" },
                { "id": 1014, "name": "Brgy. 4 (Poblacion)" },
                { "id": 1015, "name": "Brgy. 5 (Poblacion)" },
                { "id": 1016, "name": "Brgy. 6 (San Vicente)" },
                { "id": 1017, "name": "Brgy. 7 (San Pedro)" },
                { "id": 1018, "name": "Brgy. 8 (San Roque)" },
                { "id": 1019, "name": "Brgy. 9 (San Isidro)" },
                { "id": 1020, "name": "Brgy. 10 (San Juan)" }
            ],
            'Santa Catalina': [
                { "id": 1011, "name": "Brgy. 1 (Poblacion)" },
                { "id": 1012, "name": "Brgy. 2 (Poblacion)" },
                { "id": 1013, "name": "Brgy. 3 (Poblacion)" },
                { "id": 1014, "name": "Brgy. 4 (Poblacion)" },
                { "id": 1015, "name": "Brgy. 5 (Poblacion)" },
                { "id": 1016, "name": "Brgy. 6 (San Vicente)" },
                { "id": 1017, "name": "Brgy. 7 (San Pedro)" },
                { "id": 1018, "name": "Brgy. 8 (San Roque)" },
                { "id": 1019, "name": "Brgy. 9 (San Isidro)" },
                { "id": 1020, "name": "Brgy. 10 (San Juan)" }
            ],
            'Santa Cruz': [
                { "id": 1011, "name": "Brgy. 1 (Poblacion)" },
                { "id": 1012, "name": "Brgy. 2 (Poblacion)" },
                { "id": 1013, "name": "Brgy. 3 (Poblacion)" },
                { "id": 1014, "name": "Brgy. 4 (Poblacion)" },
                { "id": 1015, "name": "Brgy. 5 (Poblacion)" },
                { "id": 1016, "name": "Brgy. 6 (San Vicente)" },
                { "id": 1017, "name": "Brgy. 7 (San Pedro)" },
                { "id": 1018, "name": "Brgy. 8 (San Roque)" },
                { "id": 1019, "name": "Brgy. 9 (San Isidro)" },
                { "id": 1020, "name": "Brgy. 10 (San Juan)" }
            ],
            'Santa Maria': [
                { "id": 1011, "name": "Brgy. 1 (Poblacion)" },
                { "id": 1012, "name": "Brgy. 2 (Poblacion)" },
                { "id": 1013, "name": "Brgy. 3 (Poblacion)" },
                { "id": 1014, "name": "Brgy. 4 (Poblacion)" },
                { "id": 1015, "name": "Brgy. 5 (Poblacion)" },
                { "id": 1016, "name": "Brgy. 6 (San Vicente)" },
                { "id": 1017, "name": "Brgy. 7 (San Pedro)" },
                { "id": 1018, "name": "Brgy. 8 (San Roque)" },
                { "id": 1019, "name": "Brgy. 9 (San Isidro)" },
                { "id": 1020, "name": "Brgy. 10 (San Juan)" }
            ],
            'Sarrat': [
                { "id": 1011, "name": "Brgy. 1 (Poblacion)" },
                { "id": 1012, "name": "Brgy. 2 (Poblacion)" },
                { "id": 1013, "name": "Brgy. 3 (Poblacion)" },
                { "id": 1014, "name": "Brgy. 4 (Poblacion)" },
                { "id": 1015, "name": "Brgy. 5 (Poblacion)" },
                { "id": 1016, "name": "Brgy. 6 (San Vicente)" },
                { "id": 1017, "name": "Brgy. 7 (San Pedro)" },
                { "id": 1018, "name": "Brgy. 8 (San Roque)" },
                { "id": 1019, "name": "Brgy. 9 (San Isidro)" },
                { "id": 1020, "name": "Brgy. 10 (San Juan)" }
            ],
            'Solsona': [
                { "id": 1011, "name": "Brgy. 1 (Poblacion)" },
                { "id": 1012, "name": "Brgy. 2 (Poblacion)" },
                { "id": 1013, "name": "Brgy. 3 (Poblacion)" },
                { "id": 1014, "name": "Brgy. 4 (Poblacion)" },
                { "id": 1015, "name": "Brgy. 5 (Poblacion)" },
                { "id": 1016, "name": "Brgy. 6 (San Vicente)" },
                { "id": 1017, "name": "Brgy. 7 (San Pedro)" },
                { "id": 1018, "name": "Brgy. 8 (San Roque)" },
                { "id": 1019, "name": "Brgy. 9 (San Isidro)" },
                { "id": 1020, "name": "Brgy. 10 (San Juan)" }
            ],
            'Vintar': [
                { "id": 1011, "name": "Brgy. 1 (Poblacion)" },
                { "id": 1012, "name": "Brgy. 2 (Poblacion)" },
                { "id": 1013, "name": "Brgy. 3 (Poblacion)" },
                { "id": 1014, "name": "Brgy. 4 (Poblacion)" },
                { "id": 1015, "name": "Brgy. 5 (Poblacion)" },
                { "id": 1016, "name": "Brgy. 6 (San Vicente)" },
                { "id": 1017, "name": "Brgy. 7 (San Pedro)" },
                { "id": 1018, "name": "Brgy. 8 (San Roque)" },
                { "id": 1019, "name": "Brgy. 9 (San Isidro)" },
                { "id": 1020, "name": "Brgy. 10 (San Juan)" }
            ],
            
    };

    let barangaySelect = document.getElementById('barangay');
    let cityName = document.getElementById('city').value;

    barangaySelect.innerHTML = '<option value="">Select Barangay</option>';  // Reset options
    if (cityName && barangays[cityName]) {
        barangays[cityName].forEach(barangay => {
            let option = document.createElement('option');
            option.value = barangay.name;  // Set value to the barangay name
            option.text = barangay.name;
            barangaySelect.appendChild(option);
        });
    }
}
