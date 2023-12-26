let billAmountInput=document.getElementById("billAmount");
let percetageTipInput=document.getElementById("percentageTip");

let tipAmountInput=document.getElementById("tipAmount");
let totalAmountInput=document.getElementById("totalAmount");

let errorMessage="Please Enter a Valid Input.";
let errorMessageInput=document.getElementById("errorMessage");

function calculate(){
    let billAmountValue=billAmountInput.value;
    let percetageTipValue=percetageTipInput.value;

    if(billAmountValue ===""){
        errorMessageInput.textContent=errorMessage;

    }
    else if(percetageTipValue ===""){
        errorMessageInput.textContent=errorMessage;
    }
    else{
        errorMessageInput.textContent="";

        let billAmountInt=parseInt(billAmountValue);
        let percentageTipInt=parseInt(percetageTipValue);

        let calculateTip=(percentageTipInt/100)*billAmountInt;

        let calculatedTotal=billAmountInt+calculateTip;

        tipAmountInput.value=calculateTip;
        totalAmountInput.value=calculatedTotal;


    }
}