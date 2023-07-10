const billTotalInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv =document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')
const warning = document.getElementById('warning')
const clearBtn = document.getElementById('clearbtn')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill =() => {
    //get the bill amount and convert it to number 
const bill = Number(billTotalInput.value)
    // get the tip from user and convert it to percentage
const tip = Number(tipInput.value)
    let newTip = tip/100;
   //get the tip amount
let tipAmount = bill*newTip
    // calculate the total bill( tip amount + bill)
const totalBill = tipAmount + bill;
    //calculate the number of people divide by amount
const perPersonTotal = totalBill/numberOfPeople
    //update the perPerTotal on DOM
perPersonTotalDiv.innerText =`$${perPersonTotal.toFixed(2)}`

}

const increasePeople= () => {
    // increase the number of people
    numberOfPeople ++
    numberOfPeopleDiv.innerText = numberOfPeople 
    warning.innerHTML = ""
    calculateBill()
}

const decreasePeople = () => {
    //decrease the number of people
    
    if (numberOfPeople <=1){
        warning.innerText = `Hey! you can go less than one person`
        return

        //stop the function if the number is less than one
    }
    numberOfPeople --
    numberOfPeopleDiv.innerText = numberOfPeople

    calculateBill()
}

//clear

clearBtn.addEventListener('click', () =>{
    billTotalInput.value = ''
    tipInput.value =''
    perPersonTotalDiv.innerHTML = '$.00'
    warning.innerText = ''
})
