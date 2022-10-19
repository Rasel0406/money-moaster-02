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
    return total;
} 

function totalExpensesAmount() {
    const rentAmount = inputFiled("rent-filed");
    const clothes = inputFiled("clothes-filed");
    const foodAmount = inputFiled("food-filed");
    const totalExpenses = foodAmount + rentAmount + clothes;
    return totalExpenses;
}
document.getElementById('calculate-button').addEventListener("click",function(){
    const incomeAmount = inputFiled("income-filed");
    const expensesTotal = expenses("total-expenses");
    const balance = expenses("balance");
    const totalExpenses = totalExpensesAmount();
    // console.log(incomeAmount , foodAmount , rentAmount, clothes, expensesTotal,balance)
    const remainingBalance = incomeAmount - totalExpenses;
    expensesTotal.innerText = totalExpenses;
    balance.innerText = remainingBalance;
   
    //  console.log(totalExpenses, remainingBalance);
})

// saving Income part
document.getElementById("calculate-button-02").addEventListener("click", function(){
    const incomeAmount = inputFiled("income-filed");
    const savings = inputFiled("saving-input")
    const savingAmount = expenses("saving-amount");
    const updateBalance = expenses("remaining-balance");
    const totalsaving = (savings / 100)*incomeAmount ;
    savingAmount.innerText = totalsaving;
    const totalExpenses = totalExpensesAmount();
    const remainingBalance = incomeAmount - totalExpenses;
    const totalRemainingBalance = remainingBalance - totalsaving;
    updateBalance.innerText = totalRemainingBalance;
    
})
