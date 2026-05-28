const dolar = 5.08
const euro = 5.90
const iene = 0.032
const bitcoin = 371.407

const convertButton = document.getElementById('convertButton')
const currencyOptions = document.getElementById('currencyOptions')

const convertValues = () =>{
    const valueFromInput = document.getElementById('valueFromInput').value
    const valueFromImgBrazil = document.getElementById('valueFromImgBrazil')
    const valueFromImgUsa = document.getElementById('valueFromImg')

    valueFromImgBrazil.innerHTML = new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }
    ).format(valueFromInput);

    if(currencyOptions.value === 'Dólar Americano US$'){
    valueFromImgUsa.innerHTML = new Intl.NumberFormat('en-US',
    { style: 'currency', currency: 'USD' }
    ).format(valueFromInput / dolar); 
};

    if(currencyOptions.value === 'Euro €'){
        valueFromImgUsa.innerHTML = new Intl.NumberFormat('de-DE',
        { style: 'currency', currency: 'EUR' }
        ).format(valueFromInput / euro); 
};

    if(currencyOptions.value === 'Iene ¥'){
        valueFromImgUsa.innerHTML = new Intl.NumberFormat('ja-JP',
        { style: 'currency', currency: 'JPY' }
        ).format(valueFromInput / iene); 
};

    if(currencyOptions.value === 'Bitcoin ₿'){
        valueFromImgUsa.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BTC' }
        ).format(valueFromInput / bitcoin); 
};

}

const changeCurrency = () =>{
    const currencyName = document.getElementById('currencyName')
    const currencyImg = document.getElementById('currencyImg')

    if(currencyOptions.value === 'Euro €'){
        currencyName.innerHTML= "Euro €"
        currencyImg.src = "./assets/germanyimg.png"
    };

    if(currencyOptions.value === 'Dólar Americano US$'){
        currencyName.innerHTML= "Dólar US$"
        currencyImg.src = "./assets/usaimg.png"
    };

    if(currencyOptions.value === 'Iene ¥'){
        currencyName.innerHTML= "Iene ¥"
        currencyImg.src = "./assets/japanimg.png"
    };

    if(currencyOptions.value === 'Bitcoin ₿'){
        currencyName.innerHTML= "Bitcoin ₿"
        currencyImg.src = "./assets/bitcoinimg.png"
    };

convertValues()

}

convertButton.addEventListener('click', convertValues)
currencyOptions.addEventListener('change', changeCurrency)
