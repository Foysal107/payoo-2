document.getElementById('btn-add-money')
.addEventListener('click',function(event){
    event.preventDefault();
  
const addMoney =document.getElementById('input-add-money').value;
const addMoneyNumber = parseFloat(addMoney)
const addPassword = document.getElementById('input-pin-number').value;
console.log(addPassword,addMoney);
// wrong way to verify pin  
if(addPassword==='1234'){
const blance = document.getElementById('Account').innerText;
const blanceNumber = parseFloat(blance);
const newblance = blanceNumber + addMoneyNumber;
document.getElementById('Account').innerText=newblance;
}
else{
    alert('Faild to add money')
}
})