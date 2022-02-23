document.getElementById('celculet-button').addEventListener('click', function () {
    // const erorMassege = document.getElementById('eror');
    // if (newIncomeAmount < updetTotal[erorMassege.style.display = block]);



    // get the amount income
    const incomeInput = document.getElementById('income-input');

    const newIncomeAmountText = incomeInput.value;
    const newIncomeAmount = parseFloat(newIncomeAmountText);
    console.log(newIncomeAmount);

    // clear the input field
    incomeInput.value = '';

    // get the food amount 
    const foodInput = document.getElementById('food-input');

    const newFoodAmountText = foodInput.value;
    const newFoodAmount = parseFloat(newFoodAmountText);
    console.log(newFoodAmount);

    // clear the input field
    foodInput.value = '';

    // get the rent amount 

    const rentInput = document.getElementById('rent-input');

    const newRentAmountText = rentInput.value;
    const newRentAmount = parseFloat(newRentAmountText);
    console.log(newRentAmount);

    // clear the input field 

    rentInput.value = '';

    // get the clothes amount

    const clothesInput = document.getElementById('clothes-input');

    const newClothesAmountText = clothesInput.value;
    const newClothesAmount = parseFloat(newClothesAmountText);
    console.log(newClothesAmount);

    // clear the input field 
    clothesInput.value = '';

    // get  total Expenses


    const totalCost = document.getElementById('total-expen');

    const previusTotalCost = totalCost.innerText;
    const previusincomeCost = parseFloat(previusTotalCost);

    const updetTotal = newFoodAmount + newRentAmount + newClothesAmount;
    totalCost.innerText = updetTotal;

    // get balance
    const balance = document.getElementById('Balance');

    const updetBalance = balance.innerText;
    const oldBalance = parseFloat(updetBalance);

    const updetMyBalance = newIncomeAmount - updetTotal;
    balance.innerText = updetMyBalance;

})

