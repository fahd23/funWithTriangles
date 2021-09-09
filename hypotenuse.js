const inputs = document.querySelectorAll(".length-inputs");
const calculateButton =document.querySelector("#calculate-btn");
const output =document.querySelector("#output");

function calculateSumOflengths(a,b){
    const sumOfSquareOfLength = a*a + b*b;
    return sumOfSquareOfLength;
}

function calculateHypotenuse(){
    const sumOfSquareOfLength = calculateSumOflengths(Number(inputs[0].value),Number(inputs[1].value));
    const hypotenuseLength =  Math.sqrt(sumOfSquareOfLength);
    output.innerText ="The length of Hypotenuse is "+ hypotenuseLength;
}

calculateButton.addEventListener("click",calculateHypotenuse);