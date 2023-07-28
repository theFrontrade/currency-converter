// currencyName = currency.symbols[`${selectedCurrency}`]
var currency = 
    {
    "success": true,
    "symbols": {
        "AED": "United Arab Emirates Dirham",
    "AFN": "Afghan Afghani",
    "ALL": "Albanian Lek",
    "AMD": "Armenian Dram",
    "ANG": "Netherlands Antillean Guilder",
    "AOA": "Angolan Kwanza",
    "ARS": "Argentine Peso",
    "AUD": "Australian Dollar",
    "AWG": "Aruban Florin",
    "AZN": "Azerbaijani Manat",
    "BAM": "Bosnia-Herzegovina Convertible Mark",
    "BBD": "Barbadian Dollar",
    "BDT": "Bangladeshi Taka",
    "BGN": "Bulgarian Lev",
    "BHD": "Bahraini Dinar",
    "BIF": "Burundian Franc",
    "BMD": "Bermudan Dollar",
    "BND": "Brunei Dollar",
    "BOB": "Bolivian Boliviano",
    "BRL": "Brazilian Real",
    "BSD": "Bahamian Dollar",
    "BTC": "Bitcoin",
    "BTN": "Bhutanese Ngultrum",
    "BWP": "Botswanan Pula",
    "BYN": "New Belarusian Ruble",
    "BYR": "Belarusian Ruble",
    "BZD": "Belize Dollar",
    "CAD": "Canadian Dollar",
    "CDF": "Congolese Franc",
    "CHF": "Swiss Franc",
    "CLF": "Chilean Unit of Account (UF)",
    "CLP": "Chilean Peso",
    "CNY": "Chinese Yuan",
    "COP": "Colombian Peso",
    "CRC": "Costa Rican Col\u00f3n",
    "CUC": "Cuban Convertible Peso",
    "CUP": "Cuban Peso",
    "CVE": "Cape Verdean Escudo",
    "CZK": "Czech Republic Koruna",
    "DJF": "Djiboutian Franc",
    "DKK": "Danish Krone",
    "DOP": "Dominican Peso",
    "DZD": "Algerian Dinar",
    "EGP": "Egyptian Pound",
    "ERN": "Eritrean Nakfa",
    "ETB": "Ethiopian Birr",
    "EUR": "Euro",
    "FJD": "Fijian Dollar",
    "FKP": "Falkland Islands Pound",
    "GBP": "British Pound Sterling",
    "GEL": "Georgian Lari",
    "GGP": "Guernsey Pound",
    "GHS": "Ghanaian Cedi",
    "GIP": "Gibraltar Pound",
    "GMD": "Gambian Dalasi",
    "GNF": "Guinean Franc",
    "GTQ": "Guatemalan Quetzal",
    "GYD": "Guyanaese Dollar",
    "HKD": "Hong Kong Dollar",
    "HNL": "Honduran Lempira",
    "HRK": "Croatian Kuna",
    "HTG": "Haitian Gourde",
    "HUF": "Hungarian Forint",
    "IDR": "Indonesian Rupiah",
    "ILS": "Israeli New Sheqel",
    "IMP": "Manx pound",
    "INR": "Indian Rupee",
    "IQD": "Iraqi Dinar",
    "IRR": "Iranian Rial",
    "ISK": "Icelandic Kr\u00f3na",
    "JEP": "Jersey Pound",
    "JMD": "Jamaican Dollar",
    "JOD": "Jordanian Dinar",
    "JPY": "Japanese Yen",
    "KES": "Kenyan Shilling",
    "KGS": "Kyrgystani Som",
    "KHR": "Cambodian Riel",
    "KMF": "Comorian Franc",
    "KPW": "North Korean Won",
    "KRW": "South Korean Won",
    "KWD": "Kuwaiti Dinar",
    "KYD": "Cayman Islands Dollar",
    "KZT": "Kazakhstani Tenge",
    "LAK": "Laotian Kip",
    "LBP": "Lebanese Pound",
    "LKR": "Sri Lankan Rupee",
    "LRD": "Liberian Dollar",
    "LSL": "Lesotho Loti",
    "LTL": "Lithuanian Litas",
    "LVL": "Latvian Lats",
    "LYD": "Libyan Dinar",
    "MAD": "Moroccan Dirham",
    "MDL": "Moldovan Leu",
    "MGA": "Malagasy Ariary",
    "MKD": "Macedonian Denar",
    "MMK": "Myanma Kyat",
    "MNT": "Mongolian Tugrik",
    "MOP": "Macanese Pataca",
    "MRO": "Mauritanian Ouguiya",
    "MUR": "Mauritian Rupee",
    "MVR": "Maldivian Rufiyaa",
    "MWK": "Malawian Kwacha",
    "MXN": "Mexican Peso",
    "MYR": "Malaysian Ringgit",
    "MZN": "Mozambican Metical",
    "NAD": "Namibian Dollar",
    "NGN": "Nigerian Naira",
    "NIO": "Nicaraguan C\u00f3rdoba",
    "NOK": "Norwegian Krone",
    "NPR": "Nepalese Rupee",
    "NZD": "New Zealand Dollar",
    "OMR": "Omani Rial",
    "PAB": "Panamanian Balboa",
    "PEN": "Peruvian Nuevo Sol",
    "PGK": "Papua New Guinean Kina",
    "PHP": "Philippine Peso",
    "PKR": "Pakistani Rupee",
    "PLN": "Polish Zloty",
    "PYG": "Paraguayan Guarani",
    "QAR": "Qatari Rial",
    "RON": "Romanian Leu",
    "RSD": "Serbian Dinar",
    "RUB": "Russian Ruble",
    "RWF": "Rwandan Franc",
    "SAR": "Saudi Riyal",
    "SBD": "Solomon Islands Dollar",
    "SCR": "Seychellois Rupee",
    "SDG": "Sudanese Pound",
    "SEK": "Swedish Krona",
    "SGD": "Singapore Dollar",
    "SHP": "Saint Helena Pound",
    "SLE": "Sierra Leonean Leone",
    "SLL": "Sierra Leonean Leone",
    "SOS": "Somali Shilling",
    "SRD": "Surinamese Dollar",
    "STD": "S\u00e3o Tom\u00e9 and Pr\u00edncipe Dobra",
    "SVC": "Salvadoran Col\u00f3n",
    "SYP": "Syrian Pound",
    "SZL": "Swazi Lilangeni",
    "THB": "Thai Baht",
    "TJS": "Tajikistani Somoni",
    "TMT": "Turkmenistani Manat",
    "TND": "Tunisian Dinar",
    "TOP": "Tongan Pa\u02bbanga",
    "TRY": "Turkish Lira",
    "TTD": "Trinidad and Tobago Dollar",
    "TWD": "New Taiwan Dollar",
    "TZS": "Tanzanian Shilling",
    "UAH": "Ukrainian Hryvnia",
    "UGX": "Ugandan Shilling",
    "USD": "United States Dollar",
    "UYU": "Uruguayan Peso",
    "UZS": "Uzbekistan Som",
    "VEF": "Venezuelan Bol\u00edvar Fuerte",
    "VES": "Sovereign Bolivar",
    "VND": "Vietnamese Dong",
    "VUV": "Vanuatu Vatu",
    "WST": "Samoan Tala",
    "XAF": "CFA Franc BEAC",
    "XAG": "Silver (troy ounce)",
    "XAU": "Gold (troy ounce)",
    "XCD": "East Caribbean Dollar",
    "XDR": "Special Drawing Rights",
    "XOF": "CFA Franc BCEAO",
    "XPF": "CFP Franc",
    "YER": "Yemeni Rial",
    "ZAR": "South African Rand",
    "ZMK": "Zambian Kwacha (pre-2013)",
    "ZMW": "Zambian Kwacha",
    "ZWL": "Zimbabwean Dollar"
    }
}
var amount = document.querySelector('#select_amount_option')
var amountFromValue = document.querySelector('#select_from_option')
var amountToValue = document.querySelector('#select_to_option')
var selectedAmount = document.querySelector('#selected_amount')
var currencyText = document.querySelector('#currency_text')
var baseValue = document.querySelector('#base_value')
var selectedAnswer = document.querySelector('#selected_answer')
var convert = document.getElementById('convert_button')


document.getElementById('select_amount_option').addEventListener('focus', () => {
    document.getElementById('select_amount_option').setAttribute('style', 'border:1px solid red;color:black')
    document.getElementById('select_from_option').setAttribute('style', 'border:none')
    document.getElementById('select_to_option').setAttribute('style', 'border:none')
})
document.getElementById('select_from_option').addEventListener('focus', () => {
    document.getElementById('select_from_option').setAttribute('style', 'border:1px solid red')
    document.getElementById('select_to_option').setAttribute('style', 'border:none')
    document.getElementById('select_amount_option').setAttribute('style', 'border:none;color:black')
})
document.getElementById('select_to_option').addEventListener('focus', () => {
    document.getElementById('select_to_option').setAttribute('style', 'border:1px solid red')
    document.getElementById('select_from_option').setAttribute('style', 'border:none')
    document.getElementById('select_amount_option').setAttribute('style', 'border:none;color:black')
})



let options = {
    method: "GET",
    headers: {
        apiKey: "n3yNAMZURc2Vj7pesO1N7IP1cQPZdTQW",
        "Content-Type": "application/json"
    },
}

// const requester = async ()=>{
//     let req = await fetch('https://api.apilayer.com/fixer/symbols', options);
//     let json = await req.json();
// }
// async function requester(){
let response = [];
function getItem() {
    fetch(`https://api.apilayer.com/fixer/latest`, options).then((res) => {
        res.json().then((resp) => {
            console.log(resp)
            currencyAmount = resp
            currencyArray = currency.symbols
            currencyLoop = (Object.keys(currency.symbols))
            currencyLoopValue = (Object.values(currency.symbols));
            currencyAmountLoopValues = (Object.values(currencyAmount.rates))
            currencyAmountLoopKeys = (Object.values(currencyAmount.rates))
            currencyAmountDates = currencyAmount.date

            amountToValue.innerHTML = "<option value='0'>To</option>";
            amountFromValue.innerHTML = "<option value='0'>From</option>";
            for (let i = 1; i < currencyLoop.length; i++) {
                amountToValue.innerHTML += `<option value = "${currencyAmountLoopKeys[i]}">${currency.symbols[`${currencyLoop[i]}`]}  (${currencyLoop[i]})</option>`;
                amountFromValue.innerHTML += `<option value = "${currencyAmountLoopKeys[i]}">${currency.symbols[`${currencyLoop[i]}`]} (${currencyLoop[i]})</option>`;

            }
            var selectValue = document.getElementById('select_from_option').value
            currencyText.innerHTML = currencyAmountDates
            convert.addEventListener('click', () => {
                document.getElementById('select_to_option').setAttribute('style', 'border:none')
                document.getElementById('select_from_option').setAttribute('style', 'border:none')
                document.getElementById('select_amount_option').setAttribute('style', 'border:none;color:black')
                if (amount.value == null || amountToValue.value == 0 || amountFromValue.value == 0) {
                    alert('One of your input is missing')
                }
                else mainBase = 1 * amountToValue.value;
                subMain = mainBase / amountFromValue.value
                main = subMain * amount.value
                selectedAnswer.innerHTML = `${main}`
                selectedAmount.innerHTML = `${amount.value}`
                baseValue.innerHTML = `${subMain}`

            })
            console.log(response)
        })
    }).catch((err) => console.log(err))
}


window.onload = () => {
    getItem();
}

// }
// fetch('url', options).then((res)=>{
//     res.json().then((json)=>{

//     }).catch(err=>console.log(err))
// }).catch(err=>console.log(err))




