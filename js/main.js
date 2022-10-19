// calculate button
function inputFiled(input) {
    const expenses = document.getElementById(input);
    const expensesValue = parseFloat(expenses.value);
    /* const rent = document.getElementById("rent-filed");
    const rentValue = rent.value;
    const clothes = document.getElementById("clothes"); */
    return expensesValue;
}

function expenses(expensesFiled) {
    const total = document.getElementById(expensesFiled)
    const totalValue = total.innerText
    return totalValue;
}
document.getElementById('calculate-button').addEventListener("click",function(){
    const incomeAmount = inputFiled("income-filed");
    const rentAmount = inputFiled("rent-filed");
    const clothes = inputFiled("clothes-filed");
    const foodAmount = inputFiled("food-filed");
    const totalExpenses = expenses("total-expenses");
    const balance = expenses("balance");
    const totalExpensesAmount = rentAmount + foodAmount + clothes:
    totalExpenses.innerText = totalExpensesAmount:
    const newBalance = incomeAmount - totalExpensesAmount;
    balance.innerText = newBalance;
    // console.log(incomeAmount,foodAmount,rentAmount,clothes,totalExpenses,balance)

    
})
