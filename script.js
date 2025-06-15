let expenses = [];

function addExpense() {
    const desc = document.getElementById("desc").value.trim();
    const amount = parseFloat(document.getElementById("amount").value);

if (!desc || isNaN(amount) || amount <= 0) {
    alert("please enter valid description and amount.");
    return;
}

expenses.push({ desc, amount });
displayExpenses();

document.getElementById("desc").value = '';
document.getElementById("amount").value = '';
}

function displayExpenses() {
    const list = document.getElementById("expenseList");
    const total = document.getElementById("totalAmount");
    list.innerHTML = "";
    let totalSum = 0;

expenses.forEach((item,index) => {
    totalSum += item.amount;
    const li = document.createElement("li");
    li.innerHTML = `${item.desc} - ${item.amount.toFixed(2)} <button onclick="removeExpense(${index})">X</button>`;
    list.appendChild(li);

});
total.textContent = totalSum.toFixed(2);
}

function removeExpense(index) {
    expenses.splice(index, 1);
    displayExpenses();
}

function exportToExcel() {
    if (!expenses.length) {
        alert("No expenses to export.");
        return;
    }

const worksheetData = expenses.map ((exp, i) => ({
    No: i + 1,
    Description: exp.desc,
    Amount: exp.amount.toFixed(2), 
    Date: exp.date,
} ) );


const worksheet = XLSX.utils.json_to_sheet(worksheetData);
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, "Expenses");

XLSX.writeFile(workbook, `My_Expenses.xlsx`);

}

function goToCurrencyConverter() {
    const amount = parseFloat(document.getElementById("amountToConvert").value);
    if (isNaN(amount)) {
        alert("please enter a valid amount");
        return;
    }

    localStorage.setItem("convertAmount", amount);
    window.location.href = "sec.html";
}





















