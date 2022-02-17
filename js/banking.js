// handle deposit button event

document.getElementById('deposit-button').addEventListener('click', function () {

    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');

    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositAmount);

    //  updete deposit totla
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // clear the input field
    depositInput.value = '';

    // update account balance

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const perviousBalanceTotal = parseFloat(balanceTotalText);
    const newBalenceTotal = perviousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalenceTotal;

})

// handle withdraw event handler

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText)
    console.log(newWithdrawAmount);

    //  set withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTolal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTolal;


    // update balance with withdraw

    const balanceTotal = document.getElementById('balance-total')
    const perviousBalanceText = balanceTotal.innerText;
    const perviousBalanceTotal = parseFloat(perviousBalanceText);
    const newBalanceTotal = perviousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;



    // clear the input fild
    withdrawInput.value = '';
})
