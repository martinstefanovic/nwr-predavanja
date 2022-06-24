
const budgetInput = document.getElementById('budget-input')
const addBudgetBtn = document.getElementById('add-budget-btn')
const budget = document.getElementById('budget-number')

const budgetExpenseMessage = document.getElementById('expense-message')
const budgetExpenseAmount = document.getElementById('expense-amount')
const addExpenseBtn = document.getElementById('add-expense-btn')
const expense = document.getElementById('expense-number')

const balance = document.getElementById('balance-number')

const expenseList = []

// Dodavanje budzeta
addBudgetBtn.addEventListener('click', ()=>{
    budget.innerText = budgetInput.value
    // Racunanje novog stanja
    calculateBalance()
    // Reset polja za unos budzeta
    budgetInput.value = ''
})

// Dodavanje troskova
addExpenseBtn.addEventListener('click',()=>{
    // Dodavanje u listu troskova
    expenseList.push({
        message: budgetExpenseMessage.value,
        amount: budgetExpenseAmount.value
    })
    // Povecanje iznosa za trosak
    expense.innerText = +expense.innerText + +budgetExpenseAmount.value
    // Racunanje novog stanja
    calculateBalance()
    // Resetovanje forme za unos troskova
    budgetExpenseMessage.value = ''
    budgetExpenseAmount.value = ''
})

function calculateBalance(){
    balance.innerText = +budget.innerText - +expense.innerText
}