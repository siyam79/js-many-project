 
let total = 0;
function addButtton (data){
    
 let productName = data.parentNode.childNodes[5].innerText;
 let li = document.createElement('li');
 li.innerText = productName;
 let addItems = document.getElementById('add-item');
 addItems.appendChild(li);
 
 
 let amount = data.parentNode.childNodes[7].innerText.split(' ')[1];
 
  total = parseInt(total) + parseInt(amount);
  let totalPrice = document.getElementById('total-taka').innerText = total;

}