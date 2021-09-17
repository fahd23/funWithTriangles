const inputs = document.querySelectorAll(".length-inputs");
const calculateButton =document.querySelector("#calculate-btn");
const output =document.querySelector("#output");

function calculateSumOflengths(a,b){
    const sumOfSquareOfLength = a*a + b*b;
    return sumOfSquareOfLength;
}

function calculateHypotenuse(){
    if(Number(inputs[0].value) > 0 && Number(inputs[1].value) > 0){
        const sumOfSquareOfLength = calculateSumOflengths(Number(inputs[0].value),Number(inputs[1].value));
        const hypotenuseLength =  Math.sqrt(sumOfSquareOfLength);
        output.innerText ="The length of Hypotenuse is "+ hypotenuseLength;
    }else{
        output.innerText ="Enter the valid lengths";
    }

}

calculateButton.addEventListener("click",calculateHypotenuse);