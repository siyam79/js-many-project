let button = document.getElementById('button-depo').addEventListener('click', function () {
    let inputFild = document.getElementById('depo-feild');
    let newInputvalue = inputFild.value;
    let convertNumberType = parseFloat(newInputvalue);
    inputFild.value = '';

    if (isNaN(convertNumberType)) {
        alert('Please Type Your Number');
        return;
    } 
     if (convertNumberType < 0 ){
        alert('Nagetive Value Not Allow');
        return '';
    }
    
   
    let totalDepoSite = document.getElementById('total-depo');
    let previousTotalDepo = totalDepoSite.innerText;
    let numberType = parseFloat(previousTotalDepo);
    let currentDepoBalance = numberType + convertNumberType;



    let balanceId = document.getElementById('balance');
    let previousTotalBalance = balanceId.innerText;
    let banalceNumberType = parseFloat(previousTotalBalance);

    let currentMyBalance = banalceNumberType + convertNumberType;

    balanceId.innerText = currentMyBalance;

    totalDepoSite.innerText = currentDepoBalance;

})

let withDraw = document.getElementById('button-with').addEventListener('click', function () {
    let withDrawInput = document.getElementById('Withdraw-feild');
    let inputValue = withDrawInput.value;
    let withDrawValueConvert = parseFloat(inputValue);
    withDrawInput.value = '';

    if (isNaN(withDrawValueConvert)) {
        alert('Please Type Your Number');
        return;
    }
    

    let totalWithDrawSite = document.getElementById('total-withDraw');
    let previousWithDraw = totalWithDrawSite.innerText;
    let withDrawInputConvert = parseFloat(previousWithDraw);


    //     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    let balanceId = document.getElementById('balance');
    let previousTotalBalance = balanceId.innerText;
    let banalceNumberType = parseFloat(previousTotalBalance);
    withDrawInput.value = '';
    if (withDrawValueConvert > banalceNumberType) {
        alert('Apner Sosur Ar Account Atto taka Balance nai')
        return '';
    } 
    if(withDrawValueConvert < 0){
        alert('Nagetive Value Not Allow');
        return '';
    } 
    
    let totalWithDrawvaleu = withDrawValueConvert + withDrawInputConvert;

    let currentMyBalance = banalceNumberType - withDrawValueConvert;

    balanceId.innerText = currentMyBalance;


    totalWithDrawSite.innerText = totalWithDrawvaleu;
    
   


})