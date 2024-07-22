async function fetchData(){
    let url = "https://v6.exchangerate-api.com/v6/9280def612c2bdea3d2501c9/codes"
    const options = {
        method: "GET",
        headers: {
        "Content-type": "application/json",
        },
    }
    let res = await fetch(url, options);
    let data = await res.json()
    return data.supported_codes
}

const selectFrom = document.getElementById('from');
const selectTo = document.getElementById('to');

async function displayCurrencies(from, to){
    let currencieList = await fetchData();
    for(let item of currencieList){
        let newOptionFom = document.createElement('option');
        newOptionFom.value = item[0];
        newOptionFom.textContent = `${item[0]} - ${item[1]}`;
        from.appendChild(newOptionFom);

        let newOptionTo = document.createElement('option');
        newOptionTo.value = item[0];
        newOptionTo.textContent = `${item[0]} - ${item[1]}`;
        to.appendChild(newOptionTo);
    }
}
displayCurrencies(selectFrom, selectTo)

function getOption(){
    let selectedFrom = selectFrom.value 
    let selectedTo = selectTo.value 
    return [selectedFrom, selectedTo];
}

async function getPairApi(event){
    event.preventDefault();
    let pairUrl = "https://v6.exchangerate-api.com/v6/9280def612c2bdea3d2501c9/pair/"
    let [from, to] = getOption()
    const amount = document.getElementById('amount').value
    if (from && to && amount) {
        const newPairUrl = `${pairUrl}${from}/${to}/${amount}`;
        const options = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        };
        let res = await fetch(newPairUrl, options);
        let data = await res.json()
        const divResult = document.getElementById('result')
        const result = document.createElement('p');
        result.textContent = data.conversion_result
        divResult.appendChild(result)
        
    }else{
        console.error('Both "from" and "to" values must be selected.');
    }
}

const form = document.forms[0]
form.addEventListener('submit', getPairApi)
