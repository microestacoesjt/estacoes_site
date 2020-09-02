var jsonFile = {

    "ResumoSetembro": [

        {
            "temp_10": "28",
            "temp_11": "32",
            "temp_12": "38",
            "temp_13": "30",
            "temp_14": "28",
            "temp_15": "35",
            "temp_16": "33",
            "temp_17": "34",
            "temp_18": "36",
            "temp_19": "38",
            "temp_21": "31",
            "temp_22": "28",
            "temp_26": "23",
            "temp_27": "27",
            "temp_28": "26",
            "temp_29": "24",
            "temp_30": "25",
            "Dia": "Temp Máxima"
        },
       
        {
            "10": "23",
            "11": "21",
            "12": "22",
            "13": "22",
            "14": "22",
            "15": "22",
            "16": "23",
            "17": "22",
            "18": "22",
            "19": "21",
            "21": "22",
            "22": "23",
            "26": "20",
            "27": "19",
            "28": "18",
            "29": "18",
            "30": "19",
            "Dia": " Temp Mínima"
        },
        {
            "10": "24.32",
            "11": "25.53",
            "12": "27.05",
            "13": "24.76",
            "14": "23.84",
            "15": "26.02",
            "16": "26.50",
            "17": "26.55",
            "18": "27.21",
            "19": "27.39",
            "21": "26.77",
            "22": "24.50",
            "26": "21.15",
            "27": "21.85",
            "28": "21.48",
            "29": "20.90",
            "30": "20.89",
            "Dia": " Temp Média"
        },
        {
            "10": "83",
            "11": "83",
            "12": "82",
            "13": "95",
            "14": "94",
            "15": "94",
            "16": "85",
            "17": "80",
            "18": "88",
            "19": "95",
            "21": "94",
            "22": "91",
            "26": "95",
            "27": "95",
            "28": "95",
            "29": "95",
            "30": "95",
            "Dia": "Humid Máxima"
        },
        {
            "10": "51",
            "11": "39",
            "12": "31",
            "13": "46",
            "14": "55",
            "15": "35",
            "16": "38",
            "17": "35",
            "18": "31",
            "19": "35",
            "21": "43",
            "22": "62",
            "26": "91",
            "27": "64",
            "28": "56",
            "29": "72",
            "30": "75",
            "Dia": "Humid Minima"
        }
    ],
}

var dez = jsonFile.ResumoSetembro.map(function(e) {
    return e.temp_10
})
var onze = jsonFile.ResumoSetembro.map(function(e) {
    return e.temp_11
})
var doze = jsonFile.ResumoSetembro.map(function(e) {
    return e.temp_12
})

/*var dez = jsonFile.ResumoSetembro.map(function(e) {
    return e.temp_13
})
var dez = jsonFile.ResumoSetembro.map(function(e) {
    return e.temp_14
})
var dez = jsonFile.ResumoSetembro.map(function(e) {
    return e.temp_15
})
var dez = jsonFile.ResumoSetembro.map(function(e) {
    return e.temp_16
})
var dez = jsonFile.ResumoSetembro.map(function(e) {
    return e.temp_17
})
var dez = jsonFile.ResumoSetembro.map(function(e) {
    return e.temp_18
})
var dez = jsonFile.ResumoSetembro.map(function(e) {
    return e.temp_19
})
var dez = jsonFile.ResumoSetembro.map(function(e) {
    return e.temp_20
}) */
