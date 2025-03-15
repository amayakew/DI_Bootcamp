// The program should take the currency which the user currently has and the currency in which they would 
// like to receive, as well as the amount of money. Afterwards, the program will output the correct exchange
//  rate based on the data from the APIs.

// First, you need to fetch all the supported currencies, in order to add the currencies options (ie FROM - To) 
// in the currency converter. Check out this page on Supported Codes Endpoint from the ExchangeRate API documentation.

// To convert from a currency, to another one, you need to fetch conversion rate from the Pair Conversion API endpoint.
//  Check out this page on Pair conversion requests from the ExchangeRate API documentation.
// Hint: You could also supply an optional AMOUNT variable in the query of the request.

// Bonus: Add “switch” button on the page, when clicked on it will switch the currencies and display the new 
// amount converted.

async function getCurrencies() {
    const response = await fetch('https://v6.exchangerate-api.com/v6/7a7af1bb024606023d4be898/codes');
    const responseJSON = await response.json();
    const supportedCurrencies = responseJSON.supported_codes;
    const currencies = [];
    supportedCurrencies.forEach(element => {
        const code = element[0];
        const name = element[1];
        currencies.push({code, name});
    });
    return currencies;
};

async function convert(currentCurrencyCode,requestedCurrencyCode,amount){
    const response = await fetch(`https://v6.exchangerate-api.com/v6/7a7af1bb024606023d4be898/pair/${currentCurrencyCode}/${requestedCurrencyCode}/${amount}`);
    const responseJSON = await response.json();
    const convertResult = responseJSON.conversion_result;
    return convertResult;
};

function setCurrencies(currencies,dataListElId){
    const currencyList = document.getElementById(dataListElId);
    currencyList.innerHTML = '';

    currencies.forEach((c) => {
        const option = document.createElement("option");
        option.value = c.code;
        option.textContent = `${c.code} - ${c.name}`;
        currencyList.appendChild(option);
    });
};

function inputValidation(currentCurrencyCode,requestedCurrencyCode,amount){
    if (currentCurrencyCode !== '' && requestedCurrencyCode !== '' && amount !== ''){
        return true;
    };
    return false;
};

async function main() {
    const currencies = await getCurrencies();
    setCurrencies(currencies,`currentCurrencyList`);
    setCurrencies(currencies,`requestedCurrencyList`);

    const convertBtn = document.getElementById('convertbtn');
    convertBtn.addEventListener('click', async function(e){
        e.preventDefault();
        const currentCurrencyCode = document.getElementById('currentCurrency').value;
        const requestedCurrencyCode = document.getElementById('requestedCurrency').value;
        const amount = document.getElementById('currentAmount').value;
        if (inputValidation(currentCurrencyCode,requestedCurrencyCode,amount)){
            const convertResult = await convert(currentCurrencyCode,requestedCurrencyCode,amount);
            document.getElementById('resultAmount').value = convertResult;
        } else {
            alert ('Fill all the inputs')
        };
    });

    const changeBtn = document.getElementById('changeBtn');
    changeBtn.addEventListener('click', function(e){
        e.preventDefault();
        const currentCurrencyCode = document.getElementById('currentCurrency').value;
        const requestedCurrencyCode = document.getElementById('requestedCurrency').value;
        document.getElementById('currentCurrency').value = requestedCurrencyCode;
        document.getElementById('requestedCurrency').value = currentCurrencyCode;
        convertBtn.click();
    });
};

main();

