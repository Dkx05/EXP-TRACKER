const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
function updateTotal() {
    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    document.getElementById("total").textContent = 'Total: ${total.toFixed(2)}';
}

const conversionRates = {
    USD: 0.012,
    EUR: 0.011,
    INR: 1,
    KWD: 0.0037,

};

function convertCurrency() {
    const currency = document.getElementById("currency").value;
    const rate = conversionRates[currency];

    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    const converted = total * rate;
    

document.getElementById("convertedTotal").textContent =
  `Converted Total: ${currency} {converted.toFixed(2)}`;

};

function goBack() {
    window.location.href = "index.html";
}

updateTotal();







