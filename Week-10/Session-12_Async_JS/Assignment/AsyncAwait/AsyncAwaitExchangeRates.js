async function getExchangeRate(currencyCode) {
  // Your code here
  const URL = "https://api.exchangerate.host/latest";
  const response = await fetch(URL);
  const jsonData = await response.json();
//   console.log(jsonData);
  return jsonData.rates[currencyCode];
}

getExchangeRate('EUR').then((rate)=>{
    console.log(rate);
});
