document.getElementById('celculet-button').addEventListener('click', function () {

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

})

