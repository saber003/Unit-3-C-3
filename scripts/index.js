// Store the wallet amount to your local storage with key "amount"

let arr = JSON.parse(localStorage.getItem("amount")) || [];

document.querySelector("#add_to_wallet").addEventListener("click", myFunction);

function myFunction(){

    let input = document.querySelector("#amount").value;
    // console.log (input);

    let wallet = document.querySelector("#wallet");
    wallet.innerText=input;
    
    let wallet_value= wallet.innerHTML;

document.querySelector("#navbar").append(wallet);


arr.push(wallet_value);

localStorage.setItem("amount",JSON.stringify(arr));
}